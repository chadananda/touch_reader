

Ext.define('book.view.book.ExtractMenu', {
    extend: 'Ext.SegmentedButton',
    xtype: 'extractmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:345,
        height: 50,
      
        modal:true,
        hideOnMaskTap: true,
        cls: 'extract_menu',
        items: [
            {
                text: 'Share',
                ui: 'study'
            },
            {
                text: 'Copy',
                ui: 'study'
            },
            {
                text: 'Compile',
                ui: 'study'
            },
            {
                text: 'Memorize',
                ui: 'study'
            }
        ]
         
    }
})

