Ext.define('book.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabpanel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: { 
        tabBarPosition: 'top',
        style: 'margin-top:10px',
        items: [
            {
                title: 'Owned',
                iconCls: 'home',
                xtype: 'ownedbooklist',
                badgeText: '580'
            },
            {
                title: 'Bookstore',
                iconCls: 'list',
                html: 'Bookstore Tab',
                badgeText: '256'
            },
            {
                title: 'Library',
                iconCls: 'action',
                html: 'Library Tab',
                badgeText: '64'
            },
            {
                title: 'Courses',
                iconCls: 'info',
                html: 'Courses Tab',
                badgeText: '64'
            }
        ]
    }
});
