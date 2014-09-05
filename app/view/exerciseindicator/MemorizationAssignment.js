

Ext.define('book.view.exerciseindicator.MemorizationAssignment', {
    extend: 'Ext.Panel',
    xtype: 'memorizationassignment',
    requires: ['Ext.field.Checkbox'],
    config: {         
        cls: 'assessment_quiz_panel',
        width:360,
        layout:'hbox',       
        items: [
            {
               layout:'vbox',
               cls: 'left_icon',
               items:[
                    {
                        html: '<img src="resources/images/memorization_exercise_icon.png">'
                    },
                    {
                        cls:'checkbox_bckgrnd',
                        items:[
                            {
                                xtype: 'checkboxfield',
                                name : 'completed',
                                itemId: 'checkbox',
                                checked: true
                            },
                            {
                                html: '<div class="exercise_score">12</div>'
                            }
                        ]
                    }
                ]
            },
            {
               layout:'vbox',
               cls: 'right_question',
               items:[
                    {
                        width:260,                        
                        html: [
                            '<div class="title">Key Banking Terminology</div>',
                            '<div class="question">Before proceeding, let’s quickly memorize some key banking terms which we will need for this section.</div>'
                        ].join("")
                    },
                    {
                        layout:'hbox',
                        margin: '20px 0px 0px 0px',
                        items:[
                            {
                                xtype:'spacer',
                            },
                            {
                                width:50,
                                height:30,
                                xtype: 'button',
                                html: '<img src="resources/images/resume_icon.png">',
                                iconAlign: 'right',
                                align: 'right'
                            }
                        ]
                    }
                ]
            }
        ]
    }
})

