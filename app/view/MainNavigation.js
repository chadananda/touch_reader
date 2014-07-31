Ext.define('book.view.MainNavigation', {
    extend: 'Ext.navigation.View',
    xtype: 'mainnavigation',
    requires: [],
    
    config: {
        navigationBar: false,
        type: 'card', 
        
        items:[
            {
                title: 'Owned',
                xtype: 'main'
            }
           // {
           //     title: 'Owned',
           //     xtype: 'mainbookcontainer'
           // }
        ]
    }
});
