Ext.define('book.view.StudyProjectNavBar', {
    extend: 'Ext.TitleBar',
    xtype: 'studyprojectnavbar',
    requires: ['Ext.Img'],
    config: { 
        layout:'hbox',
        xtype: 'titlebar',
        cls:'my-titlebar',
        docked: 'top',
        title: '',
        ui: 'bluenav',
        hidden:false,
        items: [
                /** item[0]**/
            {
                xtype: 'image',
                src: 'resources/images/study_course_icon.png',
                width:40,
                height:38,
                align: 'left',
                style:'margin-right:10px;'
            },
            {                
                
                cls: 'dropdown_menu',
                xtype: 'button',
                text: 'Current Study Project Title <img src="resources/images/down_arrow.png">',
                itemId: 'study_project_book',
                align: 'left',
            },
            {               
                xtype: 'button',
                iconCls: 'info',
                itemId: 'more_info_stdy_proj',
                align: 'left',          
            },
            {               
                xtype: 'button',
                cls:'activity_btn',                
                text: '<img src="resources/images/memorize_icon.png"> Memorize',
                align: 'right',
                ui: 'round',
                badgeText: '2'
          
            },
            
            {               
                xtype: 'button',
                cls:'activity_btn',                
                text: '<img src="resources/images/vocab_quiz_icon.png"> Vocab Quiz',
                align: 'right',
                ui: 'round',
                badgeText: '2'
          
            },
            {               
               
               cls:'tab_mar_left',
               html:'Score: 325/500, 87%',
               align: 'left',
          
            },
            
            {               
                cls:'tab_mar_left',
                html:'Progress: 14.2%',
                align: 'left',
          
            },
            {               
                xtype: 'button',
                cls:'activity_btn',                
                text: '<img src="resources/images/discuss_icon.png"> Memorize',
                align: 'right',
                ui: 'round',
                badgeText: '2'
          
            },
            {               
                xtype: 'button',
                cls:'activity_btn',                
                text: '<img src="resources/images/assignment_icon.png"> Vocab Quiz',
                align: 'right',
                ui: 'round',
                badgeText: '2'
          
            },              
        ]
    }
});
// JavaScript Document

