Ext.require(['book.model.MBookInfoTab'], function() {
    Ext.define('book.store.SBookInfoTab', {
    	extend: 'Ext.data.Store',
        config: {
            model: 'book.model.MBookInfoTab',
            proxy: {
                type: 'ajax',
                url : 'data/bookInfotab.json',
                reader: {
                    type: 'json'
                }
            },
            autoLoad: true
        }
    });

})

