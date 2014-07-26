Ext.define('book.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: { 
        layout:'vbox',
        cls: 'main_container',
        items: [
            {
            
                xtype: 'librarybylanguage'
            },
            {
             
                xtype: 'recentlyreadtitle'
            },            
            {
                height:191,
                xtype: 'bookslidercontainer'
            },
            {
             
                xtype: 'maincontainer'
            }
        ]
    }
});
