/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/


 
Ext.application({
    name: 'book',

    requires: [
        'Ext.MessageBox', 'Ext.data.proxy.JsonP', 'Ext.Img', 'Ext.ux.AccordionList', 'Ext.ux.AccordionListItem', 'Ext.field.Search', 'Ext.field.Select', 'book.store.SCategoryAccordionList',
        'Ext.field.Slider', 'Ext.ux.Iframe', 'book.store.SSettingAccordionList', 'book.store.SSearchScreen', 'book.store.SDiscussMenu'
        
    ],
    
    controllers: [
        'BookController', 'BookRoutesController'
    ],
    
    models: [
        'MOwnedBookList', 'MBookSlider', 'MCategoryAccordionList', 'MReadBookPageList', 'MSettingAccordionList', 'MSearchScreen', 'MBookInfoTab'
    ],
    
    stores: [
        'SOwnedBookList', 'SBookSlider', 'SCategoryAccordionList', 'SReadBookPageList', 'SSettingAccordionList', 'SSearchScreen', 'SBookInfoTab'
    ],

    views: [
        'TabPanel', 'MainNavigation', 'Main', 'BookSlider', 'OwnedBookList', 'BookSliderContainer', 'LibrarybyLanguage', 'RecentlyReadTitle', 'SearchBooksView',
        'CategoryMainContainer', 'RightSidebarContainer', 'AddBookView', 'MainContainer', 'RightSidebarContainer', 'CategoryAccordionList', 'RightCategoryTitle',
        'MainBookContainer', 'BookTitlebar', 'CurrentBookPopUp', 'ReadBookPageList', 'TopSearchField', 'TopSettingPopUp' , 'SettingAccordionList', 'book.view.studybar.ReadingConfigOptionsPopUp',
        'book.view.studybar.StudyProjectNavBar', 'book.view.studybar.CurrentStudyProjectPopUp', 'book.view.studybar.CurrentOpenStudeyProjectList', 'book.view.studybar.CompletedStudeyProjectList',
        'book.view.studybar.StudyProjectInfoScreen', 'book.view.studybar.MembersLinkList', 'book.view.bookinfoscreen.BookInformationScreen', 'book.view.bookinfoscreen.BookInfoTab',
        'book.view.bookinfoscreen.BookmarkTab', 'book.view.bookinfoscreen.NamedTagsTab', 'book.view.bookinfoscreen.NotesTab', 'book.view.bookinfoscreen.ParagraphSummariesTab',
        'book.view.bookinfoscreen.ColoredHighlightsTab', 'book.view.book.SelectionMenu', 'book.view.book.ExtractMenu', 'book.view.book.ShareSubMenu', 'book.view.book.CompileSubMenu',
        'book.view.book.AnnotationMenu', 'book.view.book.MarkSubMenu', 'book.view.book.TagSubMenu', 'book.view.book.NoteSubMenu', 'book.view.book.LookupMenu', 'book.view.book.DiscussMenu',
        'book.view.book.ListItem', 'book.view.memorization.MemorizationDeck', 'book.view.memorization.MemorizationDeckContainer', 'book.view.vocabularyassessment.VocabularyAssessmentContainer',
        'book.view.vocabularyassessment.VocabularyAssessment', 'book.view.quizscreen.AssessmentQuizContainer', 'book.view.quizscreen.AssessmentQuiz', 'book.view.journal.JournalingAssignmentContainer',
        'book.view.journal.JournalingAssignment'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('book.view.MainNavigation'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
