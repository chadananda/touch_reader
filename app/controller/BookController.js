
Ext.define('book.controller.BookController', {
extend: 'Ext.app.Controller',
requires: [],
config: {
   // items1: '',
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
        'mainbookcontainer': 'mainbookcontainer'
        
    },

    control: {
        'library_button': {
            'tap': 'onLibraryButtonTap'
        },
        'button#current_book': {
            'tap': 'onCurrentBookButtonTap'
        },
        'readbookpagelist_slider': {
            'change': 'onSliderChange'
        }
       
    }    
},

  launch : function(app) {
  
    this.loadSliderImages()
   this.onPageAjaxData() 
  
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
                            items.push( {html: '<div class="slider_image" id="image_tap"><a href="javascript:void(0)"><img src="' + rec.url + '" height="140px"></a></div>'} )
                        })
                   
                bookslider.setItems(items); 
                
                var domEl = Ext.get('image_tap');
                if (domEl) {
                    domEl.un('tap', this.onClickOpenReaderScreen) 
                    domEl.on('tap', this.onClickOpenReaderScreen, this, [])
                } else {      
                }
                
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
        
        /*****  Trace Code FOr Reader Screen *****/
          
        /*****  End Reader Screen *****/
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
    onClickOpenReaderScreen: function(){        
        var mainnavigation = this.getMainnavigation();
        mainnavigation.push({xtype: 'mainbookcontainer'});
    },
    
    onLibraryButtonTap: function(button ,event){
         var mainnavigation = this.getMainnavigation();
       //  var main = this.getMain();
       
         mainnavigation.push({xtype: 'main'});
         this.loadSliderImages() 
         mainnavigation.reset();
    },
    onCurrentBookButtonTap: function(button, e, options) {
 
        var me = this;
        var popup = me.getPopupView();
        popup.showBy(button);
 
    },
    onSliderChange: function(slider, thumb, newVal, oldVal){
   
    },
    onPageAjaxData: function(){
   
        var readbookpagelist = this.getReadbookpagelist(); 
        
        var url = lodreadpagedata;
        var params = {};
            
        Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading Book...' });
        //Ext.data.JsonP.request({
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
                Ext.Viewport.setMasked(false);
                
                
                response = response.responseText;
                response = Ext.JSON.decode(response);
                
                var items = [];                        
                        Ext.each(response, function(rec, index) {
                            items.push( {html: '<div style="height: 100%;"><iframe style="width:100%;height:550px;" src="'+rec.description+'">Your device does not support iframes.</iframe></div>'});
                            
                        })
                      
                   // this.setItems1(items)
                  // readbookpagelist.setUrl(items);
                  // readbookpagelist.getAt(0).setItems(items);                     
                
            },
            
            failuer: function() {
              
                Ext.Viewport.setMasked(false);
            },
            scope: this
        })
        
      //   var book_items = this.getApplication().getController('BookController');
        //        var book_items = book_items.getItems1();
       //         
      //   readbookpagelist.setHtml(book_items);   
        
    },
    
    
       
});
