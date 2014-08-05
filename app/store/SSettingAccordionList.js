Ext.define('book.store.SSettingAccordionList', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'book.model.MSettingAccordionList'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'book.model.MSettingAccordionList',

        proxy: {
            type: 'ajax',
            url: 'data/testData.json'
        }
    }

});
