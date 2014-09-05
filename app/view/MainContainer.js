Ext.define('book.view.MainContainer', {
    extend: 'Ext.Container',
    xtype: 'maincontainer',
    requires: [],
    config: { 
        layout:'hbox',
        flex:1,
        items: [
            {
              flex:1,
              xtype: 'categorymaincontainer'
            }
        ]
    }
});
