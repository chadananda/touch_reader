

Ext.define('book.view.exerciseindicator.DiscussionQueExercise', {
    extend: 'Ext.Panel',
    xtype: 'discussionqueexercise',
    requires: ['Ext.field.Checkbox'],
    config: {         
        cls: 'discussionque_panel',
        width:350,
        layout:'hbox',       
        items: [
            
            {
               layout:'vbox',
               cls: 'left_icon',
               items:[
                    {
                        html: '<img src="resources/images/discussion_icon.png">',
                    },
                    {
                        xtype: 'checkboxfield',
                        name : 'completed',
                        checked: false
                    }
                ]
            },
            {
               layout:'vbox',
               cls: 'right_question',
               items:[
                    {
                        width:240,                        
                        html: [
                            '<div class="title">Money vs. Wealth</div>',
                            '<div class="question">When money supply is increased, where does the recipient\'s new wealth come from?</div>',
                        ].join("")
                    },
                    {
                        layout:'hbox',
                        margin: '20px 0px 0px 0px',
                        items:[
                            {
                                xtype:'spacer',
                            },{
                                width:80,
                                height:40,
                                xtype: 'button',
                                iconCls:'arrow_right',
                                text: '&nbsp;&nbsp;&nbsp;&nbsp;',
                                iconAlign: 'right',
                                align: 'right',
                            }
                        ]
                        
                        
                    }
                ]
                
            }
        ]
    }
})

