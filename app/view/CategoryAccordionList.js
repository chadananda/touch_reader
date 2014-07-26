
Ext.define('book.view.CategoryAccordionList', {
    extend: 'Ext.Panel',
    xtype: 'categoryaccordionlist',
  
    requires: [
        'Ext.ux.AccordionList'
    ],     
    config: {
        flex: 1,
        layout: 'vbox',
        cls: 'category_accordion_list',
           
        items: [{
                xtype: 'rightcategorytitle'
            },
            {
                
                style:'margin-top:10px',
                xtype: 'accordionlist',
                store: Ext.create('book.store.SCategoryAccordionList'),
                 flex: 1,
                singleMode: true,
                animation: true,
                //disableSelection: true,
                animationDuration: 500,
                indent: true,
                itemId: 'decorate',
                listeners: {
                    initialize: function() {
                        this.load();
                    }
                }  
        }]
    }
        
})

