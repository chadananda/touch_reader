
Ext.define('book.view.SettingAccordionList', {
    extend: 'Ext.Panel',
    xtype: 'settingaccordionlist',
  
    requires: [
        'Ext.ux.AccordionList'
    ],     
    config: {
        height: '50%',
        flex:1,
        id: 'top_setting',
        left: '5%',
        padding: 10,
        top: '0%',
        width: '50%',
        hideOnMaskTap: true,
        modal: true ,
        //cls: 'popup_panel',
        layout: 'vbox',
        cls: 'category_accordion_list',
           
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
                               
                            '</div>',
                             
                            
                        ].join(''),
                        useSelectedHighlights: false,
                        //showCount: true,
                        animation: true,
                        indent: true,
                        animationDuration: 300,
                        flex: 1,
                        itemId: 'nested',
                        listeners: {
                            initialize: function() {
                                this.load();
                                //this.addCls('PL-view');
                            }
                        }
           
        }]
    }
        
})

