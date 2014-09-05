Ext.require(['book.store.SSearchScreen'], function() {

Ext.define('book.view.TopSearchField', {
    extend: 'Ext.Panel',
    xtype: 'topsearchfield',
    requires: ['Ext.dataview.List'],
    config: {
       
        floating: true,
        zIndex: 10000,
        cls: 'top_search_panel',        
        id: 'top_search',              
        width: 700,
        height: 48,
        //centered: true,
        modal: true,
        hideMode: 'close',
        hideOnMaskTap: true,
        layout: 'vbox',
        
        items: [
            {
                xtype: 'searchfield',
                placeHolder: 'As-you-type search results',
                clearIcon: false,
                name: 'search',
                itemId: 'searchBox',
            },
            {
                flex:1,
                layout: 'hbox',
                items:[
                    {
                        cls:'search_left_panel',
                        width:335,
                        height: '', 
                        xtype: 'list',
                        store: Ext.create('book.store.SSearchScreen'),
                        itemTpl: '<div class="list_book_icon"> <img src="resources/images/book_icon.png"></div><div class="list_book_text"> {text}</div>',
                        grouped: true,
                    },
                    {
                        //scrollable:true,
                        width:335,
                        itemId:'right_search_panel',                        
                        hidden:true,
                        xtype: 'listselecrsearchresultcontainer'
                    }                    
                ]
            }
        ],
        showAnimation: {
            type: 'slide',
            duration: 1,
            direction: 'up',
        },
        plugins: [new Ext.create('book.ux.PanelAction',{
            iconClass: 'x-panel-action-icon-close',
            iconPressedClass: '',
            position: 'tl',
            actionMethod: ['hide'] 
        })
        ]
    }
})
});

