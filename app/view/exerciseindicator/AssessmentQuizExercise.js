

Ext.define('book.view.exerciseindicator.AssessmentQuizExercise', {
    extend: 'Ext.Panel',
    xtype: 'assessmentquizexercise',
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
                        html: '<img src="resources/images/quiz_exercise_icon.png">'
                    },
                    {
                        cls:'checkbox_bckgrnd',
                        items:[
                            {
                                xtype: 'checkboxfield',
                                name : 'completed',
                                itemId: 'checkbox',
                                checked: true,
                            },
                            {
                                html: '<div class="exercise_score">12/15</div>'
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
                            '<div class="title">Basic Banking Terminology</div>',
                            '<div class="question">In this quiz you will demonstrate your knowledge of basic banking and monetary nomenclature.</div>'
                        ].join("")
                    },
                    {
                        layout:'hbox',
                        margin: '20px 0px 0px 0px',
                        items:[
                            {
                                xtype:'spacer'
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

