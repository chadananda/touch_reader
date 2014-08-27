

Ext.define('book.view.bookinfoscreen.NotesTab', {
    extend: 'Ext.Panel',
    xtype: 'notestab',
    requires: [],
    config: { 
        cls: 'notes_tab',
        scrollable: true,
        tpl: [
              
            '<div class="notes_wrapper">',
                '<div class="notes_img">',
                    '<img src="{book_img}" width="30" height="30">',
                '</div>',
                '<div class="notes_info">',
                    '<p class="book_title">{title}</p>',
                    '<p class="author_name">{note_desc}</p>',                    
                '</div>',
            
            '<tpl for="chapter" >',
                '<div class="book_chapter">',
                    '{chapter_title}',
                '</div>',
                '<tpl for="paragraph" >',
                    '<div class="paragraph_wrapper">',
                        '<div class="paragraph_no">',
                            '<span class="paragraph_image"><img src="resources/images/tab_notes_icon.png"></span><span class="paragraph_contnt">{paragraph_no}</span>',
                        '</div>',
                        '<tpl for="notes" >',
                            '<div class="notes_desc">',
                                '{notes_desc}',
                            '</div>',
                    '</div>',
                        '</tpl>',
                '</tpl>',
            '</tpl>', 
            '</div>',
             
        ],
         
    }
})

