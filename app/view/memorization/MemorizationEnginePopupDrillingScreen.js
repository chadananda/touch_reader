

Ext.define('book.view.memorization.MemorizationEnginePopupDrillingScreen', {
    extend: 'Ext.Panel',
    xtype: 'memorizationpopupdrillingscreen',
    requires: [],
    config: {         
        cls: 'memorization_panel',
        flex:1,
        layout: 'hbox',       
        items: [
            
            {
                flex:1,
                xtype: 'videoplayer'
            },
            {
                flex:1,
                xtype: 'memorizationdeck',
            }           
        ]
    }
})

