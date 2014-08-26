Ext.define('book.view.BookTitlebar', {
    extend: 'Ext.TitleBar',
    xtype: 'booktitlebar',
    requires: ['Ext.Img'],
    config: { 
        layout:'hbox',
        //xtype: 'titlebar',
        cls:'my-titlebar',
        docked: 'top',
        title: '',
        ui: 'bluenav',
        items: [
               
            {
                xtype: 'button',
                html: '<img src="resources/images/logo.png">',               
                align: 'left',
                style:'border-left: none;padding:0px 10px;'
            },
            {
                xtype: 'button',
                text: '',               
                align: 'left',
                style:'padding:0px;'
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
               // style:'margin:2px 5px 0px 5px;color:#fff;font-weight:bold;',
                //style:'border:1px solid red;',
                //iconCls: 'settings',
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
                
            },
            
            {
                xtype: 'button',
                text: '',               
                align: 'left',
                style:'padding:0px;'
            },
            {                                
                cls:'resume',
                //cls: 'dropdown_menu',
                xtype: 'button',
                text: '',
                itemId: 'current_book',
                align: 'left',
                hidden:false,
                ui: 'bluenav',
            },
              
            {
                cls:'message_icon',
                xtype: 'button',
                html: '',
                itemId: 'message_icon',
                align: 'right',
                //style:'margin:10px 10px 0px 0px;',
                badgeText: '7',
                hidden:false
            },
             
            {
                xtype: 'button',
                html: '',
                itemId: 'chat_icon',                
                align: 'right',
                //style:'margin:10px 10px 0px 0px;',
                hidden:false,
                badgeText: '5',
            },
            {
                cls:'top_setting_field',
                xtype: 'button',
                html: '<img src="resources/images/setting_icon.png">',
                itemId: 'top_setting_field',
                align: 'right',
                hidden:false
            },
            
            {
             
                cls:'top_search_field',
                xtype: 'button',
                itemId: 'top_search_field',
                html: '<img src="resources/images/search_icon.png">',
                align: 'right',
                hidden:false,
                style:'margin-right:10px;',
            } 
        ]
    }
});
