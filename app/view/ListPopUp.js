Ext.define('book.view.ListPopUp', {
    extend: 'Ext.Panel',
    xtype: 'listpopup',
    requires: [],
    config: {
        
        floating: true,
        zIndex: 10000,
        cls: 'popup_panel',        
        id: 'list_popup',              
        width: 500,
        height: 400,
        //padding: 10,
        left: '5%',
        top: '0%',
        //centered: true,
        modal: true,
        hideMode: 'close',
        hideOnMaskTap: true,
        layout: 'vbox',
        
        
        items: [
            {
                flex:1,
                xtype: 'bookinformationscreen'
            }
        ],
        showAnimation: {
            type: 'slide',
            duration: 1,
            direction: 'up',
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
