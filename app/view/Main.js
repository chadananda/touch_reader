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
                //cls: 'book_main',
                height:232,
                xtype: 'bookslidercontainer'
            },
            {
                flex: 3,
                xtype: 'ownedbooklist'
            }
        ]
    }
});
