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
                xtype: 'bookstorelist',
                badgeText: '256'
            },
            {
                title: 'Free',
                iconCls: 'free',
                iconMask: true,
                xtype: 'freebooklist',
                badgeText: '64'
            }
        ]
    }
});
