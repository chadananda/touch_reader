
Ext.define('book.controller.BookRoutesController', {
    extend: 'Ext.app.Controller',
    requires: [],
    config: {
        
        history: null,
        
        refs: {
            'booktitlebar': 'booktitlebar',
            'mainnavigation': 'mainnavigation',
            'readingconfigpptionspopup': 'readingconfigpptionspopup'    
        },
    
        control: {
           
        },
        
        routes: {
            'reading_configuration_options/:2.2.1.2': 'showConfigOption',
                      
        }
        
    
    },
    
    
	launch : function(app) {
      
        this.setHistory(this.getApplication().getHistory());
               
	},
    
    showConfigOption: function(){
      // alert('Config Option');
       //var booktitlebar = this.getBooktitlebar();
       //booktitlebar.getTitle();
       //console.log(booktitlebar)
       
       var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'readingconfigpptionspopup'});
       
    }
       
})    
