
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
        
        //style: 'border: 1px solid red;',
      items: [
            {
             
                   //flex:1,
                   xtype   : 'iframe',
                   //style: 'height:100%;border: 1px solid green;',
                   //url: 'https://dl.dropboxusercontent.com/u/382588/JS/Projects/ilm_library_ocean/Library/Abdu%27l-Baha%2C%20Tablets%20of%20the%20Divine%20Plan%2C%20en.html' 
             
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
