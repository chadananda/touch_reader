

Ext.define('book.view.book.CompileSubMenu', {
    extend: 'Ext.Panel',
    xtype: 'compilesubmenu',
    requires: ['Ext.data.Store'],
    
    config: { 
        //allowMultiple: true,
        width:300,
        height: 250,
        modal:true,
        hideOnMaskTap: true,
        //scrollable: false,
        layout: 'vbox',
        items:[
            {
                flex:1,
                xtype: 'list',
                itemId: 'compile_sub_menu',
                itemTpl: '{title}',
                data: [
                    { title: '<img src="resources/images/book_icon.png"> Monetary vs. Fiscal Stimulus' },
                    { title: '<img src="resources/images/book_icon.png"> Compilation #2 Name' },
                    { title: '<img src="resources/images/book_icon.png"> Compilation #3 Name' },
                    { title: '<img src="resources/images/book_icon.png"> Compilation #4 Name' },
                    { title: '<img src="resources/images/book_add_icon.png"> Create New Compilation' }
                ],
            }
        ]
         
    }
})

