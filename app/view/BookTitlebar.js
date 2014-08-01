Ext.define('book.view.BookTitlebar', {
    extend: 'Ext.TitleBar',
    xtype: 'booktitlebar',
    requires: ['Ext.Img'],
    config: { 
        layout:'hbox',
        xtype: 'titlebar',
        cls:'my-titlebar',
        docked: 'top',
        title: '',
        ui: 'bluenav',
       
        items: [
                /** item[0]**/
            {
                xtype: 'image',
                src: 'resources/images/full-logo-med.png',
                width:40,
                height:40,
                align: 'left',
                style:'margin-right:20px;'
            },
                /** item[1]**/
            {
                xtype: 'image',
                html: 'Library',
                align: 'left',
                itemId: 'lib_button',
                style:'margin-left:5px;color:#4298e1;font-weight:bold;',
                hidden:false
            },
                /** item[2]**/
            {
                xtype: 'image',
                src: 'resources/images/list_icon.png',
                width:29,
                height:18,
                align: 'left',
                itemId: 'list_button',
                style:'margin-left:10px;',
                hidden:false
            },
            
                /** item[3]**/
            {
                xtype: 'image',
                src: 'resources/images/setting_icon.png',
                width:23,
                height:23,
                align: 'left',
                style:'margin-left:20px;',
                hidden:false
            },
          /*  {                
                
                xtype: 'button',
                text: 'Current Book Title, Authour Name',
                itemId: 'current_book',
                align: 'center',
                iconCls: 'arrow_down',
                iconAlign: 'right',
                hidden:false
            },
            */
                /** item[4]**/
            {
                xtype: 'image',
                src: 'resources/images/message.png',
                width:30,
                height:20,
                align: 'right',
                style:'margin-right:10px;',
                hidden:false
            },
                /** item[5]**/
            {
                xtype: 'image',
                src: 'resources/images/chat.png',
                width:30,
                height:27,
                align: 'right',
                style:'margin-right:20px;',
                hidden:false
            },
                /** item[6]**/
            {
               
                xtype: 'searchfield',
                name: 'search',
                itemId: 'top_search_field',
                align: 'right',
                hidden:false
            },
            {
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
