Ext.define('book.view.AddBookView', {
    extend: 'Ext.Panel',
    xtype: 'addbookview',
    requires: [],
    config: { 
        layout:'vbox',
        //cls: 'search_book_container',
        
        items: [
            
            {
                xtype: 'button',
                text: '+ | Add Book',
                ui: 'confirm',
            }
        ]
    }
});
