Ext.define('book.controller.BookTimer', {
    extend: 'Ext.app.Controller',
    requires: [],
    config: {
        popup_counter: 0,
        book_title: '',
        defaultTimeout: 20,
        timer: '',
        counter: 0,
        refs: {
            'booktitlebar': 'booktitlebar',
            'studyprojectnavbar': 'studyprojectnavbar',
            'mainnavigation': 'mainnavigation',
            'listpopup': 'listpopup',
            'currentbookpopup': 'currentbookpopup',
            'settingaccordionlist': 'settingaccordionlist',
            'topsearchfield': 'topsearchfield',
            'currentstudyprojectpopup': 'currentstudyprojectpopup',
            'readingconfigpptionspopup': 'readingconfigpptionspopup'        
        
        },
        control: {
            'listpopup': {
                'show': 'onListPopupShow',
                'hide': 'onListPopupHide'
            },
            'currentbookpopup': {
                'show': 'onCurrentBookPopupShow',
                'hide': 'onCurrentBookPopupHide'
            },
            'settingaccordionlist': {
                'show': 'onSettingBookPopupShow',
                'hide': 'onSettingBookPopupHide'
            },
            'topsearchfield': {
                'show': 'onSearchBookPopupShow',
                'hide': 'onSearchBookPopupHide'
            },
            'currentstudyprojectpopup': {
                'show': 'onCurrentStudyBookPopupShow',
                'hide': 'onCurrentStudyBookPopupHide'
            },
            'readingconfigpptionspopup': {
                'show': 'onReadingConfigBookPopupShow',
                'hide': 'onReadingConfigBookPopupHide'
            }
        
        }
    },
    
    launch : function(app) {
        var booktitlebar = this.getBooktitlebar();
        document.addEventListener('click',this.documentClickHandler.bind(this), false);
        //this.startTimer();
        //console.log('counter=');
    },
    
    startTimer: function() {
        var me = this;
        var intervalID = window.setInterval(function() {
            
            console.log(me.getCounter());
            
            var defaultTimeout = me.getDefaultTimeout();
            var counter = me.getCounter();
            
            if(me.getPopup_counter() == 0){
                if (counter > defaultTimeout) { 
                    me.hideToolbar();
                }
            } else if(me.getPopup_counter()==1){
            
            }
            
            me.incrementCounter();
                
        }, 1000);           
    
        this.setTimer(intervalID);
    
    },
    
    stopTimer: function() {
        //var intervalID = this.getTimer();    
        clearInterval(this.getTimer());
    },

    incrementCounter: function() {
        this.setCounter( this.getCounter() + 1)    
    },
  
    resetTimeoutCounter: function() {
        this.setCounter(0);
        this.setPopup_counter(0);
    },
    
    incrementPopupCounter: function() {
        this.setPopup_counter(this.getPopup_counter() + 1);
    },
    
    decrementPopupCounter: function() {
        this.setPopup_counter(this.getPopup_counter() - 1);
    },
    
    showToolbar: function() {
        var booktitlebar = this.getBooktitlebar();
        var studyprojectnavbar = this.getStudyprojectnavbar();
        booktitlebar.show();
        
        var mainnavigation = this.getMainnavigation();
        var view = mainnavigation.getActiveItem();
        if (view.xtype == 'readbookpagelist') {
            studyprojectnavbar.show();
        }
        
        
        this.resetTimeoutCounter();
    },
    
    hideToolbar: function() {
        var booktitlebar = this.getBooktitlebar();
        var studyprojectnavbar = this.getStudyprojectnavbar();
        booktitlebar.hide();
        studyprojectnavbar.hide();
    },
    
    documentClickHandler: function() {
        this.resetTimeoutCounter();
        this.showToolbar();
    },
    
    onListPopupShow: function() {
       // alert('it is in ListBook');
        this.incrementPopupCounter();
    },
    
    onListPopupHide: function() {
       // alert('it is in hide ListBook');
        this.decrementPopupCounter();
    },
    onCurrentBookPopupShow: function() {
        //alert('it is in show currentBook');
        this.incrementPopupCounter();
    },
    
    onCurrentBookPopupHide: function() {
       // alert('it is in hide currentBook');
        this.decrementPopupCounter();
    },
    onSettingBookPopupShow: function() {
        //alert('it is in show SettingBook');
        this.incrementPopupCounter();
    },
    
    onSettingBookPopupHide: function() {
       // alert('it is in hide SettingBook');
        this.decrementPopupCounter();
    },
    onSearchBookPopupShow: function() {
        //alert('it is in show SearchBook');
        this.incrementPopupCounter();
    },
    
    onSearchBookPopupHide: function() {
        //alert('it is in hide SearchBook');
        this.decrementPopupCounter();
    },
    
    onCurrentStudyBookPopupShow: function() {
        //alert('it is in show CurrentStudyBook');
        this.incrementPopupCounter();
    },
    
    onCurrentStudyBookPopupHide: function() {
       // alert('it is in hide CurrentStudyBook');
        this.decrementPopupCounter();
    },
    
    onReadingConfigBookPopupShow: function() {
        //alert('it is in show ReadingConfigBook');
        this.incrementPopupCounter();
    },
    
    onReadingConfigBookPopupHide: function() {
        //alert('it is in hide ReadingConfigBook');
        this.decrementPopupCounter();
    }

})    
