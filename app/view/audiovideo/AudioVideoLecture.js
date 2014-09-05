

Ext.define('book.view.audiovideo.AudioVideoLecture', {
    extend: 'Ext.Panel',
    xtype: 'audiovideolecture',
    requires: [],
    config: {         
        cls: 'audio_video_panel',
        flex:1,
        layout: 'hbox',       
        items:[
            {
                flex:1,
                xtype: 'audioplayerview'    
            },
            {
                flex:1,
                xtype: 'videoplayer' 
            }
        ]
    }
})

