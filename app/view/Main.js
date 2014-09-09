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
                height:165,
                xtype: 'bookslider'
            },
            {
                xtype: 'maincontainer'
            }
        ]
    }
});
