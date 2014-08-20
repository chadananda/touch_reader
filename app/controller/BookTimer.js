Ext.define('book.controller.BookTimer', {
    extend: 'Ext.app.Controller',
    requires: [],
    config: {
        book_title: '',
        defaultTimeout: 10,
        timer: '',
        counter: 0,
        refs: {
            'booktitlebar': 'booktitlebar',
            'studyprojectnavbar': 'studyprojectnavbar'        
        },
        control: {
        
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
            if (counter > defaultTimeout) {
                me.hideToolbar();
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
    },
    
    showToolbar: function() {
        var booktitlebar = this.getBooktitlebar();
        var studyprojectnavbar = this.getStudyprojectnavbar();
        booktitlebar.show();
        studyprojectnavbar.show();
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

})    
