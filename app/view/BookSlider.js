Ext.require(['book.store.SBookSlider'], function() {

Ext.define('book.view.BookSlider', {
    extend: 'Ext.Container',
    xtype: 'bookslider',
    requires: [],
    /*config: { 
       
        cls: 'slider',
        layout: 'hbox',
        scrollable: {
            direction: 'horizontal',
            directionLock: true
       }
    }
    */
    
    
    config: {
        layout: 'fit',
        flex:1,
        cls: 'slider',
        items: [{
            xtype: 'dataview',
            scrollable: 'horizontal',
            //cls: 'dataview-horizontal',
            inline: {
                wrap: false
            },
            itemTpl: '<div class="slider_image" id="image_tap_{img_id}"><a href="javascript:void(0)"><img src="{url}" height="140px"></a></div>',
            store: Ext.create('book.store.SBookSlider'),
        }]
    }
    
})
                                
});
