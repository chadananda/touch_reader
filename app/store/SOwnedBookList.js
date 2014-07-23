Ext.require(['book.model.MOwnedBookList'], function() {
    Ext.define('book.store.SOwnedBookList', {
    	extend: 'Ext.data.Store',
        config: {
            model: 'book.model.MOwnedBookList',
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

