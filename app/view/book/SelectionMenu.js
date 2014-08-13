

Ext.define('book.view.book.SelectionMenu', {
    extend: 'Ext.SegmentedButton',
    xtype: 'selectionmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:150,
        height: 50,
        top: 200,
        left: 200,
        modal:true,
        hideOnMaskTap: true,
        
        items: [
            {
                text: 'Extract',
                ui: 'segment',
            },
            {
                text: 'Note',
                //pressed: true
                ui: 'segment',
            },
            {
                text: 'Lookup',
                ui: 'segment',
            },
            {
                text: 'Discuss',
                ui: 'segment',
            }
        ]
         
    }
})

