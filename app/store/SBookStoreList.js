Ext.require(['book.model.MBookStoreList'], function() {
    Ext.define('book.store.SBookStoreList', {
    	extend: 'Ext.data.Store',
        config: {
            model: 'book.model.MBookStoreList',
            proxy: {
                type: 'ajax',
                url : 'data/owned_book.json',
                reader: {
                    type: 'json'
                }
            },
            autoLoad: true
        }
    });

})

