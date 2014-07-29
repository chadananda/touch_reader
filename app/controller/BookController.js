
Ext.define('book.controller.BookController', {
extend: 'Ext.app.Controller',
requires: [],
config: {
    
    refs: {
        'mainnavigation': 'mainnavigation',
        'main': 'main',
        'bookslider': 'bookslider',
        'booktitlebar': 'booktitlebar',
        'library_button': 'booktitlebar button[text=Library]',
        'currentbook_button': 'booktitlebar #current_book',
        'currentbookpopup': 'currentbookpopup',
        popupView: {
            autoCreate: true,
            selector: '#popup',
            xtype: 'currentbookpopup'
        },
        'readbookpagelist_slider': 'readbookpagelist sliderfield',
        'readbookpagelist': 'readbookpagelist',
        'readbookpagedataviewlist': 'readbookpagelist dataview'
    },

    control: {
        'library_button': {
            'tap': 'onLibraryButtonTap'
        },
        'button#current_book': {
            'tap': 'onCurrentBookButtonTap'
        },
        'readbookpagelist_slider': {
            //'change': 'onSliderChange'
        }
       
    }    
},

  launch : function(app) {
  
    this.loadSliderImages() 
  
  },
  
  
  loadSliderImages: function(){
  
    var url = lodsliderImages;
        var params = {};
            
        Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading gallery...' });
        //Ext.data.JsonP.request({
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
                Ext.Viewport.setMasked(false);
                
                var bookslider = this.getBookslider(); 
                response = response.responseText;
                response = Ext.JSON.decode(response);
                
                var items = [];                        
                        Ext.each(response, function(rec, index) {
                            items.push( {html: '<div class="slider_image"><a href="javascript:void(0)"><img  src="' + rec.url + '" height="140px"></a></div>'} )
                        })
                   
                bookslider.setItems(items);
            },
            
            failuer: function() {
              
                Ext.Viewport.setMasked(false);
            },
            scope: this
        })
        
        var domEl = Ext.get('bx-next');
        if (domEl) {
            //domEl.un('tap', this.Bxnext) 
            //domEl.on('tap', this.Bxnext, this, [])
        } else {      
        }
        var domEl = Ext.get('bx-prev'); 
        if (domEl) {
            //domEl.un('tap', this.Bxprev) 
            //domEl.on('tap', this.Bxprev, this, [])
        } else {      
        }
                
    
    } ,
    Bxnext: function(){
        var bookslider = this.getBookslider();
        var scollable = bookslider.getScrollable();
        var scroller = scollable.getScroller();
        var width = bookslider.element.getWidth();
        //console.log(bookslider.element.getWidth())
        
         scroller.scrollBy(width, 0, {
            duration : 1000
        });         
    },
    
    Bxprev: function(){
        var bookslider = this.getBookslider();
        var scollable = bookslider.getScrollable();
        var scroller = scollable.getScroller();
        var width = bookslider.element.getWidth(); 
        //console.log(scroller.position.x )
        
        if(scroller.position.x != '0') {
             scroller.scrollBy(-(width), 0, {
                duration : 1000 ,
                
            });
        }
    },
    
    onLibraryButtonTap: function(button ,event){
         var mainnavigation = this.getMainnavigation();
         var main = this.getMain();
         mainnavigation.push({xtype: 'main'});
        // this.loadSliderImages() 
    },
    onCurrentBookButtonTap: function(button, e, options) {
 
        var me = this;
        var popup = me.getPopupView();
        popup.showBy(button);
 
    },
    onSliderChange: function(slider, thumb, newVal, oldVal){
    
      // alert(11)
      var readbookpagelist = this.getReadbookpagedataviewlist(); 
      var store = Ext.getStore('SReadBookPageList');
      console.log(store.data.items)
      console.log(readbookpagelist)
      var data = store.data.items;
      //alert(data.length)
      var count =0;
     
      for(var i=0; i<data.length;i++){
        console.log(data[i].data)
       
        // if(count == data.length) {
        readbookpagelist.setData(data[i].data);
        
      //  }
      }  
     
    } 
       
});
