

Ext.define('book.view.book.SelectionMenu', {
    extend: 'Ext.SegmentedButton',
    xtype: 'selectionmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:348,
        height: 50,
        top: 130,
        left: 200,
        modal:true,
        hideOnMaskTap: true,
        cls: 'selection_menu',
        items: [
            {
                text: 'EXTRACT',
                ui: 'segment'
            },
            {
                text: 'NOTE',
                ui: 'segment'
            },
            {
                text: 'LOOKUP',
                ui: 'segment'
            },
            {
                text: 'DISCUSS',
                ui: 'segment'
            }
        ]
         
    }
})

