

Ext.define('book.view.bookinfoscreen.BookInfoTab', {
    extend: 'Ext.Panel',
    xtype: 'bookinfotab',
    requires: [],
    config: { 
        cls: 'bookinfo_tab',
        scrollable: true,
        tpl: [
        
            '<table class="bookinfo_tab_table" width="100%">',                
                '<tr>',
                    '<td width="100%" class="title">',
                        '<table>',
                            '<tr>',
                                '<td width="20%">',
                                    '<img src="{book_img}">',
                                '</td>',
                                '<td class="book_title">',
                                    '<i>{title}</i><br> {author_name}',
                                '</td>',
                            '</tr>',
                        '</table>',
                    '</td>',
                '</tr>',
                
                '<tr>',
                    '<td><b>Description</b></td>',
                '</tr>',
                '<tr>',
                    '<td class="description">',
                        '{description}',
                    '</td>',
                '</tr>',
                '<tr>',
                    '<td><b>Contents</b></td>',
                '</tr>', 
                '<tpl for="contents" >',
                '<tr>',
                    '<td class="table_of_contents">',
                        '{table_of_contents}',
                    '</td>',
                '</tr>',
                '</tpl>',
                                                    
            '</table>', 
        
        ],
         
    }
})

