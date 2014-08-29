

Ext.define('book.view.OwnedBookList', {
        extend: 'Ext.Container',
        xtype: 'ownedbooklist',
       
        requires: [],     
       
        config: {
            cls: 'ownedbooklist',
            layout:'vbox',
            items: [
                {
                    height:'61.5%',
                    xtype: 'ownedbookhistorylist',
                    //style: 'border: 1px solid red',
                },
                {
                   height:'38.5%',
                    xtype: 'ownedbookeconomicslist',
                    //style: 'border: 1px solid red',
                }  
            ]
    }
 
})