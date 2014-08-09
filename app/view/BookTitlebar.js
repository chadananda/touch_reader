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
                xtype: 'image',
                html: 'Library',
                align: 'left',
                itemId: 'lib_button',
                style:'margin-left:5px;margin-right:5px;color:#fff;font-weight:bold;',
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
                iconCls: 'settings',
                itemId: 'top_setting_field',
                align: 'right',
                hidden:false
            },
                /** item[6]**/
            {
             
                xtype: 'button',
                //src: 'resources/images/search_icon.png',
                itemId: 'top_search_field',
                iconCls: 'search',
                align: 'right',
                hidden:false,
                style:'margin-right:10px;',
            },
            {
                 width:200,
                align: 'right',                 
                hidden:false,
                itemId: 'top_select_field', 
                xtype: 'selectfield',
                //label: 'Select your Library by Language',
                //labelWidth: '50',
                options: [
                    {text: 'English',  value: 'english'},
                    {text: 'Franch', value: 'franch'},
                    {text: 'Spanish',  value: 'spanish'}
                ]
            }
            
        ]
    }
});
