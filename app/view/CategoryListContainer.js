Ext.define('book.view.CategoryListContainer', {
    extend: 'Ext.Container',
    xtype: 'categorylistcontainer',
    requires: [],
    config: { 
        layout:'vbox',
        //cls: 'search_book_container',
        flex:1,
        items: [
            
            {
              xtype: 'tabpanel'
            },
            //{
              //flex:1,
            //  xtype: 'ownedbooklist'
           // }
        ]
    }
});
