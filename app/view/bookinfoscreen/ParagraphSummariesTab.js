

Ext.define('book.view.bookinfoscreen.ParagraphSummariesTab', {
    extend: 'Ext.Panel',
    xtype: 'paragraphsummariestab',
    requires: [],
    config: { 
        cls: 'summaries_tab',
        scrollable: false,
        tpl: [
                
                
                '<div class="bookmark_wrapper">',
                '<div class="bookmark_img">',
                    '<img src="{book_img}" width="30" height="30">',
                '</div>',
                '<div class="bookmark_info">',
                    '<p class="author_name">Bookmarks:</p>',
                    '<p class="book_title">{title}</p>',
                    '<p class="author_name">{author_name}</p>',                    
                '</div>',
                '</div>',
                
                
                /*
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
             */ 
        ],
        items:[
            
            {
                height:221,
                xtype: 'list',
                docked: 'bottom',
                itemTpl: ['<div class="active_img"></div> {title}'],
                data: [
                    { title: 'Chapter 8, New Deal Myths of Recovery' },
                    { title: '8.1 \"The New Deal did not end the Great Depression\"' },
                    { title: '8.2 \"The New Deal introduced economic nationalism\"' },
                    { title: '8.3 \"FDR failed to understand the cause of the Depression\"' },
                    { title: '8.4 \"The New Deal did not end the Great Depression\"' },
                    { title: '8.5 \"The US needed to fix the export market by eliminating tariffs\"' },
                    { title: '8.6 \"The New Deal did not end the Great Depression\"' }
                ]
            }
        ] 
         
    }
})

