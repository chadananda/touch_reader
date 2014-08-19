Ext.define('book.controller.BookTimer', {
    extend: 'Ext.app.Controller',
    requires: [],
    config: {
        book_title: '',
        defaultTimeout: 20,
        timer: '',
        counter: 0,
        refs: {
            'booktitlebar': 'booktitlebar'        
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
        booktitlebar.show();
        this.resetTimeoutCounter();
    },
    
    hideToolbar: function() {
        var booktitlebar = this.getBooktitlebar();
        booktitlebar.hide();
    },
    
    documentClickHandler: function() {
        this.resetTimeoutCounter();
        this.showToolbar();
    },

})    
