
Ext.define('book.view.ReadBookPageList', {
    extend: 'Ext.Panel',
    xtype: 'readbookpagelist',    
    requires: [],         
    config: { 
        flex:1,
        cls: 'read_book_page',
        layout: 'hbox',
        items: [
            {
                xtype: 'iframe',
                flex:1,
                itemId: 'iframe'
            }
        ]
    }
})
