Ext.define('book.view.TabPanel', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabpanel',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: { 
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Owned',
                iconCls: 'home',
                xtype: 'mainnavigation'
            },
            {
                title: 'Bookstore',
                iconCls: 'list',
                html: 'Bookstore Tab'
            },
            {
                title: 'Free',
                iconCls: 'action',
                html: 'Free Tab'
            },
            {
                title: 'Courses',
                iconCls: 'info',
                html: 'Courses Tab'
            }
        ]
    }
});
