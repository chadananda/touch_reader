
Ext.require(['book.store.SReadBookPageList'], function() {
    Ext.define('book.view.ReadBookPageList', {
        extend: 'Ext.Container',
        xtype: 'readbookpagelist',
       
        requires: [
            'Ext.TitleBar'
        ],     
       
        config: {
        //flex:1,
        cls: 'ownedbooklist',
        items: [
            {
                xtype: 'dataview', 
                height: '90%',
               // styleHtmlContent: true,
                width: '100%',
                
                inline: {
                    wrap: true
                },
                //scrollable: {
                //    direction: 'vertical',
                //    directionLock: true
               // },
               scrollable:false,
                itemCls: 'dataview-item-read',
                itemTpl: [
            
                '<div class="read_container">',
                    '<div class="page_no">{page_id}</div>',
                    '<div class="page_description">{description}</div>',
                '</div>'
            
            ],
            store: Ext.create('book.store.SReadBookPageList'),
            },
            {
                xtype: 'titlebar',
                docked: 'bottom',
                ui: 'normal',
                layout:'vbox',
                items: [{
                    flex:1,
                    xtype: 'sliderfield',
                    value: 1,
                    minValue: 0,
                    maxValue: 100,
                    increment: 2,
                }]
            }
        ],
        
    }
         
        
    })
})// JavaScript Document
