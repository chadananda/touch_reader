Ext.define('book.view.studybar.CurrentOpenStudeyProjectList', {
    extend: 'Ext.List',
    xtype: 'currentppenstudeyprojectlist',
    requires: [],
    config: {
        scrollable: false,
        //cls: 'projct_list',
        itemTpl: '<div class="book_list"><div class="book_icon"><img src="resources/images/book_icon.png"></div><div class="book_text">{title}</div></div>',
            
            data: [
                { title: 'Famous English Fiction 101' },
                { title: 'Group Study of Classic Poetry' },
                { title: 'ndependent study #2' }
            ]
    }
});
