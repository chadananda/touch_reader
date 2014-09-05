

Ext.define('book.view.bookinfoscreen.ParagraphSummariesTab', {
    extend: 'Ext.Container',
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
                '<p class="author_name">Summaries:</p>',
                '<p class="book_title">{title}</p>',
                '<p class="author_name">{author_name}</p>',                    
            '</div>',
            '</div>'
        ],
        items:[
            
            {
                height:250,
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

