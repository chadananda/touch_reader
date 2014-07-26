Ext.define('book.view.RightSidebarContainer', {
    extend: 'Ext.Container',
    xtype: 'rightsidebarcontainer',
    requires: [],
    config: { 
        layout:'vbox',
        style: 'margin:10px 0px 0px 20px;',
        flex:1,
        items: [
            
            {
              xtype: 'addbookview'
            },
            
            {
              xtype: 'categoryaccordionlist'
            }
        ]
    }
});
