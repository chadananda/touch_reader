

Ext.define('book.view.exerciseindicator.AssessmentQuizExerciseContainer', {
    extend: 'Ext.Panel',
    xtype: 'assessmentquizexercisecontainer',
    requires: [],
    config: {         
        
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer',
               
            },
            {
                xtype: 'assessmentquizexercise',
            },
            {
                xtype: 'spacer',
               
            }
        ]
    }
})

