Ext.define('book.view.CurrentBookPopUp', {
    extend: 'Ext.Panel',
    xtype: 'currentbookpopup',
    requires: [],
    config: {
        floating: true,
        zIndex: 10000,
        cls: 'popup_panel',        
        id: 'popup',              
        width: 350,
        height: 310,
        //centered: true,
        modal: true,
        hideMode: 'close',
        hideOnMaskTap: true,
        layout: 'vbox',
        items:[
            {
                //xtype: 'panel',
                height:40,
                html: '<div class="recent_open_book">RECENTLY OPENED BOOKES</div>',
            },
            {
                flex:1, 
                xtype:'list',
                itemTpl: '<div class="book_list"><div class="book_icon"><img src="resources/images/book_icon.png"></div><div class="book_text">{title}</div></div>',
                data: [
                    { title: 'Twain, Huckleberry Finn' },
                    { title: 'Dickens, A Tale of Two Cities' },
                    { title: 'Fitzgerald, The Great Gatsby' },
                    { title: 'Lee, To Kill a Mockingbird' },
                    { title: 'Austin, Pride and Prejudice' },
                    { title: 'Salinger, Catcher in the Rye' }
                ],
            }
        ],
                   
        showAnimation: {
            type: 'slide',
            duration: 1,
            direction: 'up',
        },
        plugins: [new Ext.create('book.ux.PanelAction',{
            iconClass: 'x-panel-action-icon-close',
            iconPressedClass: '',
            position: 'tr',
            actionMethod: ['hide'] 
        })
        ]
 
    }
});
