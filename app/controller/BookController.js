
Ext.define('book.controller.BookController', {
extend: 'Ext.app.Controller',
requires: [],
config: {
   // items1: '',
   book_title: '',
   slider_images:[],
    refs: {
        'mainnavigation': 'mainnavigation',
        'maintitlebar_showhide': 'main',
        'main': 'main',
        'bookslider': 'bookslider',
        'booktitlebar': 'booktitlebar',
        'library_button': 'booktitlebar #lib_button',
        'titlebar_dropdown': 'booktitlebar #current_book',
        'list_button': 'booktitlebar #list_nav',
        'searchfield_button': 'booktitlebar #top_search_field',
        'selectfield_button': 'booktitlebar #top_select_field',
        'settingfield_button': 'booktitlebar #top_setting_field',
        'resume_button': 'booktitlebar #resume',
        listPopUpView: {
            autoCreate: true,
            selector: '#list_popup',
            xtype: 'listpopup'
        },
        
                        
        'message_icon': 'booktitlebar #message_icon',
        'chat_icon': 'booktitlebar #chat_icon',
        
        'currentbookpopup': 'currentbookpopup',
        popupView: {
            autoCreate: true,
            selector: '#popup',
            xtype: 'currentbookpopup'
        },
        SearchPopView: {
            autoCreate: true,
            selector: '#top_search',
            xtype: 'topsearchfield'
        },
        settingPopView: {
            autoCreate: true,
            selector: '#top_setting',
            xtype: 'settingaccordionlist'
        },
        //'readbookpagelist_slider': 'readbookpagelist sliderfield',
        'readbookpagelist': 'readbookpagelist',
        'mainbookcontainer': 'mainbookcontainer',
        'booktitlebar': 'booktitlebar',
        'iframe': 'iframe',
        
        'studyprojectnavbar': 'studyprojectnavbar',
        'studyproject_dropdown': 'studyprojectnavbar #study_project_book',
        currentProjectPopView: {
            autoCreate: true,
            selector: '#current_std_projct',
            xtype: 'currentstudyprojectpopup'
        },
        'studyinfobutton': 'studyprojectnavbar #info_screen_btn',
        infoScreenPopView: {
            autoCreate: true,
            selector: '#info_screen',
            xtype: 'studyprojectinfoscreen'
        },
        'topsearchfield': 'topsearchfield accordionlist',
        'searchresult': 'topsearchfield #search_result',
        'topsearchfieldpopup': 'topsearchfield',
        
        'mainbookcontainer': 'mainbookcontainer',
        'readbookpagelistiframe': 'readbookpagelist #iframe',
        'readbookpagelisttoggle': 'readbookpagelist #toggle',
        
        'selectionmenu': 'selectionmenu',
        'extractmenu': 'extractmenu',
        'bookinformationscreen': 'bookinformationscreen'
        
    },

    control: {
        'library_button': {
            'tap': 'onLibraryButtonTap'
        },
        'button#current_book': {
            'tap': 'onCurrentBookButtonTap'
        },               
        'readbookpagelist_slider': {
          //  'change': 'onSliderChange'
        },
        'maintitlebar_showhide': {
            'show': 'onShowMainHideShowIcon'
        },
        'readbookpagelist': {
            'show': 'ontapIframe'
        },
        'searchfield_button': {
            'tap': 'onTapTopSearchIcon'
        },
        'settingfield_button': {
            'tap': 'onTapSettingButton'
        },
        
        // Current Study Project Nav Bar
        'studyproject_dropdown': {
            'tap': 'onCurrentStudyProjectTap' 
        },
        'booktitlebar': {
            'initialize': 'onBookTitlebarShow'        
        },
        'studyinfobutton': {
            'tap': 'onTapStudeyInfoButton'
        },
        'topsearchfield searchfield[itemId=searchBox]' : {
            clearicontap : 'onClearSearch',
            keyup: 'onSearchKeyUp'
        },
        'list_button': {
            'tap': 'toggleNav'
        },
        'resume_button': {
            'tap': 'onTapRsumebtn'
        },
        'mainnavigation': {
            'push': 'mainnavigationPush'
        }
       
    }    
},

    launch : function(app) {
        this.loadSliderImages(); 
    
    },
    
  
    onBookTitlebarShow: function(view, eOpts){
         var message_icon = this.getMessage_icon();         
            console.log(message_icon.getBadgeText());
            if(message_icon.getBadgeText() != ''){
                message_icon.setHtml('<img src="resources/images/message.png">');
            }else {
               message_icon.setHtml('<img src="resources/images/message_stamp_icon.png">');
            }
        
        var chat_icon = this.getChat_icon();
        if(chat_icon.getBadgeText() != ''){
                chat_icon.setHtml('<img src="resources/images/chat.png">');
            }else {
               chat_icon.setHtml('<img src="resources/images/chat_stamp_icon.png">');
            }
    },
  
  onShowMainHideShowIcon: function( view, eOpts){
   // alert(view.xtype)
    console.log(view.xtype);
        var booktitlebar = this.getBooktitlebar();
        booktitlebar.setTitle('');
        /*** Nav TitleBar Library button Hidden ***/
        this.getLibrary_button().setHidden(true);
        /*** Nav TitleBar List button Hidden ***/
        this.getList_button().setHidden(false);
        /*** Nav TitleBar Search Field Hidden ***/
        this.getSearchfield_button().setHidden(false);        
        /*** Nav TitleBar Select Field Hidden ***/
        //this.getSelectfield_button().setHidden(false);
        /*** Nav TitleBar Dropdown Field Hidden ***/
        this.getTitlebar_dropdown().setHidden(false);
        this.getStudyprojectnavbar().setHidden(true);
        this.getResume_button().setHidden(true);
  },
  
  
  loadSliderImages: function() {
  
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

                var slider_images = this.getSlider_images();

                Ext.each(response, function(rec, index) {
                    console.log(rec)
                    slider_images.push(rec);
                    items.push( {html: '<div class="slider_image" id="image_tap_' + rec.img_id + '"><a href="javascript:void(0)"><img src="' + rec.url + '" height="140px"></a></div>'} )
                })
                   
                bookslider.setItems(items); 
                
                
                for(var i=0; i<response.length; i++) {
                    var img_id = response[i].img_id;
                    var domEl = Ext.get('image_tap_' + response[i].img_id);
                    if (domEl) {
                        domEl.un('tap', this.onClickOpenReaderScreen) 
                        domEl.on('tap', this.onClickOpenReaderScreen, this, [response[i].img_id, response[i].book_url, response[i].book_title, response[i].author_name])
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
    
    onClickOpenReaderScreen: function(event, obj, eOpts) {
                
        var mainnavigation = this.getMainnavigation(); 
        
        mainnavigation.push({xtype: 'mainbookcontainer'}); 
       
        var booktitlebar = this.getBooktitlebar();
       
        var dropdown_title = this.getTitlebar_dropdown(); 
        dropdown_title.setText('');
        panel = this.getReadbookpagelisttoggle();
        panel.setHidden(true); 
       
        /*** Nav TitleBar Library button Show ***/
        this.getLibrary_button().setHidden(false);
        /*** Nav TitleBar List button Show ***/
        this.getList_button().setHidden(false);
        /*** Nav TitleBar Search Field Show ***/
        this.getSearchfield_button().setHidden(false);
        /*** Nav TitleBar Select Field Hidden ***/
        //this.getSelectfield_button().setHidden(true);
        
        /*** Nav TitleBar Dropdown Field Show ***/
        this.getTitlebar_dropdown().setHidden(false);
        this.getStudyprojectnavbar().setHidden(false);
        this.getResume_button().setHidden(true);
        
        var img_id = eOpts[0];
        var book_url = eOpts[1];
        var book_title = eOpts[2];
        var author_name = eOpts[3];
        
        this.setBook_title(book_title);
        
        var dropdown_title = this.getTitlebar_dropdown(); 
            dropdown_title.setText('<div class="dropdown_title"><img src="resources/images/down_arrow.png">'+book_title+', '+author_name+'<img src="resources/images/down_arrow.png"></div>');
       // alert(img_id)
        var booktitlebar = this.getBooktitlebar();
        booktitlebar.setTitle('') 
        this.onLoadBookData(img_id, book_url);
        
    },
    
    onLibraryButtonTap: function(button ,event) {
        
        var mainnavigation = this.getMainnavigation();
        
        mainnavigation.push({xtype: 'main'});
             
        this.loadSliderImages() 
        mainnavigation.reset(); 
         
        var booktitlebar = this.getBooktitlebar();
        var dropdown_title = this.getTitlebar_dropdown();
        var title = this.getBook_title();
        //booktitlebar.setTitle(title);
        this.getResume_button().setHidden(false);
    },
    
    onCurrentBookButtonTap: function(button, e, options) {
        
        var me = this;
        var popup = me.getPopupView();
        popup.showBy(button);
 
    },
    
    /*
    onSliderChange: function(slider, thumb, newVal, oldVal){
   
    },
    
    */
    
    onLoadBookData: function(img_id, book_url) {
       // alert(book_url)   
        var readbookpagelist = this.getReadbookpagelist();         
      
        var mainnavigation = this.getMainnavigation();
        var iframe = readbookpagelist.down('iframe')
        
        iframe.setUrl(book_url);
        mainnavigation.push(readbookpagelist);
        
        //var book_iframe = Ext.ComponentQuery.query('#book_iframe');
        var book_iframe = document.getElementById('book_iframe');
        console.log('book_iframe')
        console.log(book_iframe)
        book_iframe.src = book_url; 
        
        var width = this.getReadbookpagelistiframe().element.getWidth(); 
        book_iframe.width = width;
        //book_iframe.width = height   
      
    
        
        
    },
    ontapIframe: function(view, eOpts){
          
        var readbookpagelist = this.getReadbookpagelist();
        
         if (Ext.isDefined(this.selectionmenu) == false) {
            this.selectionmenu = Ext.create('book.view.book.SelectionMenu');
         }         
         var selectionmenu = this.selectionmenu;
         
         if (Ext.isDefined(this.extractmenu) == false) {
            this.extractmenu = Ext.create('book.view.book.ExtractMenu');
         }         
         var extractmenu = this.extractmenu;
         
         if (Ext.isDefined(this.sharesubmenu) == false) {
            this.sharesubmenu = Ext.create('book.view.book.ShareSubMenu');
         }         
         var sharesubmenu = this.sharesubmenu;
         
         if (Ext.isDefined(this.compilesubmenu) == false) {
            this.compilesubmenu = Ext.create('book.view.book.CompileSubMenu');
         }         
         var compilesubmenu = this.compilesubmenu; 
         
         if (Ext.isDefined(this.annotationmenu) == false) {
            this.annotationmenu = Ext.create('book.view.book.AnnotationMenu');
         }         
         var annotationmenu = this.annotationmenu;
         
         if (Ext.isDefined(this.marksubmenu) == false) {
            this.marksubmenu = Ext.create('book.view.book.MarkSubMenu');
         }         
         var marksubmenu = this.marksubmenu;
         
         if (Ext.isDefined(this.tagsubmenu) == false) {
            this.tagsubmenu = Ext.create('book.view.book.TagSubMenu');
         }         
         var tagsubmenu = this.tagsubmenu;
         
         if (Ext.isDefined(this.notesubmenu) == false) {
            this.notesubmenu = Ext.create('book.view.book.NoteSubMenu');
         }         
         var notesubmenu = this.notesubmenu;
         
         if (Ext.isDefined(this.lookupmenu) == false) {
            this.lookupmenu = Ext.create('book.view.book.LookupMenu');
         }         
         var lookupmenu = this.lookupmenu;
         
        if (Ext.isDefined(this.discussmenu) == false) {
            this.discussmenu = Ext.create('book.view.book.DiscussMenu');
        }         
        var discussmenu = this.discussmenu;      
         
        var me = this; 
       
        var iframe = document.getElementById("book_iframe");
        var selText = '';
                
                         
        setTimeout(function() {
    
            document.getElementById("book_iframe").contentDocument.addEventListener('click', function(event) {
                     
                selText = me.getIframeSelectionText(iframe);
                
                me.getApplication().getController('BookTimer').showToolbar();
                
                if (selText != '') {
                    selectionmenu.show();
                    //Ext.Viewport.add(selectionmenu);
                    
                    selectionmenu.on({
            		    toggle: function(segBtn, btn, isPressed) { 
                          var txt = btn.getText();
                          if(txt == 'Extract'){
                            extractmenu.showBy(btn);
                            annotationmenu.hide();
                            lookupmenu.hide();
                            discussmenu.hide();
                            extractmenu.on({
                                toggle: function(segBtn, btn, isPressed) { 
                                    var txt = btn.getText();
                                        if(txt == 'Share'){
                                            sharesubmenu.showBy(btn);
                                            compilesubmenu.hide();
                                            
                                        } else if(txt == 'Copy'){
                                            sharesubmenu.showBy(btn);
                                            compilesubmenu.hide();
                                             
                                        } else if(txt == 'Compile') {
                                            compilesubmenu.showBy(btn);
                                          
                                            compilesubmenu.on({
                                              itemtap: function(list, index, item, e) {
                                                   var store = compilesubmenu.getStore();                                                   
                                                   var records = ({title: '<img src="resources/images/compile_sub_icon.png"> Compilation #'+[index+1]+' Name' });
                                                   store.insert( index, records )
                                                   compilesubmenu.element.setHeight(compilesubmenu.element.getHeight()*2.1 -230)
                                                }
                                            });
                                            sharesubmenu.hide();
                                        }
                                }
                            })
                            
                          }else if(txt == 'Note'){
                            annotationmenu.showBy(btn);
                            extractmenu.hide();
                            lookupmenu.hide();
                            discussmenu.hide();
                            annotationmenu.on({
                                toggle: function(segBtn, btn, isPressed) { 
                                    var txt = btn.getText();
                                        if(txt == 'Mark'){
                                            marksubmenu.showBy(btn);
                                            extractmenu.hide();
                                            tagsubmenu.hide();
                                            notesubmenu.hide();
                                        }else if(txt == 'Tag') {
                                            tagsubmenu.showBy(btn);
                                           /* tagsubmenu.on({
                                              itemtap: function(list, index, item, e) {
                                                  
                                                }
                                            });
                                            */
                                            marksubmenu.hide();
                                            notesubmenu.hide();
                                        }else if(txt == 'Note'){
                                            notesubmenu.showBy(btn);
                                            marksubmenu.hide();
                                            tagsubmenu.hide();
                                        }
                                }
                            })
                          }else if(txt == 'Lookup'){
                            lookupmenu.showBy(btn);  
                            extractmenu.hide();
                            annotationmenu.hide();
                            discussmenu.hide();
                          }else if(txt == 'Discuss'){
                            discussmenu.showBy(btn);
                            
                            extractmenu.hide();
                            annotationmenu.hide();
                            lookupmenu.hide();
                          }    
                        }
                     
                    });
                }                                 
                                                        
            }, false);
        
            
        
        }, 1200)
      
        
    },
  
    getIframeSelectionText: function(iframe) {
        var win = iframe.contentWindow;
        var doc = win.document;
        
        if (win.getSelection) { 
           
            return win.getSelection().toString();
        } else if (doc.selection && doc.selection.createRange) {
            return doc.selection.createRange().text;
        }
    },
    
    onTapTopSearchIcon: function(button, e, options){
        var me = this;
        var seach_field = me.getSearchPopView();
        seach_field.showBy(button);
    },
    
    onTapSettingButton: function(button, e, options){
        var me = this;
        var setting_field = me.getSettingPopView();
        setting_field.showBy(button);
       
    },
    
    // Current Study Project Nav Bar
    
    onCurrentStudyProjectTap: function(button, e, options){
        var me = this;
        var curr_stdy_projct = me.getCurrentProjectPopView();
        curr_stdy_projct.showBy(button);
    
    },
    
    onTapStudeyInfoButton: function(button, e, options){
        var me = this;
        var info_screen = me.getInfoScreenPopView();
        info_screen.showBy(button);
    },
    
    onSearchKeyUp: function(searchField) {
      
        var seach_field = this.getSearchPopView();    
            seach_field.setHeight('60%');
        this.getTopsearchfield().setHeight('78%');        
        var store = this.getTopsearchfield().getStore();      
        store.removeAll();
        this.getSearchresult().setHtml('<div class="search_result"> 10 Matching Sentences from 3 Books</div>');
        store.load({
            callback: function(records, operation, success) {
                console.log(records);
            },
            scope: this
        });
    },
    
    onClearSearch: function() {
    
        var store = this.getTopsearchfield().getStore();
            store.removeAll();
        this.getSearchresult().setHtml('');
        this.getTopsearchfield().setHeight('');
        var seach_field = this.getSearchPopView();    
        seach_field.setHeight('');
    },
    
    toggleNav: function(btn) {

            var me = this;
            var list = me.getListPopUpView();
            list.showBy(btn);
    },
    onTapRsumebtn:function(){
       
    },
    
    mainnavigationPush: function(cmp, view, eOpts) {
                
        if(view.xtype == 'main') {
            this.getApplication().getController('BookTimer').stopTimer();
        } else if (view.xtype == 'mainbookcontainer') {
            //this.getApplication().getController('BookTimer').startTimer();
        } else if (view.xtype == 'readbookpagelist') {
            this.getApplication().getController('BookTimer').startTimer();
        }    
    }
});
