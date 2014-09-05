Ext.define('book.view.MainBookContainer', {
    extend: 'Ext.Container',
    xtype: 'mainbookcontainer',
    requires: [],
    config: { 
        layout:'vbox',
        items: [
            {
                flex:1,
                xtype: 'readbookpagelist', 
            }
        ]
    }
});
