Ext.define('book.view.MainNavigation', {
    extend: 'Ext.navigation.View',
    xtype: 'mainnavigation',
    requires: [],
    
    config: {
        navigationBar: false,
        type: 'card', 
        items:[
            {
                xtype: 'booktitlebar' 
            },
            {
                xtype: 'studyprojectnavbar'
            },
            {
                title: 'Owned',
                xtype: 'main'
            }
        ]
    }
});
