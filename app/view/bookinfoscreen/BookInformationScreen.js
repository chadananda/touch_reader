Ext.define('book.view.bookinfoscreen.BookInformationScreen', {
    extend: 'Ext.tab.Panel',
    xtype: 'bookinformationscreen',
    requires: [],
    config: { 
        tabBarPosition: 'top',
        cls: 'book_info',
        items: [
            {
                iconCls: 'bookinfo',
                iconMask: true,
                xtype: 'bookinfotab'
            },
            {
                iconCls: 'bookmark',
                iconMask: true,
                xtype: 'bookmarktab'
            },
            {
                iconCls: 'namedtags',
                iconMask: true,
                xtype: 'namedtagstab'
            },
            {
                iconCls: 'notes',
                iconMask: true,
                xtype: 'notestab'
            },
            {
                iconCls: 'highlights',
                iconMask: true,
                xtype: 'paragraphsummariestab'
            }
        ]
    }
});
