
Ext.require(['book.store.SOwnedBookList'], function() {
    Ext.define('book.view.OwnedBookEconomicsList', {
        extend: 'Ext.Container',
        xtype: 'ownedbookeconomicslist',
       
        requires: [
            'Ext.TitleBar'
        ],     
       
        config: {
      
        items: [
            {
                html: '<div class="display_by_cat"> Economics </div>'
            },{
                xtype: 'dataview', 
                height:250,
              
                inline: {
                    wrap: true
                },
                scrollable: false,
                itemCls: 'dataview-item',
                itemTpl: [
            
                '<table width="100%">',
                    '<tr>',
                        '<td class="ownedbook_img" width="10%">',
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
                        '<td class="downlod_icon" width="10%">',
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