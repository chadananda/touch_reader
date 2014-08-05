Ext.define('book.view.CurrentStudyProjectPopUp', {
    extend: 'Ext.Panel',
    xtype: 'currentstudyprojectpopup',
    requires: [],
    config: {
        height: '60%',
        id: 'current_std_projct',
        left: '5%',
        padding: 10,
        top: '0%',
        width: '40%',
        hideOnMaskTap: true,
        modal: true ,
         layout: 'vbox',
        cls: 'popup_panel',
        items: [
            {
                html: '<div style="text-align:center;margin:10px 0px 10px 0px;">---------------current---------------</div>'
            },
            {
                
                flex:1,
               
                xtype: 'currentppenstudeyprojectlist'
            },
           
            {
                html: '<div style="text-align:center;margin:10px 0px 10px 0px;">---------------completed---------------</div>'
            },
            {
                
                flex:1,
               
                xtype: 'completedstudeyprojectlist'
            },
          
        ]
    }
});
