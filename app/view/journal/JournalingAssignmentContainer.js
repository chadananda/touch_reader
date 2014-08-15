

Ext.define('book.view.journal.JournalingAssignmentContainer', {
    extend: 'Ext.Panel',
    xtype: 'jaournalingassignmentcontainer',
    requires: [],
    config: {         
        
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer',
               
            },
            {
                xtype: 'jaournalingassignment',
            },
            {
                xtype: 'spacer',
               
            }
        ]
    }
})

