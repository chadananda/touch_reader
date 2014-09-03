

Ext.define('book.view.book.TagSubMenu', {
    extend: 'Ext.Panel',
    xtype: 'tagsubmenu',
    requires: ['Ext.data.Store'],
    
    config: { 
        width:300,
        height: 250,       
        modal:true,
        hideOnMaskTap: true,
        layout: 'vbox',
        cls: 'tagsub_menu',
        items: [
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
                        
                        xtype: 'button',
                        height: 32,
                        itemId: 'edit_tag_text',
                        html: '<span><img src="resources/images/book_add_icon.png"></span>',
                    }
                ]    
            },
            {
                layout: 'vbox',
                items: [
                    
                     {
                         layout: 'hbox',
                        items:[
                            {
                                 width:20,
                                 height:20,
                                 itemId: 'chnage_color_btn',
                                 style: 'background-color:#000;border:3px solid #fff;-webkit-border-radius:10px 10px;'
                            },
                            {
                                 html: 'Change Tag color'
                            }
                        ]
                       
                    },
                    {
                        layout: 'hbox',
                        items:[
                            {
                                margin: 10,
                                xtype: 'textfield',
                                width:250,
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

