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
                iconCls: 'owned',
                iconMask: true,
                xtype: 'ownedbooklist',
                badgeText: '580'
            },
            {
                title: 'Bookstore',
                iconCls: 'bookstore',
                iconMask: true,
                html: 'Bookstore Tab',
                badgeText: '256'
            },
            {
                title: 'Free',
                iconCls: 'free',
                iconMask: true,
                html: 'Free Book',
                badgeText: '64'
            }
        ]
    }
});
