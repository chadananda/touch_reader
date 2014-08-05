Ext.define('book.view.TopSearchField', {
    extend: 'Ext.Panel',
    xtype: 'topsearchfield',
    requires: [],
    config: {
        height: '7.22%',
        id: 'top_search',
        left: '5%',
        top: '0%',
        width: '30%',
        hideOnMaskTap: true,
        modal: true ,
        cls: 'top_search_panel',
        items: [
            {
                xtype: 'searchfield',
                name: 'search',
                width: 380
            }
        ]
    }
});
