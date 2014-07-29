
Ext.require(['book.store.SOwnedBookList'], function() {
    Ext.define('book.view.OwnedBookList', {
        extend: 'Ext.Container',
        xtype: 'ownedbooklist',
       
        requires: [
            'Ext.TitleBar'
        ],     
       
        config: {
        //flex:1,
        cls: 'ownedbooklist',
        items: [
            {
                xtype: 'dataview', 
                height: '100%',
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
            
                '<table  >',
                    '<tr>',
                        '<td  class="ownedbook_img">',
                            '<img src="{url}">',
                        '</td>',
                        
                        '<td  class="ownedbook_detail" valign="top">',    
                            '<table>',
                                '<tr>',
                                    '<td valign="top" style="color:#000;">{book_title}</td>',
                                '</tr>',
                                '<tr>',
                                    '<td valign="top" style="font-size:12px;">{author_name}</td>',
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
        ]
    }
         
        
    })
})