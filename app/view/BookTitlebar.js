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
                xtype: 'image',
                src: 'resources/images/full-logo-med.png',
                width:40,
                height:40,
                align: 'left',
                style:'margin-right:10px;'
            },
               
            {
                xtype: 'button',
                html: 'Library',
                align: 'left',
                itemId: 'lib_button',
                style:'margin:2px 5px 0px 5px;color:#fff;font-weight:bold;',
                hidden:false
            },
            {
                xtype: 'button',
                html: 'Resume',
                style:'margin:2px 5px 0px 5px;color:#fff;font-weight:bold;',
                //iconCls: 'settings',
                itemId: 'resume',
                align: 'left',
                hidden:false
            },
               
            {
                xtype: 'button',
                iconCls: 'list',
                align: 'left',
                itemId: 'list_nav',               
                hidden:false
            },
            {
                xtype: 'button',
                iconCls: 'settings',
                itemId: 'top_setting_field',
                align: 'left',
                hidden:false
            },
            
            {                                
                cls: 'dropdown_menu',
                xtype: 'button',
                text: '',
                itemId: 'current_book',
                align: 'left',
                hidden:false
            },
              
            {
                xtype: 'button',
                html: '',
                itemId: 'message_icon',
                align: 'right',
                style:'margin:10px 10px 0px 0px;',
                badgeText: '7',
                hidden:false
            },
             
            {
                xtype: 'button',
                html: '',
                itemId: 'chat_icon',                
                align: 'right',
                style:'margin:10px 10px 0px 0px;',
                hidden:false,
                badgeText: '5',
            },
            
            {
             
                xtype: 'button',
                itemId: 'top_search_field',
                iconCls: 'search',
                align: 'right',
                hidden:false,
                style:'margin-right:10px;',
            }
        ]
    }
});
