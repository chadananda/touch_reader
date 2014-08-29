

Ext.define('book.view.ListSelecrSearchResult', {
    extend: 'Ext.Panel',
    xtype: 'listselecrsearchresult',
    requires: [],
    config: { 
        //cls: 'book_list_result',
        //scrollable: true,
       
        tpl: [
        
            '<div class="bookinfo_wrapper">',
                '<div class="bookinfo_img">',
                    '<img src="{book_img}" width="80" height="108">',
                '</div>',
                '<div class="bookinfo_detail">',
                    '<p class="book_title">{title}</p>',
                    '<p class="author_name">{author_name} {follower}</p>',
                    '<p class="difficulty">{difficulty}</p>',
                    '<p class="description">{description}</p>',
                '</div>',
            '</div>',
        ]
    }
})

