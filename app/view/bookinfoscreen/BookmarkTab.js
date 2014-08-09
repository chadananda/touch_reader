

Ext.define('book.view.bookinfoscreen.BookmarkTab', {
    extend: 'Ext.Panel',
    xtype: 'bookmarktab',
    requires: [],
    config: { 
        cls: 'bookmark_tab',
        scrollable: true,
        tpl: [
                '<table class="bookmark_tab_table" width="100%">',                
                    '<tr>',
                        '<td width="100%">',
                            '<table>',
                                '<tr>',
                                    '<td width="20%">',
                                        '<img src="{book_img}" width="40" height="48">',
                                    '</td>',
                                    '<td class="paragraph_title">',
                                        'Bookmarks:<br><i>{title}</i><br> {author_name}',
                                    '</td>',
                                '</tr>',
                            '</table>',
                        '</td>',
                    '</tr>',
                    '<tpl for="book_chapter" >', 
                    '<tr>',
                        '<td style="padding:10px 0px;">',
                            '<b>{chapter_title}</b>',
                        '</td>',
                    '</tr>',
                    '<tpl for="paragraph" >',
                    '<tr>',
                        '<td class="paragraph_no">',
                            '<span class="paragraph_image"><img src="resources/images/paragraphno_icon.png"></span><span class="paragraph_contnt">{paragraph_no}</span>',
                        '</td>',
                    '</tr>',
                    '</tpl>',
                    '</tpl>',                                    
                '</table>',  
              
        ],
         
    }
})

