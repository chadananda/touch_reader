
Ext.define('book.controller.BookController', {
extend: 'Ext.app.Controller',
requires: [],
config: {
   // items1: '',
   img_id: '',
   book_title: '',
   slider_images:[],
    refs: {
        'mainnavigation': 'mainnavigation',
        'maintitlebar_showhide': 'main',
        'main': 'main',
        'bookslider': 'bookslider dataview',
        'booktitlebar': 'booktitlebar',
        'library_button': 'booktitlebar #lib_button',
        'titlebar_dropdown': 'booktitlebar #current_book',
        'list_button': 'booktitlebar #list_nav',
        'searchfield_button': 'booktitlebar #top_search_field',
        'selectfield_button': 'booktitlebar #top_select_field',
        'settingfield_button': 'booktitlebar #top_setting_field',
        'resume_button': 'booktitlebar #resume',
        //'bor_btn': 'booktitlebar #bor_btn',
        //'bor_btn2': 'booktitlebar #bor_btn2',
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
        'topsearchfield': 'topsearchfield list',
        'searchresult': 'topsearchfield #right_search_panel',
        'topsearchfieldpopup': 'topsearchfield',
        
        'mainbookcontainer': 'mainbookcontainer',
        'readbookpagelistiframe': 'readbookpagelist #iframe',
        'readbookpagelisttoggle': 'readbookpagelist #toggle',
        
        'selectionmenu': 'selectionmenu',
        'extractmenu': 'extractmenu',
        'bookinformationscreen': 'bookinformationscreen',
        'mainnavigationpop': 'mainnavigation',
        'listselecrsearchresult': 'listselecrsearchresult',
        'compilesubmenulist': 'compilesubmenu list',
        'tagsubmenu': 'tagsubmenu #tag_color',
        'colorpicker': 'colorpicker dataview',
        'ownedbookhistorylist': 'ownedbookhistorylist dataview',
        'ownedbookeconomicslist': 'ownedbookeconomicslist dataview'         
        
    },

    control: {
        'library_button': {
            'tap': 'onLibraryButtonTap'
        },
        'button#current_book': {
            'tap': 'onCurrentBookButtonTap'
        },
        'maintitlebar_showhide': {
            'show': 'onShowMainHideShowIcon'
        },
        'readbookpagelist': {
            'show': 'onShowIframe'
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
        'topsearchfield': {
            'itemtap': 'onSearchResultListItemtap'    
        },
        'list_button': {
            'tap': 'toggleNav'
        },
        'resume_button': {
            'tap': 'onTapRsumebtn'
        },
        'mainnavigation': {
            'push': 'mainnavigationPush',
            'pop': 'mainnavigationPop'
        },
        'bookslider': {
            'itemtap': 'onBooksliderItemtap'
        },
        'listselecrsearchresult': {
         //   'show': 'onShowListSelecrSearchResult'
        },
        'compilesubmenulist': {
            'itemtap': 'onCompilesubmenuItemtap'
        },
        'tagsubmenu': {
            'tap': 'onTapTagtextColorchange'
        },
        'colorpicker': {
            'itemtap': 'onColorpickerItemtap'
        }
       
    }    
},

    launch : function(app) {
        //this.setHistory(this.getApplication().getHistory());      
        
        if (Ext.isDefined(this.selectionmenu) == false) {
            this.selectionmenu = Ext.create('book.view.book.SelectionMenu');
        }         
        var selectionmenu = this.selectionmenu;

        var panel = Ext.Viewport.add(selectionmenu);
        panel.hide();
        
        if (Ext.isDefined(this.colorpicker) == false) {
            this.colorpicker = Ext.create('book.view.ColorPicker');
        }         
        var colorpicker = this.colorpicker;

        var color_picker = Ext.Viewport.add(colorpicker);
        color_picker.hide();    
        
        var viewport = Ext.Viewport;
        viewport.resize = function() {
            alert('viewport is resized');
        }                              
        
    },
    
  
    onBookTitlebarShow: function(view, eOpts){
         var message_icon = this.getMessage_icon();         
            console.log(message_icon.getBadgeText());
            if(message_icon.getBadgeText() != ''){
                message_icon.setHtml('<img src="resources/images/message_icon.png">');
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
        this.getTitlebar_dropdown().setUi('');
        this.getTitlebar_dropdown().setCls('');        
        //this.getStudyprojectnavbar().setHidden(true);
        //this.getBor_btn().setHidden(true);
        //this.getBor_btn2().setHidden(true);
        
        this.getResume_button().setHidden(true);
        /*var list = this.getOwnedbookhistorylist();
        this.getOwnedbookhistorylist().setHeight('300px');
        this.getOwnedbookeconomicslist().setHeight('300px');
        var store = list.getStore();
        
        store.load({
            callback: function(records, operation, success) {
                console.log(records);
                var height = list.getItemHeight(); 
                console.log(height)
                 list.setHeight(height * records.length);
                   console.log(list.getVariableHeights());
                  
            },
            scope: this
        });
        */
        
  },
  
 
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
    
    onLibraryButtonTap: function(button, event) {
        this.redirectTo(''); 
        this.getResume_button().setHidden(false);
        this.getTitlebar_dropdown().setUi('bluenav');
        this.getTitlebar_dropdown().setCls('resume');
        //this.getBor_btn().setHidden(false);
        //this.getBor_btn2().setHidden(false);
       
    },
    
    onCurrentBookButtonTap: function(button, e, options) {
        
        var me = this;
        var popup = me.getPopupView();
        popup.showBy(button);
 
    },
   
    onLoadBookData: function(img_id, book_url) {
        var readbookpagelist = this.getReadbookpagelist();         
      
        var mainnavigation = this.getMainnavigation();
        var iframe = readbookpagelist.down('iframe')
        
        iframe.setUrl(book_url);
        mainnavigation.push(readbookpagelist);
        var book_iframe = document.getElementById('book_iframe');
            book_iframe.src = book_url; 
        
        var width = this.getReadbookpagelistiframe().element.getWidth(); 
        book_iframe.width = width;
      
    },
    onShowIframe: function(view, eOpts){
        
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
        
        
        var panel = selectionmenu;
        //panel.hide();             
        
        
        //var interval = setTimeout(function() {
            console.log('it is in setTimeout function');
            var myiframe = document.getElementById("book_iframe");
            
            
            myiframe.onload = function() {
                
                var doc = myiframe.contentDocument || myiframe.contentWindow.document;                

                doc.addEventListener('click', function(event) {
                    
                    console.log('it is addEventListener click function ');
                    selText = me.getIframeSelectionText(iframe);
                    
                    me.getApplication().getController('BookTimer').showToolbar();
                    
                    if (selText != '') {
                        console.log('selText = ' + selText);
                        //var panel = Ext.Viewport.add(selectionmenu); 
                        panel.show();
                        selectionmenu.on({
                		    toggle: function(segBtn, btn, isPressed) { 
                              var txt = btn.getText();
                              if(txt == 'EXTRACT'){
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
                                                sharesubmenu.hide();
                                            }
                                    }
                                })
                                
                              }else if(txt == 'NOTE'){
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
                                                marksubmenu.hide();
                                                notesubmenu.hide();
                                            }else if(txt == 'Note'){
                                                notesubmenu.showBy(btn);
                                                marksubmenu.hide();
                                                tagsubmenu.hide();
                                            }
                                    }
                                })
                              }else if(txt == 'LOOKUP'){
                                lookupmenu.showBy(btn);  
                                extractmenu.hide();
                                annotationmenu.hide();
                                discussmenu.hide();
                              }else if(txt == 'DISCUSS'){
                                discussmenu.showBy(btn);
                                
                                extractmenu.hide();
                                annotationmenu.hide();
                                lookupmenu.hide();
                              }    
                            }
                         
                        });
                    } // end of selText                                
                    
                    //console.log('clearInterval should call');
                    //clearInterval(interval);
                                                            
                }, false);   


            }  //end of iframe load event
            
            /*                            
            */                 
        
        //}, 1500);        
    },
    
    onCompilesubmenuItemtap: function(list, index, item, e){
      
       var store = list.getStore();                                                   
       var records = ({title: '<img src="resources/images/book_icon.png"> Compilation #'+[index+1]+' Name' });
       store.insert( index, records )
       list.element.setHeight(list.element.getHeight()*2.1 -230)
            
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
            seach_field.setHeight('70%');
        this.getTopsearchfield().setHeight('96%');        
        var store = this.getTopsearchfield().getStore();      
        store.removeAll();
        this.getSearchresult().setHidden(false);
        store.load({
            callback: function(records, operation, success) {
                console.log(records);
                 this.getTopsearchfield().select(2);
                 this.onShowListSelecrSearchResult(); 
                
            },
            scope: this
        });
    },
    
    onClearSearch: function() {    
        var store = this.getTopsearchfield().getStore();
            store.removeAll();
        this.getSearchresult().setHidden(true);
        this.getTopsearchfield().setHeight('');
        var seach_field = this.getSearchPopView();    
        seach_field.setHeight('');
    },
    
    toggleNav: function(btn) {
        var me = this;
        var list = me.getListPopUpView();
        list.showBy(btn);
    },
    
    onTapRsumebtn:function(btn, event){
       
       var img_id = this.getImg_id(); 
       this.redirectTo('book_detail/' + img_id);
    },
    
    startStopTimer: function(cmp, view, eOpts) {
        var view1 = cmp.getActiveItem();
        
        if(view1.xtype == 'main') {
            this.getApplication().getController('BookTimer').stopTimer();
            this.getStudyprojectnavbar().setHidden(true);
        } else if (view1.xtype == 'mainbookcontainer') {
            //this.getApplication().getController('BookTimer').startTimer();
        } else if (view1.xtype == 'readbookpagelist') {
            this.getApplication().getController('BookTimer').startTimer();
        }    
    },
        
    mainnavigationPush: function(cmp, view, eOpts) {
        this.startStopTimer(cmp, view, eOpts);
    },
    
    mainnavigationPop: function(cmp, view, eOpts) {
        this.startStopTimer(cmp, view, eOpts);
    },
    
    onBooksliderItemtap: function(dataview, index, target, record, e, eOpts){
        var img_id = record.data.img_id;
        this.redirectTo('book_detail/' + img_id);
        return; 
    },
    
    loadBook: function(record) {
        
        var mainnavigation = this.getMainnavigation();        
            mainnavigation.push({xtype: 'readbookpagelist'}); 
       
        var booktitlebar = this.getBooktitlebar();
       
        var dropdown_title = this.getTitlebar_dropdown(); 
            dropdown_title.setText('');
        
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
        this.getTitlebar_dropdown().setUi('bluenav');
        this.getTitlebar_dropdown().setCls('resume');
        //this.getStudyprojectnavbar().setHidden(false);
        //this.getBor_btn().setHidden(false);
        //this.getBor_btn2().setHidden(false);
        this.getResume_button().setHidden(true);

        var img_id = record.img_id;
        var book_url = record.book_url;
        var book_title = record.book_title;
        var author_name = record.author_name; 

        this.setBook_title(book_title);
        
        var dropdown_title = this.getTitlebar_dropdown(); 
            dropdown_title.setText(book_title, author_name);
        var booktitlebar = this.getBooktitlebar();
            booktitlebar.setTitle('') 
            
        this.setImg_id(img_id);    
        this.onLoadBookData(img_id, book_url);
        
    },
    onSearchResultListItemtap: function(list, index, target, record, e, eOpts){
      
       this.getSearchresult().setHidden(false);
      // this.onShowListSelecrSearchResult(); 
    },
    onShowListSelecrSearchResult:function(){
      
        var url = searchbookresult;
        var params = {};
            
        Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading Book Info...' });
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
                Ext.Viewport.setMasked(false);
               
                response = response.responseText;
                response = Ext.JSON.decode(response);               
                this.getListselecrsearchresult().setData(response.items[0]);                 
            },
            
            failuer: function() {
              
                Ext.Viewport.setMasked(false);
            },
            scope: this
        })
    },
    onTapTagtextColorchange: function(button, e, options){
      
      if (Ext.isDefined(this.colorpicker) == false) {
            this.colorpicker = Ext.create('book.view.ColorPicker');
        }         
        var colorpicker = this.colorpicker;

        var color_picker = colorpicker
        if(color_picker.isHidden()){
            color_picker.showBy(button);
            
        }else {
            color_picker.hide();
        }
    },
    
    onColorpickerItemtap: function(list, index, item, e){
        //var store = list.getStore();                                                   
        //console.log(list.getItems())
    } 
    
});
