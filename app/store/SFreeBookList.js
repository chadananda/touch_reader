Ext.require(['book.model.MFreeBookList'], function() {
    Ext.define('book.store.SFreeBookList', {
    	extend: 'Ext.data.Store',
        config: {
            model: 'book.model.MFreeBookList',
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

