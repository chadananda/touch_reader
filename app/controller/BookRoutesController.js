
Ext.define('book.controller.BookRoutesController', {
    extend: 'Ext.app.Controller',
    requires: [],
    config: {
        
        history: null,
        
        refs: {
            'booktitlebar': 'booktitlebar',
            'mainnavigation': 'mainnavigation',
            'readingconfigpptionspopup': 'readingconfigpptionspopup',
            'bookinformationscreen': 'bookinformationscreen',
            'bookinfotab': 'bookinfotab',
            'bookmarktab': 'bookmarktab'    
        },
    
        control: {
            'bookinfotab': {
                'show': 'onBookinfotabshow'
            },
            'bookmarktab': {
                'show': 'onBookmarktabshow'
            }  
        },
        
        routes: {
            'reading_configuration_options/:2.2.1.2': 'showConfigOption',
            
            'book_information_screen/:2.2.7': 'showBookInforationScreen'
                      
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
       
    },
    
    showBookInforationScreen: function(){
         var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'bookinformationscreen'});
        
    },
    
    onBookinfotabshow: function(){
      var url = bookInfotabdata;
        var params = {};
            
        Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading Book Info...' });
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
                Ext.Viewport.setMasked(false);
               
                response = response.responseText;
                response = Ext.JSON.decode(response);               
                this.getBookinfotab().setData(response.items[0]);                 
            },
            
            failuer: function() {
              
                Ext.Viewport.setMasked(false);
            },
            scope: this
        })
   
    },
    onBookmarktabshow: function(){
      var url = bookmarktabdata;
        var params = {};
            
        Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading BookMark...' });
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
                Ext.Viewport.setMasked(false);
               
                response = response.responseText;
                response = Ext.JSON.decode(response);               
                this.getBookmarktab().setData(response.items[0]);                 
            },
            
            failuer: function() {
              
                Ext.Viewport.setMasked(false);
            },
            scope: this
        })
   
    }
    
    
       
})    
