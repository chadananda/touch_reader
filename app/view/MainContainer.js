Ext.define('book.view.MainContainer', {
    extend: 'Ext.Container',
    xtype: 'maincontainer',
    requires: [],
    config: { 
        layout:'hbox',
        //cls: 'search_book_container',
        flex:1,
        items: [
            
            {
              flex:4,
              xtype: 'categorymaincontainer'
            },
            {
              flex:1,
              xtype: 'rightsidebarcontainer'
            }
        ]
    }
});
