

Ext.define('book.view.book.MarkSubMenu', {
    extend: 'Ext.Container',
    xtype: 'marksubmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:60,
        height: 150,
        top: 450,
        left: 200,
        modal:true,
        hideOnMaskTap: true,
        cls: 'sharesub_Menu',
        items: [
            {
               
                flex:1,
                xtype: 'button',
                text: '<img src="resources/images/mark_yellow_icon.png">',
                ui: 'normal',
            },
            {
               
                flex:1,
                xtype: 'button',
                text: '<img src="resources/images/mark_red_icon.png">',
                //pressed: true
                ui: 'normal',
            },
            {
               
                flex:1,
                xtype: 'button',
                text: '<img src="resources/images/mark_blue_icon.png">',
                ui: 'normal',
            },
            {
               
                flex:1,
                xtype: 'button',
                text: '<img src="resources/images/mark_green_icon.png">',
                ui: 'normal',
            },
            {
               
                flex:1,
                xtype: 'button',
                text: '<img src="resources/images/mark_underline_icon.png">',
                ui: 'normal',
            }
        ]
         
    }
})

