Ext.define('book.view.CategoryMainContainer', {
    extend: 'Ext.Container',
    xtype: 'categorymaincontainer',
    requires: [],
    config: { 
        layout:'vbox',
        //cls: 'search_book_container',
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
