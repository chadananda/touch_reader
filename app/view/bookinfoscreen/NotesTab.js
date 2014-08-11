

Ext.define('book.view.bookinfoscreen.NotesTab', {
    extend: 'Ext.Panel',
    xtype: 'notestab',
    requires: [],
    config: { 
        cls: 'notes_tab',
        scrollable: true,
        tpl: [
                '<table class="notes_tab_table" width="100%">',                
                    '<tr>',
                        '<td width="100%">',
                            '<table>',
                                '<tr>',
                                    '<td width="20%">',
                                        '<img src="{book_img}" width="35" height="40">',
                                    '</td>',
                                    '<td class="paragraph_title">',
                                        '{title}<br> <i>{note_desc}</i>',
                                    '</td>',
                                '</tr>',
                            '</table>',
                        '</td>',
                    '</tr>',
                    '<tpl for="chapter" >', 
                    '<tr>',
                        '<td class="tag_title">',
                            '<b>{chapter_title}</b>',
                        '</td>',
                    '</tr>',
                    '<tpl for="paragraph" >',
                    '<tr>',
                        '<td class="paragraph_no">',
                            '<span class="paragraph_contnt">{paragraph_no}</span>',
                        '</td>',
                    '</tr>',
                    
                    '<tpl for="notes" >',
                    '<tr>',
                        '<td class="notes_desc">',
                            '<span class="paragraph_image"><img src="resources/images/tab_notes_icon.png"></span><span class="paragraph_contnt">{notes_desc}</span>',
                        '</td>',
                    '</tr>',
                    '</tpl>',
                    '</tpl>',
                    '</tpl>',                                    
                '</table>',  
              
        ],
         
    }
})

