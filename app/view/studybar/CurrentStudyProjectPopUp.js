Ext.define('book.view.studybar.CurrentStudyProjectPopUp', {
    extend: 'Ext.Panel',
    xtype: 'currentstudyprojectpopup',
    requires: [],
    config: {
        
        floating: true,
        zIndex: 10000,
        cls: 'popup_panel',        
        id: 'current_std_projct',              
        width: 450,
        height: 350,
        modal: true,
        hideMode: 'close',
        hideOnMaskTap: true,
        layout: 'vbox',
        
        items: [
            {
                height:40,
                html: '<div class="recent_open_book">CURRENT</div>'
            },
            {
                flex:1,
                xtype: 'currentppenstudeyprojectlist'
            },
           
            {
                height:40,
                html: '<div class="recent_open_book"> COMPLETED</div>'
            },
            {
                flex:1,
                xtype: 'completedstudeyprojectlist'
            },
          
        ],
            showAnimation: {
                type: 'slide',
                duration: 1,
                direction: 'up'
            },
            plugins: [new Ext.create('book.ux.PanelAction',{
                iconClass: 'x-panel-action-icon-close',
                iconPressedClass: '',
                position: 'tr',
                actionMethod: ['hide'] 
            })
            ]
    }
});
