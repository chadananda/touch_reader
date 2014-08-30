

Ext.define('book.view.book.NoteSubMenu', {
    extend: 'Ext.Panel',
    xtype: 'notesubmenu',
    requires: [],
    
    config: { 
        //allowMultiple: true,
        width:300,
        height: 285,
        top: 450,
        left: 200,
        modal:true,
        hideOnMaskTap: true,
        autoCreate: true,
        cls: 'notesub_menu',
        xtype: 'sheet',
         items: [
            {
                xtype: 'textareafield',
                maxHeight:'40%',
                style: 'background: #eeeeee;',
                clearIcon: false
            }
        ]
         
    }
})

