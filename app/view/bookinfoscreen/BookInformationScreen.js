Ext.define('book.view.bookinfoscreen.BookInformationScreen', {
    extend: 'Ext.tab.Panel',
    xtype: 'bookinformationscreen',
    requires: [],
    config: { 
        tabBarPosition: 'top',
        cls: 'book_info',
        items: [
            {
                title: '<img src="resources/images/tab_info_icon.png">',
                xtype: 'bookinfotab'
            },
            {
                title: '<img src="resources/images/tab_bookmark_icon.png">',
                xtype: 'bookmarktab',
            },
            {
                title: '<img src="resources/images/tabs_tags_icon.png">',
                xtype: 'namedtagstab'
            },
            {
                title: '<img src="resources/images/tab_notes_icon.png">',
                xtype: 'notestab'
            },
            {
                title: '<img src="resources/images/tab_highlights_icon.png">',
                xtype: 'coloredhighlightstab'
            },
            {
                title: '<img src="resources/images/tab_paragraph_icon.png">',
                xtype: 'paragraphsummariestab'
            }
        ]
    }
});
