

Ext.define('book.view.TopSearchField', {
    extend: 'Ext.Panel',
    xtype: 'topsearchfield',
    requires: ['Ext.ux.AccordionList'],
    config: {
       
        floating: true,
        zIndex: 10000,
        cls: 'top_search_panel',        
        id: 'top_search',              
        width: 500,
        height: 60,
        //centered: true,
        modal: true,
        hideMode: 'close',
        hideOnMaskTap: true,
        layout: 'vbox',
        
        items: [
           
            {
              
                xtype: 'searchfield',
                placeHolder: 'Search...',
                name: 'search',
                itemId: 'searchBox',
            },
            {
              html: '',
              itemId: 'search_result'
            },
            {
                height: '', 
                xtype: 'accordionlist',
                pinHeaders: false,
                store: Ext.create('book.store.SSearchScreen'),
                headerItemTpl: [
                    '<tpl if="this.isExpanded(values)">',
                        '<div class="setting_wrapper">',
                        '<div class="search_down"><img src="{open_book_icon}"></div>',
                        '<div <tpl if="values.year">style="font-style:italic;"<img src="{open_book_icon}"></tpl>>',
                        '{text}</div></div>',
                    '<tpl else>',
                        '<div class="setting_wrapper">',
                        '<div class="search_right"><img src="{open_book_icon}"></div>',
                        '<div <tpl if="values.year">style="font-style:italic;"</tpl>>',
                        '{text}</div></div>',
                    '</tpl>'
                ].join(''),
                contentItemTpl: [
                    '<div class="setting_wrapper">',
                        '<div class="search_down"><img src="{open_book_icon}"></div>',
                        '<div <tpl if="values.year">style="font-style:italic;"<img src="{open_book_icon}"></tpl>>',
                        '{text}</div></div>',
                     
                    
                ].join(''),
                
                useSelectedHighlights: false,
                showCount: true,
                animation: true,
                indent: true,
                animationDuration: 300,
                flex: 1,
                itemId: 'nested',
                //emptyText: '<div style="margin-top: 20px; text-align: center">No Search Found</div>',
              
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

