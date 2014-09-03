

Ext.define('book.view.bookinfoscreen.NamedTagsTab', {
    extend: 'Ext.Container',
    xtype: 'namedtagstab',
    requires: [],
    config: { 
        cls: 'namedtags_tab',
        scrollable: true,
        tpl: [
                              
            '<div class="namedtags_wrapper">',
                '<div class="namedtags_img">',
                    '<img src="{book_img}" width="40" height="40">',
                '</div>',
                '<div class="namedtags_info">',
                    '<p class="book_title">{title}</p>',
                    '<p class="author_name">{tag_desc}</p>',                    
                '</div>',
            '<tpl for="tag" >',
                '<div class="book_chapter">',
                    '<span class="tag_color"><img src="{tag_color}"></span>Tag: {tag_title}',
                '</div>',
                '<tpl for="paragraph" >',
                    '<div class="paragraph_no">',
                        '<span class="paragraph_image"><img src="resources/images/tabs_tags_icon.png" width="15" height="15"></span><span class="paragraph_contnt">{paragraph_no}</span>',
                    '</div>',
                '</tpl>',
            '</tpl>', 
            '</div>',
             
        ],
         
    }
})

