

Ext.define('book.view.AudioPlayer', {
    extend: 'Ext.Panel',
    xtype: 'audioplayerview',
    requires: ['Ext.Audio'],
    config: {         
        cls: 'audio_panel',
        flex:1,       
        items: [
           {
                flex:1,
                layout: 'vbox',
                cls:'audio_panel',
                margin:20,
                items:[
                    {
                        xtype:'titlebar',
                        title:'A Brief Introduction to Fractional<br> Exchange Money Creation',
                        height:70,
                        ui: 'normal' ,
                    },
                    {
                        xtype:'fieldset',
                        
                        items:[
                            {
                                xtype:'audioplayer',
                                margin:20,
                                url:'data/BE_WITH_YOU.mp3',
                                title:'BE_WITH_YOU MP3'
                            }
                        ]   
                    }
                ]         
            }
        ]
    }
})

