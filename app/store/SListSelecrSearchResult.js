Ext.require(['book.model.MListSelecrSearchResult'], function() {
    Ext.define('book.store.SListSelecrSearchResult', {
    	extend: 'Ext.data.Store',
        config: {
            model: 'book.model.MListSelecrSearchResult',
            proxy: {
                type: 'ajax',
                url : 'data/search_book_result.json',
                reader: {
                    type: 'json'
                }
            },
            autoLoad: true
        }
    });

})

