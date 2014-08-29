

Ext.define('book.view.book.ShareSubMenu', {
    extend: 'Ext.Panel',
    xtype: 'sharesubmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:70,
        height: 165,
        top: 450,
        left: 200,
        modal:true,
        hideOnMaskTap: true,
        cls: 'sharesub_Menu',
        layout: 'vbox',
        items: [
          
          {
            html:'<img src="resources/images/facebook-icon.png">'
          },
          {
            html: '<img src="resources/images/twitter-icon.png">'
          },
          {
            html: '<img src="resources/images/googleplus_icon.png">'  
          }
        ]
         
    }
})

