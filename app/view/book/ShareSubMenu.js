

Ext.define('book.view.book.ShareSubMenu', {
    extend: 'Ext.Container',
    xtype: 'sharesubmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:100,
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
                text: '<img src="resources/images/facebook-icon.png">',
                ui: 'normal',
            },
            {
               
                flex:1,
                xtype: 'button',
                text: '<img src="resources/images/twitter-icon.png">',
                //pressed: true
                ui: 'normal',
            },
            {
               
                flex:1,
                xtype: 'button',
                text: '<img src="resources/images/googleplus_icon.png">',
                ui: 'normal',
            }
        ]
         
    }
})

