

Ext.define('book.view.book.NoteSubMenu', {
    extend: 'Ext.Container',
    xtype: 'notesubmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:300,
        height: 300,
        top: 450,
        left: 200,
        modal:true,
        hideOnMaskTap: true,
        autoCreate: true,
        cls: 'sharesub_Menu',
        xtype: 'sheet',
         items: [
            {
                xtype: 'textareafield',
                style: 'background: #eeeeee;',
                clearIcon: false
            }
        ]
         
    }
})

