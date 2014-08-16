Ext.define('book.view.ListPopUp', {
    extend: 'Ext.Panel',
    xtype: 'listpopup',
    requires: [],
    config: {
        height: '70%',
        id: 'list_popup',
        left: '5%',
        padding: 10,
        top: '0%',
        width: '40%',
        hideOnMaskTap: true,
        modal: true ,
        cls: 'popup_panel',
        layout:'vbox',
        //flex:1,
        items: [
            {
                flex:1,
                xtype: 'bookinformationscreen'
            }
        ]
    }
});
