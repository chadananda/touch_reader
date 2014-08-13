

Ext.define('book.view.book.CompileSubMenu', {
    extend: 'Ext.List',
    xtype: 'compilesubmenu',
    requires: ['Ext.data.Store'],
    
    config: { 
        //allowMultiple: true,
        width:300,
        height: 250,
       
        modal:true,
        hideOnMaskTap: true,
        //scrollable: false,
        itemId: 'compile_sub_menu',
        itemTpl: '{title}',
            data: [
                { title: '<img src="resources/images/compile_sub_icon.png"> Monetary vs. Fiscal Stimulus' },
                { title: '<img src="resources/images/compile_sub_icon.png"> Compilation #2 Name' },
                { title: '<img src="resources/images/compile_sub_icon.png"> Compilation #3 Name' },
                { title: '<img src="resources/images/compile_sub_icon.png"> Compilation #4 Name' },
                { title: '<img src="resources/images/compile_sub_add_icon.png"> Create New Compilation' }
            ]
         
    }
})

