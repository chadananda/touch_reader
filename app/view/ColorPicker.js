
Ext.define('book.view.ColorPicker', {
    extend: 'Ext.Panel',
    xtype: 'colorpicker',
   
    requires: ['Ext.data.Store'],     
   
    config: {
    
        layout: 'fit',
        width:191,
        height:127,
        zIndex: 10000,
        items: [
            {
                xtype: 'dataview',
                scrollable: false,
                itemId: 'color_picker',
                useSelectedHighlights: true,
                itemCls: 'color-dataview-item',
                itemTpl: '<div style="background-color: #{color}; width:1em; height: 1em; border: 1px solid #a8a99b;">&nbsp;</div>',
                data: [
                    {color: '000000'}, {color: '993300'}, {color: '333300'}, {color: '003300'}, {color: '003366'}, {color: '000080'}, {color: '333399'}, {color: '333333'},
              		{color: '800000'}, {color: 'FF6600'}, {color: '808000'}, {color: '008000'}, {color: '008080'}, {color: '0000FF'}, {color: '666699'}, {color: '808080'},
                    {color: 'FF0000'}, {color: 'FF9900'}, {color: '99CC00'}, {color: '339966'}, {color: '33CCCC'}, {color: '3366FF'}, {color: '800080'}, {color: '969696'},
              		{color: 'FF00FF'}, {color: 'FFCC00'}, {color: 'FFFF00'}, {color: '00FF00'}, {color: '00FFFF'}, {color: '00CCFF'}, {color: '993366'}, {color: 'C0C0C0'},
              		{color: 'FF99CC'}, {color: 'FFCC99'}, {color: 'FFFF99'}, {color: 'CCFFCC'}, {color: 'CCFFFF'}, {color: '99CCFF'}, {color: 'CC99FF'}, {color: 'FFFFFF'}
                ]
            }
        ]
    }
})
