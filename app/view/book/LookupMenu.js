

Ext.define('book.view.book.LookupMenu', {
    extend: 'Ext.Panel',
    xtype: 'lookupmenu',
    requires: ['Ext.form.FieldSet'],
    
    config: { 
        //allowMultiple: true,
        width:370,
        height: 370,      
        modal:true,
        hideOnMaskTap: true,
        cls: 'lookup_menu',        
        
        
        items: [
            {
            
                html: [
                    '<div class="lookup_menu_wrapper">',
                        '<h1>Word or Phrase</h1>',
                        '<div class="content">',
                            '<div class="content_img"><img src="resources/images/dictionary_icon.png"></div>',
                            '<div class="content_txt">dictionary def-in-ition',
                                '<p class="text">verb [no obj.]</p>',
                                '<p class="text">(in context) to make or create something or another out of something</p>',
                                '<hr>',
                            '</div>',
                        '</div>',
                        
                        '<div class="content">',
                            '<div class="content_img"><img src="resources/images/dictionary_icon.png"></div>',
                            '<div class="content_txt">custom glossary entry',
                                '<p class="text">to make or create something or another</p>',
                                '<hr>',
                            '</div>',
                        '</div>',
                        
                        '<div class="content">',
                            '<div class="content_img"><img src="resources/images/bibliography_icon.png"></div>',
                            '<div class="content_txt">custom bibliography entry',
                                '<p class="text">(1) The eldest cousin of St. Igatius of Layola, known for his opposition to high standards of religious education</p>',
                            '</div>',
                        '</div>',   
                    '</div>'
                ].join(""),
            },
            {   
                layout: 'hbox',
                
                items: [
                    {
                        xtype: 'button',
                        text: '<img src="resources/images/memorize_icon.png"> Memorize',
                        height:40,
                    },
                    {
                        xtype: 'fieldset',
                        clearIcon: true,
                        items: [
                            {
                                xtype: 'searchfield',
                                placeHolder: 'Search Library',
                                width:200
                                
                            }
                        ]
                    }
                ]
            }
        ]
         
    }
})

