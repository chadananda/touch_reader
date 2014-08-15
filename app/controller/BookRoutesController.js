
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
            'bookmarktab': 'bookmarktab',
            'namedtagstab' : 'namedtagstab',
            'notestab' : 'notestab',
            'coloredhighlightstab': 'coloredhighlightstab',
            'paragraphsummariestab': 'paragraphsummariestab'    
        },
    
        control: {
            'bookinfotab': {
                'show': 'onBookinfotabshow'
            },
            'bookmarktab': {
                'show': 'onBookmarktabshow'
            },
            'namedtagstab': {
                'show': 'onNamedtagstabshow'
            },
            'notestab': {
                'show': 'onNotestabshow'
            },
            'coloredhighlightstab': {
                'show': 'onColoredhighlightstabhow'
            }, 
            'paragraphsummariestab': {
                'show': 'onParagraphsummariestabshow'
            }    
        },
        
        routes: {
            'reading_configuration_options/:2.2.1.2': 'showConfigOption',
            
            'book_information_screen/:2.2.7': 'showBookInforationScreen',
            
            'memorization_deck_clearing_drill/:2.3.2.1': 'showMemorizationDeckClearingDrill',
            
            'vocabulary_assessment/:2.3.2.3': 'showVocabularyAssessment',
            
            'assessment_quiz_screen/:2.3.1.4.1': 'showAssessmentQuizScreen',
            
            'writing_journaling_assignment/:2.3.2.2': 'showWritingJournalingAssignment'
                      
        }
        
    
    },
    
    
	launch : function(app) {
      
        this.setHistory(this.getApplication().getHistory());
               
	},
    
    showConfigOption: function(){
     
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
            
        //Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading Book Info...' });
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
                //Ext.Viewport.setMasked(false);
               
                response = response.responseText;
                response = Ext.JSON.decode(response);               
                this.getBookinfotab().setData(response.items[0]);                 
            },
            
            failuer: function() {
              
                //Ext.Viewport.setMasked(false);
            },
            scope: this
        })
   
    },
    onBookmarktabshow: function(){
      var url = bookmarktabdata;
        var params = {};
            
        //Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading BookMark...' });
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
                //Ext.Viewport.setMasked(false);
               
                response = response.responseText;
                response = Ext.JSON.decode(response);               
                this.getBookmarktab().setData(response.items[0]);                 
            },
            
            failuer: function() {
              
                //Ext.Viewport.setMasked(false);
            },
            scope: this
        })
   
    },
    
    onNamedtagstabshow: function(){
      var url = namedtagstabdata;
        var params = {};
            
        //Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading NamedTags...' });
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
               // Ext.Viewport.setMasked(false);
               
                response = response.responseText;
                response = Ext.JSON.decode(response);  
                console.log(response)             
                this.getNamedtagstab().setData(response.items[0]);                 
            },
            
            failuer: function() {
              
               // Ext.Viewport.setMasked(false);
            },
            scope: this
        })
   
    },
    onNotestabshow: function(){
      var url = notestabdata;
        var params = {};
            
        //Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading Notes...' });
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
                //Ext.Viewport.setMasked(false);
               
                response = response.responseText;
                response = Ext.JSON.decode(response);  
                console.log(response)             
                this.getNotestab().setData(response.items[0]);                 
            },
            
            failuer: function() {
              
                //Ext.Viewport.setMasked(false);
            },
            scope: this
        })
   
    },
    
    onColoredhighlightstabhow: function(){
      var url = coloredhighlightstab;
        var params = {};
            
        //Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading Paragraph Colored Highlights...' });
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
               // Ext.Viewport.setMasked(false);
               
                response = response.responseText;
                response = Ext.JSON.decode(response);  
                console.log(response)             
                this.getColoredhighlightstab().setData(response.items[0]);                 
            },
            
            failuer: function() {
              
                //Ext.Viewport.setMasked(false);
            },
            scope: this
        })
   
    },
    
    onParagraphsummariestabshow: function(){
      var url = paragraphsummariestabdata;
        var params = {};
            
        //Ext.Viewport.setMasked({ xtype: 'loadmask', 'message': 'Loading Paragraph Summaries...' });
        Ext.Ajax.request({
			url : url,
            params: params,
			success : function(response, options) {
               // Ext.Viewport.setMasked(false);
               
                response = response.responseText;
                response = Ext.JSON.decode(response);  
                console.log(response)             
                this.getParagraphsummariestab().setData(response.items[0]);                 
            },
            
            failuer: function() {
              
               // Ext.Viewport.setMasked(false);
            },
            scope: this
        })
   
    },
    showMemorizationDeckClearingDrill: function(){
        //alert('memorization_deck_clearing_drill/:2.3.2.1')
        this.getBooktitlebar().setHidden(true);
        var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'memorizationdeckcontainer'});
    
    },
    showVocabularyAssessment: function(){
            this.getBooktitlebar().setHidden(true);
            var mainnavigation = this.getMainnavigation(); 
            mainnavigation.push({xtype: 'vocabularyassessmentContainer'});
    },
    
    showAssessmentQuizScreen: function(){
        this.getBooktitlebar().setHidden(true);
        var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'assessmentquizcontainer'});
    
    },
    
    showWritingJournalingAssignment: function(){
    
        this.getBooktitlebar().setHidden(true);
        var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'jaournalingassignmentcontainer'});
    }
    
    
       
})    
