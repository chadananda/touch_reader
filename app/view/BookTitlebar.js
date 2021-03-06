Ext.define('book.view.BookTitlebar', {
    extend: 'Ext.TitleBar',
    xtype: 'booktitlebar',
    requires: ['Ext.Img'],
    config: { 
        layout:'hbox',
        cls:'my-titlebar',
        docked: 'top',
        title: '',
        ui: 'bluenav',
        items: [
            {
                xtype: 'button',
                html: '<img src="resources/images/logo.png" width="18" height="30">',               
                align: 'left',
                itemId: 'branding_logo',
                style:'border: none;padding:0px 10px;'
            },
            {
                cls:'resume',
                xtype: 'button',
                html: 'Library',
                align: 'left',
                itemId: 'lib_button',
                ui: 'bluenav',
                hidden:false
            },
            {
                cls:'resume',
                xtype: 'button',
                html: 'Resume',
                itemId: 'resume',
                align: 'left',
                hidden:false,
                ui: 'bluenav'
            }, 
            {
                cls: 'list_nav',
                xtype: 'button',
                iconCls: 'list',
                align: 'left',
                itemId: 'list_nav',               
                hidden:false,
                style:'border: none;'
            },
            /*
            {                                
                cls:'resume',
                xtype: 'button',
                text: '',
                itemId: 'current_book',
                align: 'left',
                hidden: false,
                ui: 'bluenav',
                flex: 1,
                style:'border-left: none;'
            },
            */
            {
                xtype: 'panel',
                id: 'container_book_title',
                layout: 'hbox',
                items:[
                {
                    flex:1,
                    xtype:"spacer"
                },
                {
                    cls:'resume',
                    xtype: 'button',
                    text: '',
                    itemId: 'current_book',
                    align: 'left',
                    hidden: false,
                    ui: 'bluenav',
                    style:'border-left: none;'
                },
                {
                    flex:1,
                    xtype:"spacer"
                }
                ]
            },
            {
                cls:'message_icon',
                xtype: 'button',
                html: '',
                itemId: 'message_icon',
                align: 'right',
                badgeText: '7',
                hidden:false
            },
            {
                xtype: 'button',
                text: '',
                itemId: 'chat_icon',                
                align: 'right',
                hidden:false,
                badgeText: '5'
            },
            {
                cls:'top_setting_field',
                xtype: 'button',
                iconCls: 'settings',
                itemId: 'top_setting_field',
                align: 'right',
                hidden:false
            },
            {
                cls:'top_search_field',
                xtype: 'button',
                itemId: 'top_search_field',
                iconCls: 'search',                
                align: 'right',
                hidden:false
            } 
        ]
    }
});
