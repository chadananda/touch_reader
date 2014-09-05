
Ext.define('book.view.book.TagSubMenu', {
    extend: 'Ext.Panel',
    xtype: 'tagsubmenu',
    requires: ['Ext.data.Store'],
    
    config: { 
        width:300,
        height: 220,       
        modal:true,
        hideOnMaskTap: true,
        layout: 'vbox',
        cls: 'tagsub_menu',
        items: [
           {
                cls: 'tag_wrapper',
                layout: 'vbox',
                items:[
                    {
                        layout: 'hbox',
                        items: [
                            {
                                margin: '0 10 0 10',
                                html: '<div class="tag_lable_img"><img src="resources/images/note_tags_list_icon.png"></div>'
                            },
                            {   cls: 'tag_lable',
                                html: 'Edit tag text'
                            }
                        ]
                    },
                    {
                        layout: 'hbox',
                        height:50,
                        items: [
                            {
                                margin: 10,
                                xtype: 'textfield',
                                width:235,
                                clearIcon: false,
                            },
                            {
                                xtype: 'button',
                                height: 32,
                                itemId: 'edit_tag_text',
                                html: '<span><img src="resources/images/book_add_icon.png"></span>',
                            }
                        ]
                    }
                ]
            },
            {
                cls: 'tag_wrapper',
                layout: 'vbox',
                items: [
                    
                     {
                        layout: 'hbox',
                        items:[
                            {
                                 margin: '0 10 0 10',
                                 width:20,
                                 height:20,
                                 itemId: 'chnage_color_btn',
                                 style: 'background-color:#000;border:3px solid #fff;-webkit-border-radius:10px 10px;'
                            },
                            {
                                 cls: 'tag_lable',
                                 html: 'Change Tag color'
                            }
                        ]
                       
                    },
                    {
                        layout: 'hbox',
                        height:50,
                        items:[
                            {
                                margin: 10,
                                xtype: 'textfield',
                                width:235,
                                value:'',
                                clearIcon: false,
                                itemId: 'text_fill'
                            },
                            {
                                
                                xtype: 'button',
                                height: 32,
                                itemId: 'tag_color',
                                html: '<span><img src="resources/images/book_add_icon.png"></span>',
                            }
                        ]
                    }
                ]    
            }
        ]
    }
})

