
Ext.define('book.model.MDiscussMenu', {
    extend : 'Ext.data.Model',

    config : {
        fields: [
            {name: 'text', type: 'string'},
            {name: 'description', type: 'string'},
            {name: 'sales', type: 'number'},
            {name: 'expenses', type: 'number'},
            {name: 'profits', type: 'number'},
            {name: 'replies', type: 'boolean'}
        ]
    }
});