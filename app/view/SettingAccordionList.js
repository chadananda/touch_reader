
Ext.define('book.view.SettingAccordionList', {
    extend: 'Ext.Panel',
    xtype: 'settingaccordionlist',  
    requires: ['Ext.ux.AccordionList'],     
    config: {     
        floating: true,
        zIndex: 10000,
        cls: 'setting_accordion_list',        
        id: 'top_setting',              
        width: 500,
        height: 310,
        modal: true,
        hideMode: 'close',
        hideOnMaskTap: true,
        layout: 'vbox',
        padding:10,           
        items: [
            {
                xtype: 'accordionlist',
                store: Ext.create('book.store.SSettingAccordionList'),
                headerItemTpl: [
                    '<tpl if="this.isExpanded(values)">',
                        '<div class="setting_wrapper">',
                        '<div class="down"><img src="{open_book_icon}"></div>',
                        '<div <tpl if="values.year">style="font-style:italic;"<img src="{open_book_icon}"></tpl>>',
                        '<div class="setting_text">{text}<img src="{book_open_infoicon}"></div></div></div>',
                    '<tpl else>',
                        '<div class="setting_wrapper">',
                        '<div class="right"><img src="{open_book_icon}"></div>',
                        '<div <tpl if="values.year">style="font-style:italic;"</tpl>>',
                        '<div class="setting_text">{text}<img src="{book_open_infoicon}"></div></div></div>',
                    '</tpl>'
                ].join(''),
                contentItemTpl: [
                    '<div class="setting_wrapper" style="display:-webkit-box;text-align:left;">',
                        '<div style="width:10%;"><img src="{open_book_icon}"></div>',
                        '<div style="width:80%;text-align:left;">{sales}</div>',
                        '<div style="width:10%;" class="setting_badge_bckgrnd">{badgeText}</div>',
                    '</div>'
                ].join(''),
                useSelectedHighlights: false,
                animation: true,
                indent: true,
                animationDuration: 300,
                flex: 1,
                itemId: 'nested',
                listeners: {
                    initialize: function() {
                        this.load();
                    }
                }
            }
        ],
        showAnimation: {
            type: 'slide',
            duration: 1,
            direction: 'up'
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

