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
            /*
            {
                html: ['<div class="bx-controls-direction"><a id="bx-prev" class="bx-prev" href="javascript:void(0)">Prev</a><a id="bx-next" class="bx-next" href="javascript:void(0)">Next</a></div>'],
            },*/
            {
                flex: 1,
                xtype: 'bookslider'
            }
        ]
    }
});
