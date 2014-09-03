

Ext.define('book.view.bookinfoscreen.BookmarkTab', {
    extend: 'Ext.Container',
    xtype: 'bookmarktab',
    requires: [],
    config: { 
        cls: 'bookmark_tab',
        scrollable: true,
        tpl: [
              
            '<div class="bookmark_wrapper">',
                '<div class="bookmark_img">',
                    '<img src="{book_img}" width="40" height="48">',
                '</div>',
                '<div class="bookmark_info">',
                    '<p class="author_name">Bookmarks:</p>',
                    '<p class="book_title">{title}</p>',
                    '<p class="author_name">{author_name}</p>',                    
                '</div>',
            '<tpl for="book_chapter" >',
                '<div class="book_chapter">',
                    '{chapter_title}',
                '</div>',
                '<tpl for="paragraph" >',
                    '<div class="paragraph_no">',
                    '<span class="paragraph_image"><img src="resources/images/tab_bookmark_icon.png" width="15" height="18"></span><span class="paragraph_contnt">{paragraph_no}</span>',
                '</div>',
                '</tpl>',
            '</tpl>', 
            '</div>',
            
        ],
         
    }
})

