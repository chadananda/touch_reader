
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
            /*
            {
                xtype: 'sidebarmenu',
                //hidden: true
            },
            */
                        
          /*  {            
                xtype: 'bookinformationscreen',
                itemId: 'toggle',
                showAnimation: {
                    type: 'slide',
                    direction: 'right',
                    duration: 600
                }, 
            },
            */
            {
                xtype   : 'iframe',
                flex:1,
                itemId: 'iframe'
            }
        ]
    }


})
