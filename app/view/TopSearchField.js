

Ext.define('book.view.TopSearchField', {
    extend: 'Ext.Panel',
    xtype: 'topsearchfield',
    requires: ['Ext.ux.AccordionList'],
    config: {
        height: '',
        id: 'top_search',
        left: '5%',
        top: '0%',
        width: '50%',
        hideOnMaskTap: true,
        modal: true ,
        cls: 'top_search_panel',
        //flex:1,
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
        ]
    }
})

