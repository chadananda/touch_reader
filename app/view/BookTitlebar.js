Ext.define('book.view.BookTitlebar', {
    extend: 'Ext.TitleBar',
    xtype: 'booktitlebar',
    requires: [],
    config: { 
        layout:'hbox',
        xtype: 'titlebar',
        docked: 'top',
        //title: 'Navigation',
        ui: 'normal',
        items: [
            {
                iconCls: 'add',
                align: 'left'
            },
            {
                xtype: 'button',
                text: 'Library',
                align: 'left',
                ui: 'round'
            },
            
            {
                iconCls: 'list',
                align: 'left'
            },
            {                
                
                xtype: 'button',
                text: 'Current Book Title, Authour Name',
                itemId: 'current_book',
                align: 'center',
                iconCls: 'arrow_down',
                iconAlign: 'right',
                ui: 'round'
            }
        ]
    }
});
