

Ext.define('book.view.journal.JournalingAssignment', {
    extend: 'Ext.Panel',
    xtype: 'jaournalingassignment',
    requires: [],
    config: {         
        cls: 'jaournal_panel',
        flex:1,       
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
                ].join(""),
            }
        ]
    }
})

