

Ext.define('book.view.memorization.MemorizationDeckContainer', {
    extend: 'Ext.Panel',
    xtype: 'memorizationdeckcontainer',
    requires: [],
    config: {         
        
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer',
               
            },
            {
                xtype: 'memorizationdeck',
            },
            {
                xtype: 'spacer',
               
            }
        ]
    }
})

