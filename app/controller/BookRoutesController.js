
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
            
            'writing_journaling_assignment/:2.3.2.2': 'showWritingJournalingAssignment',
            
            'audio_video_inline_mini_lecture/:2.3.1.2': 'showAudioVideoInlineMiniLecture',            
            
            'discussion_questions_inline_exercise_indicator/:2.3.1.3': 'showDiscussionQuestionsInlineExerciseIndicator',
            
            'assessment_inline_exercise_indicator/:2.3.1.4': 'showAssessmenInlineExerciseIndicator',
            
            'inline_memorization_assignment/:2.3.1.5': 'showInlineMemorizationAssignment',
            
            'memorization_engine_popup_drilling_screen/:2.3.1.5.1': 'showMemorizationEnginePopupDrillingScreen',
            
            'micro_journaling/:2.3.1.7': 'showMicroJournaling',
            'book_detail/:id': 'bookDetail'
                        
                      
        }
        
    
    },
    
    
	launch : function(app) {
        this.setHistory(this.getApplication().getHistory());
	},
    
    bookDetail: function(book_id) {
        
        var BookController = this.getApplication().getController('BookController');
         
        var slider_images = BookController.getSlider_images();
        console.log(book_id);
        console.log(slider_images)
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
    },
    
    showAudioVideoInlineMiniLecture: function(){
    
        this.getBooktitlebar().setHidden(true);
        var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'audiovideolecturecontainer'});
    },
    
    showDiscussionQuestionsInlineExerciseIndicator: function(){
        this.getBooktitlebar().setHidden(true);
        var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'discussionqueexercisecontainer'});
    
    },
    
    showAssessmenInlineExerciseIndicator: function(){
    
        this.getBooktitlebar().setHidden(true);
        var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'assessmentquizexercisecontainer'});
    },
    
    showInlineMemorizationAssignment: function(){
    
        this.getBooktitlebar().setHidden(true);
        var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'memorizationassignmentcontainer'});
    
    },
    
    showMemorizationEnginePopupDrillingScreen: function(){
        this.getBooktitlebar().setHidden(true);
        var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'memorizationpopupdrillingscreencontainer'});
    
    },
    
    showMicroJournaling: function(){
        this.getBooktitlebar().setHidden(true);
        var mainnavigation = this.getMainnavigation(); 
        mainnavigation.push({xtype: 'microjournalingcontainer'});
    
    }
    
    
       
})    
