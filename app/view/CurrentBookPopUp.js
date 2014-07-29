Ext.define('book.view.CurrentBookPopUp', {
    extend: 'Ext.Panel',
    xtype: 'currentbookpopup',
    requires: [],
    config: {
       // height: '30%',
        itemId: 'popup',
        left: '5%',
        padding: 10,
        top: '0%',
        width: '40%',
        hideOnMaskTap: true,
        modal: true ,
        cls: 'popup_panel',
        items: [
            {
                xtype: 'button',
                text: 'Recently Opened Booke',
                ui: 'normal',
                iconCls: 'bookmarks',
                iconAlign: 'left'
            },
            {
                xtype: 'button',
                text: 'Twain, Huckleberry Finn',
                ui: 'normal',
                iconCls: 'bookmarks',
                iconAlign: 'left'
            },
            {
                xtype: 'button',
                text: 'Dickens, A Tale of Two Cities',
                ui: 'normal',
                iconCls: 'bookmarks',
                iconAlign: 'left'
            },
            {
                xtype: 'button',
                text: 'Fitzgerald, The Great Gatsby',
                ui: 'normal',
                iconCls: 'bookmarks',
                iconAlign: 'left'
            },
            {
                xtype: 'button',
                text: 'Lee, To Kill a Mockingbird',
                ui: 'normal',
                iconCls: 'bookmarks',
                iconAlign: 'left'
            },
            {
                xtype: 'button',
                text: 'Austin, Pride and Prejudice',
                ui: 'normal',
                iconCls: 'bookmarks',
                iconAlign: 'left'
            },
            {
                xtype: 'button',
                text: 'Salinger, Catcher in the Rye',
                ui: 'normal',
                iconCls: 'bookmarks',
                iconAlign: 'left'
            }
        ]
    }
});
