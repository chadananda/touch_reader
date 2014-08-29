
Ext.require(['book.store.SOwnedBookList'], function() {
    Ext.define('book.view.OwnedBookHistoryList', {
        extend: 'Ext.Container',
        xtype: 'ownedbookhistorylist',
       
        requires: [
            'Ext.TitleBar'
        ],     
       
        config: {
        //flex:1,
        //cls: 'ownedbooklist',
        
        items: [
            {
             html: '<div class="display_by_cat">History</div>'
            },{
                xtype: 'dataview', 
               height:'87%',
               // styleHtmlContent: true,
                width: '100%',
                
                inline: {
                    wrap: true
                },
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                itemCls: 'dataview-item',
                itemTpl: [
            
                '<table>',
                    '<tr>',
                        '<td class="ownedbook_img">',
                            '<img src="{url}">',
                        '</td>',
                        
                        '<td class="ownedbook_detail" valign="top">',    
                            '<table>',
                                '<tr>',
                                    '<td valign="top" class="book_title">{book_title}</td>',
                                '</tr>',
                                '<tr>',
                                    '<td valign="top" class="author_name">{author_name}</td>',
                                '</tr>',
                                '<tr>',
                                    '<td valign="top" class="category">{category_name}</td>',
                                '</tr>',
                            '</table>',
                        '</td>',
                        '<td class="downlod_icon">',
                            '<img src="resources/images/download-icon.png">',
                        '</td>',
                    '</tr>',
                '</table>' 
            
            ],
            store: Ext.create('book.store.SOwnedBookList'),
            }
        ]
    }
         
        
    })
})