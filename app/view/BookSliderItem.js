Ext.define('book.view.BookSliderItem', {
    extend: 'Ext.Panel',
    xtype: 'bookslideritem',
    requires: [],
    config: { 
       
        cls: 'slider',
        layout: 'hbox',
        scrollable: {
            direction: 'horizontal',
            directionLock: true
       },
       
       tpl: new Ext.XTemplate(
            '<div class="slider_image" id="image_tap_{img_id}"><a href="javascript:void(0)"><img src="{url}" height="140px"></a></div>'
        )
    }
});
