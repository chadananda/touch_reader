

Ext.define('book.view.bookinfoscreen.BookInfoTab', {
    extend: 'Ext.Container',
    xtype: 'bookinfotab',
    requires: [],
    config: { 
        cls: 'bookinfo_tab',
        scrollable: true,
        tpl: [
        
            '<div class="bookinfo_wrapper">',
                '<div class="bookinfo_img">',
                    '<img src="{book_img}">',
                '</div>',
                '<div class="bookinfo_detail">',
                    '<p class="book_title">{title}</p>',
                    '<p class="author_name">{author_name}</p>',
                    '<p class="description">{description}</p>',
                '</div>',
            '</div>',
                        
            '<div class="bookinfo_wrapper">',                
                '<div class="bookinfo_detail">',
                    '<p class="book_title">Contents</p>',
                '<tpl for="contents" >',
                    '<p class="description">{table_of_contents}</p>',
                '</tpl>',
                '</div>',
            '</div>'
        ]
    }
})

