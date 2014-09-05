

Ext.define('book.view.exerciseindicator.DiscussionQueExerciseContainer', {
    extend: 'Ext.Panel',
    xtype: 'discussionqueexercisecontainer',
    requires: [],
    config: {         
        
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer'
            },
            {
                xtype: 'discussionqueexercise'
            },
            {
                xtype: 'spacer'
            }
        ]
    }
})

