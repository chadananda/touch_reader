

Ext.define('book.view.journal.JournalingAssignment', {
    extend: 'Ext.Panel',
    xtype: 'jaournalingassignment',
    requires: [],
    config: {         
        cls: 'jaournal_panel',
        items: [
            {
                html: [
                    '<div class="assignment_cntnr">',
                        '<div class="assignment_img">',
                            '<img src="resources/images/assement_img.png">',
                        '</div>',
                        '<div class="assignment_txt">',
                            '<b>Monetary Disaster</b>',
                            '<p>Write 300 words describing the monetary policies which created and prolonged the Great Depression</p>',
                        '</div>',
                    '</div>'
                ].join("")
            },
            {
                cls: 'journal_editor',
                items: [
                    {
                        xtype: 'titlebar',
                        title:'',
                        ui: 'bluenav',
                        items: [
                            {
                                text: '<img src="resources/images/journal_editor_cut_icon.png">'
                            },
                            {
                                text: '<img src="resources/images/journal_editor_copy_icon.png">'
                            },
                            {
                                text: '<img src="resources/images/journal_editor_past_icon.png">'
                            },
                            {
                                style: 'margin-left:1em;',
                                text: '<img src="resources/images/editor_bold_icon.png">'
                            },
                            {
                                text: '<img src="resources/images/editor_uline_icon.png">'
                            },
                            {
                                text: '<img src="resources/images/editor_italic_icon.png">'
                            },
                            {
                                style: 'margin-left:1em;',
                                text: '<img src="resources/images/editor_bullet_icon.png">'
                            },
                            {
                                text: '<img src="resources/images/editor_no_icon.png">'
                            }
                        ]
                    },
                    {
                         xtype: 'textareafield',
                         maxRows: 4,
                         clearIcon:false, 
                         height: 307
                    },
                    {
                        cls: 'journal_bottom',
                        xtype: 'titlebar',
                        docked: 'bottom',
                        ui: 'bluenav',
                        items:[
                            {
                                xtype:'button',
                                html:'<span class="chat_btn"><img src="resources/images/chat_button.png"></span> Post Journal',
                                align: 'right',
                                ui: 'bluenav'
                            }
                        ]
                    }
                ]
            }
        ]
    }
})

