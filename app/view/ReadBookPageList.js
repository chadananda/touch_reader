
Ext.define('book.view.ReadBookPageList', {
    extend: 'Ext.Panel',
    xtype: 'readbookpagelist',
    
    requires: [
        'Ext.TitleBar'
    ],     
    
    config: { 
        flex:1,
        cls: 'ownedbooklist',
        layout: 'hbox',
        
        items: [
            {            
                xtype: 'bookinformationscreen',
                itemId: 'toggle',
                showAnimation: {
                    type: 'slide',
                    direction: 'right',
                    duration: 600
                },
                /*hideAnimation: {
                    type: 'slide',
                    direction: 'left',
                    duration: 400
                },
                */
            },
            {
                xtype   : 'iframe',
                flex:1,
                itemId: 'iframe'
            }
        ]
    }


})
