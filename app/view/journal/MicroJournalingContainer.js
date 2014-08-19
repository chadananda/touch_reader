

Ext.define('book.view.journal.MicroJournalingContainer', {
    extend: 'Ext.Panel',
    xtype: 'microjournalingcontainer',
    requires: [],
    config: {         
        
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer',
               
            },
            {
                xtype: 'microjournaling',
            },
            {
                xtype: 'spacer',
               
            }
        ]
    }
})

