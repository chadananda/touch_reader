Ext.require(['book.model.MReadBookPageList'], function() {
    Ext.define('book.store.SReadBookPageList', {
    	extend: 'Ext.data.Store',
        config: {
            model: 'book.model.MReadBookPageList',
            proxy: {
                type: 'ajax',
                url : lodreadpagedata,
                reader: {
                    type: 'json'
                }
            },
            autoLoad: true
        }
    });

})

