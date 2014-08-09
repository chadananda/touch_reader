Ext.define('book.view.bookinfoscreen.BookInformationScreen', {
    extend: 'Ext.tab.Panel',
    xtype: 'bookinformationscreen',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
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
                //iconCls: 'action',
                html: 'Library Tab'
            },
            {
                title: '<img src="resources/images/tab_notes_icon.png">',
                //iconCls: 'info',
                html: 'Courses Tab'
            },
            {
                title: '<img src="resources/images/tab_highlights_icon.png">',
                //iconCls: 'info',
                html: 'Courses Tab'
            },
            {
                title: '<img src="resources/images/tab_paragraph_icon.png">',
                //iconCls: 'info',
                html: 'Courses Tab'
            }
        ]
    }
});
