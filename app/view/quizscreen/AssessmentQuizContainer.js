

Ext.define('book.view.quizscreen.AssessmentQuizContainer', {
    extend: 'Ext.Panel',
    xtype: 'assessmentquizcontainer',
    requires: [],
    config: {         
        
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer',
               
            },
            {
                xtype: 'assessmentquiz',
            },
            {
                xtype: 'spacer',
               
            }
        ]
    }
})

