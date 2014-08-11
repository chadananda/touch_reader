

Ext.define('book.view.bookinfoscreen.ParagraphSummariesTab', {
    extend: 'Ext.Panel',
    xtype: 'paragraphsummariestab',
    requires: [],
    config: { 
        cls: 'summaries_tab',
        scrollable: true,
        tpl: [
                '<table class="summaries_tab_table" width="100%">',                
                    '<tr>',
                        '<td width="100%">',
                            '<table>',
                                '<tr>',
                                    '<td width="30%">',
                                        '<img src="{book_img}" width="50" height="42">',
                                    '</td>',
                                    '<td class="paragraph_title">',
                                        '<span>Summaries:</span><br>{title}<br> <i>{author_name}</i>',
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
                    '</tpl>',
                    '</tpl>',                                    
                '</table>',  
              
        ],
         
    }
})

