Ext.define('book.view.BookSlider', {
    extend: 'Ext.Panel',
    xtype: 'bookslider',
    requires: [],
    config: { 
       
        cls: 'slider',
        layout: 'hbox',
        scrollable: {
            direction: 'horizontal',
            directionLock: true
       },
       

    }
});
