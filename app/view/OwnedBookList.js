

Ext.define('book.view.OwnedBookList', {
    extend: 'Ext.Container',
    xtype: 'ownedbooklist',
    requires: [],
    config: {
        cls: 'ownedbooklist',
        //scrollable: true,
        scrollable: {
            direction: 'vertical',
            indicators: {
                y: {
                    autoHide: false
                }
            }
        },
        
        layout: 'vbox',
        flex:1,
        items: [
            {
                xtype: 'ownedbookhistorylist',
            },
            {
                xtype: 'ownedbookeconomicslist',
            }  
        ]
    }
})