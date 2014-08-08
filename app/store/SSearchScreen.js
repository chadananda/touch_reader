Ext.require(['book.model.MSearchScreen'], function() {
    Ext.define('book.store.SSearchScreen', {
    	extend: 'Ext.data.TreeStore',
        config: {
            defaultRootProperty: 'items',
            model: 'book.model.MSearchScreen',
            proxy: {
                type: 'ajax',
                url: 'data/searchData.json'
            },
            autoLoad: false
        }
    });

})

