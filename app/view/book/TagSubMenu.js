

Ext.define('book.view.book.TagSubMenu', {
    extend: 'Ext.List',
    xtype: 'tagsubmenu',
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
                { title: '<img src="resources/images/tages_list_icon.png"> Tag Text 1' },
                { title: '<img src="resources/images/tages_list_icon.png"> Tag Text 2' },
                { title: '<img src="resources/images/tages_list_icon.png"> Tag Text 3' },
                { title: '<img src="resources/images/tages_list_icon.png"> Tag Text 4' },
                { title: '<img src="resources/images/tages_list_icon.png"> Tag Text 5' }
            ]
         
    }
})

