

Ext.define('book.view.journal.MicroJournaling', {
    extend: 'Ext.Panel',
    xtype: 'microjournaling',
    requires: [],
    config: {         
        cls: 'micro_jaournal_panel',
        items: [
            {
                xtype: 'titlebar',
                title: 'Paragraph Micro-summary',
                ui: 'bluenav',
                items:[
                    {
                        xtype: 'image',
                        src: 'resources/images/manually_editing_icon.png',
                        width: 30,
                        height: 29,
                        align:'left'
                    }
                ]
            },
            {
                style:'margin:5px;border:1px solid #ddd;height:180px;',
                xtype: 'textareafield',
                maxRows: 9,
                clearIcon: false
            },
            {                
                xtype: 'titlebar',                
                docked: 'bottom',
                 ui: 'bluenav',              
                items:[
                    {
                        xtype: 'button',
                        text: 'Post',
                        width: 100,
                        height: 25,
                        iconAlign: 'right',
                        align: 'right'
                    }
                ]
            }
        ]
    }
})

