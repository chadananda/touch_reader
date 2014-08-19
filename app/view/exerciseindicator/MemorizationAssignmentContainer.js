

Ext.define('book.view.exerciseindicator.MemorizationAssignmentContainer', {
    extend: 'Ext.Panel',
    xtype: 'memorizationassignmentcontainer',
    requires: [],
    config: {         
        
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer',
               
            },
            {
                xtype: 'memorizationassignment',
            },
            {
                xtype: 'spacer',
               
            }
        ]
    }
})

