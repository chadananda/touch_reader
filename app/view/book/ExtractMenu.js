

Ext.define('book.view.book.ExtractMenu', {
    extend: 'Ext.SegmentedButton',
    xtype: 'extractmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:150,
        height: 50,
      
        modal:true,
        hideOnMaskTap: true,
        
        items: [
            {
                text: 'Share',
                ui: 'normal',
            },
            {
                text: 'Copy',
                //pressed: true
                ui: 'normal',
            },
            {
                text: 'Compile',
                ui: 'normal',
            },
            {
                text: 'Memorize',
                ui: 'normal',
            }
        ]
         
    }
})

