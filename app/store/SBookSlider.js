Ext.require(['book.model.MBookSlider'], function() {
    Ext.define('book.store.SBookSlider', {
    	extend: 'Ext.data.Store',
       /* config: {
            model: 'book.model.MBookSlider',
            proxy: {
                type: 'jsonp',
                url : lodsliderImages,
                reader: {
                    type: 'json'
                }
            },
            autoLoad: true
        }
        */
        config : {
            model : 'book.model.MBookSlider',
            defaultRootProperty: 'items',
            proxy: {
                type: 'ajax',
                url: 'data/book.json'
            },
            autoLoad: true
        }
        
        
    });

})

