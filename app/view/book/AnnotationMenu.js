

Ext.define('book.view.book.AnnotationMenu', {
    extend: 'Ext.SegmentedButton',
    xtype: 'annotationmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:167,
        height: 50,      
        modal:true,
        hideOnMaskTap: true,
        cls: 'extract_menu',        
        items: [
            {
                text: 'Mark',
                ui: 'study'
            },
            {
                text: 'Tag',
                ui: 'study'
            },
            {
                text: 'Note',
                ui: 'study'
            }
        ]
         
    }
})

