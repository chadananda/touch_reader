

Ext.define('book.view.bookinfoscreen.NamedTagsTab', {
    extend: 'Ext.Panel',
    xtype: 'namedtagstab',
    requires: [],
    config: { 
        cls: 'namedtags_tab',
        scrollable: true,
        tpl: [
                '<table class="namedtag_tab_table" width="100%">',                
                    '<tr>',
                        '<td width="100%">',
                            '<table>',
                                '<tr>',
                                    '<td width="20%">',
                                        '<img src="{book_img}" width="40" height="35">',
                                    '</td>',
                                    '<td class="paragraph_title">',
                                        '{title}<br> <i>{tag_desc}</i>',
                                    '</td>',
                                '</tr>',
                            '</table>',
                        '</td>',
                    '</tr>',
                    '<tpl for="tag" >', 
                    '<tr>',
                        '<td class="tag_title">',
                            '<img src="resources/images/tabs_tags_icon.png">Tag: <b style="color:#53141a;">{tag_title}</b>',
                        '</td>',
                    '</tr>',
                    '<tpl for="paragraph" >',
                    '<tr>',
                        '<td class="paragraph_no">',
                            '<span class="paragraph_image"><img src="resources/images/tags_icon.png"></span><span class="paragraph_contnt">{paragraph_no}</span>',
                        '</td>',
                    '</tr>',
                    '</tpl>',
                    '</tpl>',                                    
                '</table>',  
              
        ],
         
    }
})

