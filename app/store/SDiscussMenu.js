
Ext.define('book.store.SDiscussMenu', {
    extend : 'Ext.data.TreeStore',

    requires : [
        'book.model.MDiscussMenu'
    ],

    config : {
        model : 'book.model.MDiscussMenu',
        defaultRootProperty: 'items',
        proxy: {
            type: 'ajax',
            url: 'data/componentsData.json'
        }
    }
});