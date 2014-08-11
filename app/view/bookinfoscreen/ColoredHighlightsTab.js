

Ext.define('book.view.bookinfoscreen.ColoredHighlightsTab', {
    extend: 'Ext.Panel',
    xtype: 'coloredhighlightstab',
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
                                        '<img src="{book_img}" width="35" height="37">',
                                    '</td>',
                                    '<td class="paragraph_title">',
                                        'Highlights:<br><i>{title}</i><br> {author_name}',
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
                            '<span class="paragraph_image"><input type="radio" name="radio"></span><span class="paragraph_contnt">{paragraph_no}</span>',
                        '</td>',
                    '</tr>',
                    '</tpl>',
                    '</tpl>',                                    
                '</table>',  
              
        ],
         
    }
})

