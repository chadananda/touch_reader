Ext.define('book.view.BookSliderContainer', {
    extend: 'Ext.Container',
    xtype: 'bookslidercontainer',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: { 
        layout:'hbox',
        cls: 'slider_container',
        items: [
            {
                flex: 1,
                xtype: 'bookslider'
            }
        ]
    }
});
