

Ext.define('book.view.audiovideo.AudioVideoLectureContainer', {
    extend: 'Ext.Panel',
    xtype: 'audiovideolecturecontainer',
    requires: [],
    config: { 
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer'
            },
            {
                flex:5,
                xtype: 'audiovideolecture'
            },
            {
                xtype: 'spacer'
            }
        ]
    }
})

