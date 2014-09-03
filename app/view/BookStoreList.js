
Ext.require(['book.store.SBookStoreList'], function() {
    Ext.define('book.view.BookStoreList', {
        extend: 'Ext.Container',
        xtype: 'bookstorelist',
       
        requires: [
            'Ext.TitleBar'
        ],     
      
        config: {
        cls: 'ownedbooklist',
        items: [
            
            {
               xtype: 'dataview', 
               height:'100%',
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
          
                '<table width="100%">',
                    '<tr>',
                        '<td class="ownedbook_img" width="10%">',
                            '<img src="{url}">',
                        '</td>',
                        
                        '<td class="ownedbook_detail" valign="top" width="80%">',    
                            '<table width="100%">',
                                '<tr>',
                                    '<td valign="top" class="book_title">{book_title}</td>',
                                '</tr>',
                                '<tr>',
                                    '<td valign="top" class="author_name" width="33.33%">{author_name}</td>',
                                '</tr>',
                                '<tr>',
                                    '<td valign="top" class="category" width="33.33%">{category_name}</td>',
                                '</tr>',
                            '</table>',
                        '</td>',
                        '<td class="downlod_icon" width="10%">',
                            '<img src="resources/images/download-icon.png">',
                        '</td>',
                    '</tr>',
                '</table>' 
           
            ],
            store: Ext.create('book.store.SBookStoreList'),
            }
        ]
    }
         
        
    })
})