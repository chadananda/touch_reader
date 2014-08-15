Ext.define('book.view.book.ListItem', {
    extend: 'Ext.ux.AccordionListItem',
    xtype : 'examplelistitem',

    requires: [
        'Ext.field.DatePicker',
        'Ext.field.TextArea'
    ],

    config: {
        layout: {
            type: 'vbox'
        },

        tpl:['{text}']
    }

});
