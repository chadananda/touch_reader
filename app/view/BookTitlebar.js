Ext.define('book.view.BookTitlebar', {
    extend: 'Ext.Toolbar',
    xtype: 'booktitlebar',
    requires: [],
    config: { 
        layout:'hbox',
        xtype: 'toolbar',
        cls:'my-titlebar',
        docked: 'top',
        title: 'The Great Deformation, Robert Stockman',
        ui: 'bluenav',
       
        items: [
            {
                iconCls: 'add',
                align: 'left'
            },
            {
                //xtype: 'button',
                text: 'Library',
                align: 'left',
                //ui: 'round'
            },
            
            {
                iconCls: 'list',
                align: 'left'
            },
           /* {                
                
                xtype: 'button',
                text: 'Current Book Title, Authour Name',
                itemId: 'current_book',
                align: 'center',
                iconCls: 'arrow_down',
                iconAlign: 'right',
                ui: 'round'
            }
            */
            {
                cls: 'icon-setting',
                iconCls: 'settings',
                align: 'left'
            },
            
        ]
    }
});
