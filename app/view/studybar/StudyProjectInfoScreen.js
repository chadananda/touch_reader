Ext.define('book.view.studybar.StudyProjectInfoScreen', {
    extend: 'Ext.Panel',
    xtype: 'studyprojectinfoscreen',
    requires: [],
    config: {
        height: '60%',
        id: 'info_screen',
        left: '5%',
        padding: 10,
        top: '0%',
        width: '60%',
        hideOnMaskTap: true,
        modal: true ,
         layout: 'vbox',
        cls: 'popup_panel',
        items: [
            {
                html: [
                    '<div class="info_screen_wrapper">',
                        '<div class="info_screen_image">',
                            '<img src="resources/images/study_course_icon.png">',
                        '</div>',
                        
                        '<div class="info_screen_contnt">',
                            '<p class="stdy_projct_name">Current Study Project Name</p>',
                            '<p class="stdy_projct_desc">Brief description of this study project<br>',
                            '<i style="color:#53585e;">This study course is owned by you and was started on July 12, 2013 Of the 372 pages of reading in this course, you have completed 14.2%</i></p>',
                        '</div>',
                    '</div>'
                
                ].join("")
            },
            {
                html: [
                    '<div class="info_screen_wrapper" style="margin-top:10px;">',
                        '<div class="info_screen_image">',
                            '<img src="resources/images/members_list_icon.png">',
                        '</div>',
                        
                        '<div class="info_screen_contnt">',
                            '<p class="stdy_projct_name">Other Participants: <span style="color:#1b5d2f;">(3)</span> — Invite Code: <span style="color:#1b5d2f;">farlan32</span></p>',
                        '</div>',
                    '</div>'
                ].join(""),
            },
            {
                 xtype: 'memberslinklist',
            },
            {
                html:['<div class="member_list_wrapper">',
                        
                        '<div class="memmsg_icon">',
                            '<img src="resources/images/members_list_allmsg_icon.png">',
                        '</div>',
                    '</div>'
                    ].join(""),
            },
            {
                html: [
                    '<div class="info_screen_wrapper">',
                        '<div class="info_screen_image">',
                            '<img src="resources/images/study_reporting_icon.png">',
                        '</div>',
                        
                        '<div class="info_screen_contnt">',
                            '<p class="stdy_projct_name">Study Project Content:</p>',
                            '<p class="stdy_projct_desc"><img src="resources/images/study_reporting_list_icon.png"><i style="padding-left:10px;">An Introduction to Financial Literature, by David Stockman</i></p>',
                        '</div>',
                    '</div>'
                
                ].join("")
            },
        ]
    }
});
