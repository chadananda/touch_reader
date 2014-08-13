Ext.define('book.view.MainBookContainer', {
    extend: 'Ext.Container',
    xtype: 'mainbookcontainer',
    requires: [],
    config: { 
        layout:'vbox', 
        //cls: 'search_book_container',
        //flex:1,
        items: [
            /*
            {
                xtype: 'sidebarmenu',
                //hidden: true
            },*/
            {
                flex:1,
                xtype: 'readbookpagelist', 
            }
        ]
    }
});
