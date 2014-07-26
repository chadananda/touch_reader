Ext.define('book.store.SCategoryAccordionList', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'book.model.MCategoryAccordionList'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'book.model.MCategoryAccordionList',

        proxy: {
            type: 'ajax',
            url: 'data/testData.json'
        }
    }

});
