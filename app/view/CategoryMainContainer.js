Ext.define('book.view.CategoryMainContainer', {
    extend: 'Ext.Container',
    xtype: 'categorymaincontainer',
    requires: [],
    config: { 
        layout:'vbox',
        flex:1,
        items: [
            {
              xtype: 'searchbooksview'
            },
            {
              flex:1,
              xtype: 'tabpanel'
            }
        ]
    }
});
