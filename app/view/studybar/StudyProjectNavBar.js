Ext.define('book.view.studybar.StudyProjectNavBar', {
    extend: 'Ext.Panel',
    xtype: 'studyprojectnavbar',
    requires: ['Ext.Img'],
    config: { 
        
        layout:'hbox',        
        docked: 'top',    
        hidden:false,
       
        cls: 'study_project_titlebar',
        items: [
                
            {
               flex:1,
               layout:'vbox',
               items:[
                  
                    {
                        layout: 'hbox',
                        items:[{
                            xtype: 'image',
                            src: 'resources/images/study_course_icon.png',
                            width:40,
                            height:38,
                            align: 'left',
                            style:'margin-right:10px;'
                        },{                
                    
                            cls: 'dropdown_menu',
                            xtype: 'button',
                            text: 'Current Study Project Title <img src="resources/images/down_arrow.png">',
                            itemId: 'study_project_book',
                            align: 'left'
                        },
                        {               
                            xtype: 'button',
                            iconCls: 'info',
                            itemId: 'info_screen_btn',
                            align: 'left',
                            style:'margin-left:10px;'          
                        }]
                    },
                    {
                    layout: 'hbox',
                        cls: 'progress_assemnt',
                        items:[{               
                   
                           html:'Score: 325/500, 87%',
                           align: 'right',
                           style:'margin-left:60px;' 
                      
                        },
                        
                        {               
                            html:'Progress: 14.2%',
                            align: 'right',
                            style:'margin-left:20px;' 
                      
                        }]
                    }                   
               ]
            },
           // {
           //  xtype: 'spacer'
           // },
            {
               flex:1,
               layout:'vbox',
               cls: 'activities_btns',
               items:[
                  
                    {
                            layout: 'hbox',
                            items:[{               
                                xtype: 'button',                
                                text: '<img src="resources/images/memorize_icon.png"> Memorize',
                                align: 'left',
                                ui: 'round',
                                badgeText: '12'
                          
                            },
                            
                            {               
                                xtype: 'button',                
                                text: '<img src="resources/images/vocab_quiz_icon.png"> Vocab Quiz',
                                align: 'left',
                                ui: 'round',
                                badgeText: '1'
                          
                            }]
                    },
                    {
                        layout: 'hbox',
                        items:[{               
                            xtype: 'button',                
                            text: '<img src="resources/images/discuss_icon.png"> Discuss',
                            align: 'right',
                            ui: 'round',
                            badgeText: '10'
                      
                        },
                        
                        {               
                            xtype: 'button',                
                            text: '<img src="resources/images/assignment_icon.png"> Assignment',
                            align: 'right',
                            ui: 'round',
                            badgeText: '1'
                      
                        }]
                    }                   
               ]
            },
            {
                xtype: 'button',                
                text: 'Resume',
                iconCls:'arrow_right',
                iconAlign: 'right'  
            }             
        ]
    }
});
// JavaScript Document

