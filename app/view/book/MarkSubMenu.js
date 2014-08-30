

Ext.define('book.view.book.MarkSubMenu', {
    extend: 'Ext.Panel',
    xtype: 'marksubmenu',
    requires: ['Ext.data.Store'],
    
    config: { 
        //allowMultiple: true,
        width:300,
        height: 228,
        top: 450,
        left: 200,
        modal:true,
        hideOnMaskTap: true,
        cls: 'marksub_menu',
        layout:'vbox',
        items:[
            {
                flex:1,
                xtype: 'list',
                itemId: 'mark_sub_menu',
                itemTpl: '{title}',
                disableSelection: true,
                data: [
                    { title: '<div class="tag_color"><img src="resources/images/mark_yellow_icon.png"></div><div class="tag_list_icon"> <img src="resources/images/note_tags_list_icon.png"></div><div class="tag_title"> Tag text1 </div><div class="tag_edit_icon"><img src="resources/images/panel_read_icon.png"></div>' },
                    { title: '<div class="tag_color"><img src="resources/images/mark_red_icon.png"></div><div class="tag_list_icon"> <img src="resources/images/note_tags_list_icon.png"></div><div class="tag_title"> Tag text2 </div><div class="tag_edit_icon"><img src="resources/images/panel_read_icon.png"></div>' },
                    { title: '<div class="tag_color"><img src="resources/images/mark_green_icon.png"></div><div class="tag_list_icon"> <img src="resources/images/note_tags_list_icon.png"></div><div class="tag_title"> Tag text3 </div><div class="tag_edit_icon"><img src="resources/images/panel_read_icon.png"></div>' },
                    { title: '<div class="tag_color"><img src="resources/images/mark_underline_icon.png"></div><div class="tag_list_icon"> <img src="resources/images/note_tags_list_icon.png"></div><div class="tag_title"> Tag text4 </div><div class="tag_edit_icon"><img src="resources/images/panel_read_icon.png"></div>' }
                ],
            },
            {
                layout: 'hbox',
                items: [
                    {
                        margin: 10,
                        xtype: 'textfield',
                        width:250,
                        clearIcon: false,
                    },
                    {
                        xtype: 'label',
                        padding: '16 0 0 0',
                        html: '<span style="float:right; margin-right:10px;"><img src="resources/images/book_add_icon.png"></span>',
                    }
                ]    
            }
        ]
         
    }
})

