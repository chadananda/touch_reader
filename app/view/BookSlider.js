Ext.require(['book.store.SBookSlider'], function() {
    Ext.define('book.view.BookSlider', {
        extend: 'Ext.Container',
        xtype: 'bookslider',
        requires: [],
        config: {
            layout: 'fit',
            cls: 'slider',
            items: [
                {
                    xtype: 'dataview',
                    scrollable: 'horizontal',
                    inline: {
                        wrap: false
                    },
                    itemTpl: '<div class="slider_image" id="image_tap_{img_id}"><a href="javascript:void(0)"><img src="{url}" height="140px"></a></div>',
                    store: Ext.create('book.store.SBookSlider')
                }
            ]
        }
        
    })                                
});
