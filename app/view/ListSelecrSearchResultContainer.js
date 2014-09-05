

Ext.define('book.view.ListSelecrSearchResultContainer', {
    extend: 'Ext.Panel',
    xtype: 'listselecrsearchresultcontainer',
    requires: [],
    config: { 
        cls: 'book_list_result',
        layout: 'vbox',
        items:[
            {   height:150,
                xtype: 'listselecrsearchresult'   
            },
            {
                flex:2,
                xtype: 'categoryaccordionlist'
            }
        ]
    }
})

