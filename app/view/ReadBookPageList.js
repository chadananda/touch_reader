
//Ext.require(['book.store.SReadBookPageList'], function() {
    Ext.define('book.view.ReadBookPageList', {
        extend: 'Ext.Panel',
        xtype: 'readbookpagelist',
       
        requires: [
            'Ext.TitleBar'
        ],     
      
        config: { 
        flex:1,
        cls: 'ownedbooklist',
       
        items: [
            {
             
                    
                    xtype   : 'iframe',
                    url: 'https://dl.dropboxusercontent.com/u/382588/JS/Projects/ilm_library_ocean/Library/Shoghi%20Effendi%2C%20The%20Promised%20Day%20is%20Come%2C%20en.html',
             
            },
           /* {
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
            */
        ],
        
    }
         
        
    })
//})// JavaScript Document
