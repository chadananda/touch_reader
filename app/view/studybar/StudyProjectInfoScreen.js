Ext.define('book.view.studybar.StudyProjectInfoScreen', {
    extend: 'Ext.Panel',
    xtype: 'studyprojectinfoscreen',
    requires: [],
    config: {
        
        floating: true,
        zIndex: 10000,
        cls: 'popup_panel',        
        id: 'info_screen',              
        width: 540,
        height: 495,
        //centered: true,
        padding: 10,
        modal: true,
        hideMode: 'close',
        hideOnMaskTap: true,
        layout: 'vbox',
       
        items: [
            {
                html: '<div style="float:right;margin-bottom:5px;"><img src="resources/images/panel_read_icon.png"></div>'
            },
            {
                cls:'info_screen',
                html: [
                    '<div class="info_screen_wrapper">',
                        '<div class="info_screen_image">',
                            '<img src="resources/images/study_course_icon.png">',
                        '</div>',
                        
                        '<div class="info_screen_contnt">',
                            '<p class="stdy_projct_name">CURRENT STUDY PROJECT TITLE</p>',
                            '<p class="stdy_projct_desc"><b>Brief description of this study project</b></p>',
                            '<p class="stdy_projct_desc">This study course is owned by you and was started on July 12, 2013 Of the 372 pages of reading in this course, you have completed 14.2%</p>',
                        '</div>',
                    '</div>'
                
                ].join("")
            },
            {
                cls:'info_screen',
                
                items:[
                    {
                        html: [
                            '<div class="info_screen_wrapper">',
                                '<div class="info_screen_image">',
                                    '<img src="resources/images/members_list_icon.png">',
                                '</div>',
                                
                                '<div class="info_screen_contnt">',
                                    '<p class="stdy_projct_name">OTHER PARTICIPANTS: (3) — <span style="color:#393a38;">Invite Code: farlan32</span></p>',
                                '</div>',
                            '</div>'
                        ].join(""),
                    },
                    {
                        xtype: 'memberslinklist',
                    },
                    {
                        layout: 'hbox',
                        cls:'memmsgall_btn', 
                        items:[
                            {
                                flex:1,
                                xtype: 'spacer'
                            },
                            {
                                xtype: 'button',
                                text: 'Message All <img src="resources/images/members_list_allmsg_icon.png">',
                                width:130,
                                align:'right',
                            }
                        ]
                    }
                ]  
            },
            {
                cls:'info_screen',
                html: [
                    '<div class="info_screen_wrapper">',
                        '<div class="info_screen_image">',
                            '<img src="resources/images/study_course_icon.png">',
                        '</div>',
                        
                        '<div class="info_screen_contnt">',
                            '<p class="stdy_projct_name">STUDY PROJECT CONTENT:</p>',
                            '<p class="stdy_projct_desc"><img src="resources/images/study_reporting_list_icon.png"> An Introduction to Financial Literature, by David Stockman</p>',
                        '</div>',
                    '</div>'
                
                ].join("")
            }
        ],
        showAnimation: {
            type: 'slide',
            duration: 1,
            direction: 'up',
        },
        plugins: [new Ext.create('book.ux.PanelAction',{
            iconClass: 'x-panel-action-icon-close',
            iconPressedClass: '',
            position: 'tr',
            actionMethod: ['hide'] 
        })
        ]
    }
});
