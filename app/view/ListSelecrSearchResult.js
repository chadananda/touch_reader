

Ext.define('book.view.ListSelecrSearchResult', {
    extend: 'Ext.Panel',
    xtype: 'listselecrsearchresult',
    requires: [],
    config: { 
        cls: 'book_list_result',
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
                '<div style="float:left;margin:10px;">12 Results Found</div>',
            '</div>',
        ],
        items:[
            
            {
                cls:'search_result',
                height:200,
                style:'margin:0px;',
                xtype: 'list',
                docked: 'bottom',
                itemTpl: ['<div class="active_img"></div> {title}'],
                data: [
                    { title: 'America\'s macroeconomic policy raised up this spectacular subur' },
                    { title: 'America\'s macroeconomic policy raised up this spectacular subur' }
                ]
            }
        ] 
        
         
    }
})

