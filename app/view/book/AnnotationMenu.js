

Ext.define('book.view.book.AnnotationMenu', {
    extend: 'Ext.SegmentedButton',
    xtype: 'annotationmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:150,
        height: 50,      
        modal:true,
        hideOnMaskTap: true,        
        items: [
            {
                text: 'Mark',
                ui: 'normal',
            },
            {
                text: 'Tag',
                ui: 'normal',
            },
            {
                text: 'Note',
                ui: 'normal',
            }
        ]
         
    }
})

