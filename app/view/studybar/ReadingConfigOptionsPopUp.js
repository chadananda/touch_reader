Ext.define('book.view.studybar.ReadingConfigOptionsPopUp', {
    extend: 'Ext.Panel',
    xtype: 'readingconfigpptionspopup',
    requires: [],
    config: {
        id: 'popup',
        left: '5%',
        padding: 10,
        top: '0%',
        width: '50%',
        hideOnMaskTap: true,
        modal: true ,
        items: [
            {                
                html: '<div class="reader_option"><img src="resources/images/reader_view_icon.png">Reader View Options</div>'
               
            },
            {                
                layout: 'hbox',
                cls: 'reader_config',
                items: [
                    {                    
                        html: '<div class="reader_config_title">Font Size</div>'                    
                    },
                    {
                        xtype: 'button',
                        text: 'Aa',
                        ui: 'round'
                    },
                    {
                        xtype: 'button',
                        text: 'Aa',
                        ui: 'round'
                    }
                ]
               
            },
            {                
                layout: 'hbox',
                cls: 'reader_config',
                items: [
                    {                    
                        html: '<div class="reader_config_title">Line Height</div>'                    
                    },
                    {
                        xtype: 'button',
                        html: '<img src="resources/images/line_height_sicon.png">',
                        ui: 'round'
                    },
                    {
                        xtype: 'button',
                        html: '<img src="resources/images/line_height_licon.png">',
                        ui: 'round'
                    }
                ]
               
            },
            {                
                layout: 'hbox',
                cls: 'reader_config',
                items: [
                    {                    
                        html: '<div class="reader_config_title">Theme</div>'                    
                    },
                    {
                        xtype: 'button',
                        html: '<img src="resources/images/day_theme_icon.png">',
                        ui: 'round'
                    },
                    {
                        xtype: 'button',
                        html: '<img src="resources/images/night_theme_icon.png">',
                        ui: 'round'
                    },
                    {
                        xtype: 'button',
                        html: '<img src="resources/images/sepia_theme_icon.png">',
                        ui: 'round'
                    }
                ]
               
            },
            {                
                cls: 'reader_config_slider',
                items: [
                   
                    {
                        xtype: 'sliderfield',
                        label: 'Audio Speed',
                        labelWidth: '25%',
                        value: 10,
                        minValue: 0,
                        maxValue: 100,
                        html: '<table width="100%" align="left"><tr><td width="50%">Slow</td><td width="50%" align="right">Fast</td></tr></table>'        
                    }
                ]
               
            }
        ]
    }
});
