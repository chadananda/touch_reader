Ext.require(['book.store.SCategoryAccordionList'], function() {
Ext.define('book.view.CategoryAccordionList', {
    extend: 'Ext.Panel',
    xtype: 'categoryaccordionlist',
  
    requires: [
        
    ],     
    config: {
        flex: 1,
        layout: 'vbox',
        //cls: 'book_list_result',
           
        items: [{
                style:'background-color:#fff;padding:10px;',
                html: '12 Result Found'
            },
            {                
                flex: 1,               
                xtype:'list',  
                itemTpl:['<div class="search_list_container"><div class="search_list_id">{result_id}</div>','<div class="search_list_text">{text}</div></div>'],
                store: Ext.create('book.store.SCategoryAccordionList')
            }
        ]
    }
        
})
})

