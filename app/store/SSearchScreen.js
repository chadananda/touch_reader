Ext.require(['book.model.MSearchScreen'], function() {
    Ext.define('book.store.SSearchScreen', {
    	extend: 'Ext.data.Store',
        config: {
           
            model: 'book.model.MSearchScreen',
            sorters: 'search_by',
            grouper: {
                    groupFn: function (record) {   
                        return '<img src="resources/images/search_book_icon.png">' + record.get('search_by');
                    } 
                }, 
            proxy: {
                type: 'ajax',
                url: 'data/searchData.json',
                reader: {
                    type: 'json',
                    rootProperty: 'items'
                }
            },
            autoLoad: false
        }
    });

})

