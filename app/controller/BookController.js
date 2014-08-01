
Ext.define('book.controller.BookController', {
extend: 'Ext.app.Controller',
requires: [],
config: {
   // items1: '',
    refs: {
        'mainnavigation': 'mainnavigation',
        'maintitlebar_showhide': 'main',
        'main': 'main',
        'bookslider': 'bookslider',
        'booktitlebar': 'booktitlebar',
        'library_button': 'booktitlebar #lib_button',
        'titlebar_dropdown': 'booktitlebar #current_book',
        'list_button': 'booktitlebar #list_button',
        'searchfield_button': 'booktitlebar #top_search_field',
        'selectfield_button': 'booktitlebar #top_select_field',
        'currentbookpopup': 'currentbookpopup',
        popupView: {
            autoCreate: true,
            selector: '#popup',
            xtype: 'currentbookpopup'
        },
        'readbookpagelist_slider': 'readbookpagelist sliderfield',
        'readbookpagelist': 'readbookpagelist',
        'mainbookcontainer': 'mainbookcontainer',
        'booktitlebar': 'booktitlebar',
        'iframe': 'iframe',
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
        },
        'maintitlebar_showhide': {
            'show': 'onShowMainHideShowIcon'
        }
       
    }    
},

  launch : function(app) {
  
    this.loadSliderImages()
   // this.onLoadBookData() 
  
  },
  
  onShowMainHideShowIcon: function( view, eOpts){
   // alert(view.xtype)
    console.log(view.xtype);
        var booktitlebar = this.getBooktitlebar();
        booktitlebar.setTitle('');
        /*** Nav TitleBar Library button Hidden ***/
        this.getLibrary_button().setHidden(true);
        /*** Nav TitleBar List button Hidden ***/
        this.getList_button().setHidden(true);
        /*** Nav TitleBar Search Field Hidden ***/
        this.getSearchfield_button().setHidden(true);        
        /*** Nav TitleBar Select Field Hidden ***/
        this.getSelectfield_button().setHidden(false);
        /*** Nav TitleBar Dropdown Field Hidden ***/
        //this.getTitlebar_dropdown().setHidden(true);
    
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
                            items.push( {html: '<div class="slider_image" id="image_tap_' + rec.img_id + '"><a href="javascript:void(0)"><img src="' + rec.url + '" height="140px"></a></div>'} )
                        })
                   
                bookslider.setItems(items); 
                
                
                for(var i=0; i<response.length; i++){
                    var img_id = response[i].img_id;
                    var domEl = Ext.get('image_tap_' + response[i].img_id);
                    if (domEl) {
                        domEl.un('tap', this.onClickOpenReaderScreen) 
                        domEl.on('tap', this.onClickOpenReaderScreen, this, [response[i].img_id, response[i].book_url])
                    } else {      
                    }
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
    
    onClickOpenReaderScreen: function(event, obj, eOpts){        
        var mainnavigation = this.getMainnavigation();
        mainnavigation.push({xtype: 'mainbookcontainer'});
        
        var booktitlebar = this.getBooktitlebar();
        booktitlebar.setTitle('The Great Deformation, Robert Stockman');
        
        /*** Nav TitleBar Library button Show ***/
        this.getLibrary_button().setHidden(false);
        /*** Nav TitleBar List button Show ***/
        this.getList_button().setHidden(false);
        /*** Nav TitleBar Search Field Show ***/
        this.getSearchfield_button().setHidden(false);
        /*** Nav TitleBar Select Field Hidden ***/
        this.getSelectfield_button().setHidden(true);
        
        /*** Nav TitleBar Dropdown Field Show ***/
        //this.getTitlebar_dropdown().setHidden(false);
        
        var img_id = eOpts[0];
        var book_url = eOpts[1];
       // alert(img_id) 
        this.onLoadBookData(img_id, book_url);
        
    },
    
    onLibraryButtonTap: function(button ,event){
         var mainnavigation = this.getMainnavigation();
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
    
    onLoadBookData: function(img_id, book_url) {
       // alert(book_url)   
        var readbookpagelist = this.getReadbookpagelist();         
        var url = lodreadpagedata;
        var params = {};
            
        var mainnavigation = this.getMainnavigation();
        var iframe = readbookpagelist.down('iframe')
        
        iframe.setUrl(book_url);
        mainnavigation.push(readbookpagelist);
        
        //var book_iframe = Ext.ComponentQuery.query('#book_iframe');
        var book_iframe = document.getElementById('book_iframe');
        console.log('book_iframe')
        console.log(book_iframe)
        book_iframe.src = book_url;
        
    },
    
    
       
});
