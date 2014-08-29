Ext.define('book.store.SCategoryAccordionList', {
    extend: 'Ext.data.Store',
    requires: [
        'book.model.MCategoryAccordionList'
    ],

    config: {
        //defaultRootProperty: 'items',
        model: 'book.model.MCategoryAccordionList',
        
        proxy: {
            type: 'ajax',
            url: 'data/searchResultListData.json',
            reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
        },
        autoLoad: true,
        
    }

});
