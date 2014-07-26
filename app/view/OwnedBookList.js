
Ext.require(['book.store.SOwnedBookList'], function() {
    Ext.define('book.view.OwnedBookList', {
        extend: 'Ext.dataview.List',
        xtype: 'ownedbooklist',
       
        requires: [
            'Ext.TitleBar'
        ],     
        config: {
            flex:1,
            cls: 'ownedbooklist',
            disableSelection: true,     
            itemTpl: [
            
                '<table  width="100%">',
                    '<tr>',
                        '<td width="6%" class="ownedbook_img">',
                            '<img src="{url}">',
                        '</td>',
                        
                        '<td width="50%" class="ownedbook_detail" valign="top">',    
                            '<table>',
                                '<tr>',
                                    '<td valign="top">{book_title}</td>',
                                '</tr>',
                                '<tr>',
                                    '<td valign="top">{author_name}</td>',
                                '</tr>',
                                '<tr>',
                                    '<td valign="top">{category_name}</td>',
                                '</tr>',
                            '</table>',
                        '</td>',
                        '<td valign="top" class="ownedbook_detail">',    
                          '<img src="resources/images/download-icon.png">',  
                        '</td>',
                       
                    '</tr>',
                '</table>'
            
            ],
            store: Ext.create('book.store.SOwnedBookList'),
             
        } 
        
    })
})