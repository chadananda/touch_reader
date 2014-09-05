Ext.define('book.view.studybar.StudyProjectNavBar', {
    extend: 'Ext.TitleBar',
    xtype: 'studyprojectnavbar',
    requires: ['Ext.Img'],
    config: {        
        layout:'hbox',
        cls:'study-titlebar',
        docked: 'top',
        title: '',
        ui: 'bluenav',
        items: [
            {
                xtype: 'button',
                html: '<div class="course_logo"><img src="resources/images/course_logo.png"></div>',
                align: 'left',
                style:'border-left: none;'
            },
            {   
                cls:'resume',
                xtype: 'button',
                text: 'Current Study Project Title',
                itemId: 'study_project_book',
                align: 'left',
                ui: 'bluenav' 
            },
            {               
                cls:'study_info',
                xtype: 'button',
                iconCls: 'info',
                itemId: 'info_screen_btn',
                align: 'left',
                style:'border-left: none;'         
            },
            {               
               cls: 'progress_assemnt',    
               html:'Score: 325/500, 87%<br>Progress: 14.2%',
               align: 'left',
               style:'border-left: none;'
          
            },
            {               
                xtype: 'button',                
                html: '<div class="main_btn"><div class="image"><img src="resources/images/memorize_icon.png"></div><div class="text">Memorize</div></div>',
                align: 'right',
                ui: 'study',
                badgeText: '12'
            },
            /*
            {               
                xtype: 'button',
                html: '<div class="main_btn"><div class="image"><img src="resources/images/vocab_quiz_icon.png"></div><div class="text">Vocab Quiz</div></div>',
                align: 'left',
                ui: 'study',
                badgeText: '2'
          
            },
            */
            {               
                xtype: 'button',
                html: '<div class="main_btn"><div class="image"><img src="resources/images/discuss_icon.png"></div><div class="text">Discuss</div></div>',
                align: 'right',
                ui: 'study',
                badgeText: '10'
            },
            {               
                xtype: 'button',
                html: '<div class="main_btn"><div class="image"><img src="resources/images/assignment_icon.png"></div><div class="text">Assignment</div></div>',
                align: 'right',
                ui: 'study',
                badgeText: '1',
                style: 'border-right:1px solid #768963;'
            },
            {
                xtype: 'button',                
                html: '<div class="resume"><div class="resume_img"><img src="resources/images/resume_icon.png"></div><div class="resume_text">Resume</div></div>',
                align: 'right',
                 style: 'border-left:none;'
            } 
        ]
    }
});
