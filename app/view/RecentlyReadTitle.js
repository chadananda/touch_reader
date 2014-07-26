Ext.define('book.view.RecentlyReadTitle', {
    extend: 'Ext.Panel',
    xtype: 'recentlyreadtitle',
    requires: [],
    config: { 
        layout:'vbox',
        cls: 'recently_read',
        items: [
            {
             
                html: 'Recently Read <span class="h-line"></span>',
            }
        ]
    }
});
