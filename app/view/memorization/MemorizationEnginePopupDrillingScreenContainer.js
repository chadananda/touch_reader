

Ext.define('book.view.memorization.MemorizationEnginePopupDrillingScreenContainer', {
    extend: 'Ext.Panel',
    xtype: 'memorizationpopupdrillingscreencontainer',
    requires: [],
    config: {         
        
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer',
               
            },
            {
                flex:5,
                xtype: 'memorizationpopupdrillingscreen',
            },
            {
                xtype: 'spacer',
               
            }
        ]
    }
})

