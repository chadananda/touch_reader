

Ext.define('book.view.VideoPlayer', {
    extend: 'Ext.Panel',
    xtype: 'videoplayer',
    requires: [],
    config: {         
        cls: 'video_panel',
        flex:1,       
        items: [
           {
                flex:1,
                layout: 'vbox',
                cls:'video_panel',
                margin:20,
                items: [
                    {
                        xtype:'titlebar',
                        title:'A Brief Introduction to Fractional<br> Exchange Money Creation',
                        ui: 'normal',
                        height:70,
                    },
                    {
                        margin:10,
                        xtype    : 'video',
                        x        : 600,
                        y        : 300,
                        width    : '95%',
                        height   : 200,
                        url      : "http://docs.sencha.com/touch/2.3.1/touch-build/examples/video/resources/media/BigBuck.m4v",
                        posterUrl: 'http://docs.sencha.com/touch/2.3.1/touch-build/examples/video/resources/images/cover.jpg'  
                    }
                ]     
            }
        ]
    }
})

