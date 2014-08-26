Ext.define('book.view.studybar.CompletedStudeyProjectList', {
    extend: 'Ext.List',
    xtype: 'completedstudeyprojectlist',
    requires: [],
    config: {
        scrollable: false,
        //cls: 'projct_list',
        itemTpl: '<div class="book_list"><div class="book_icon"><img src="resources/images/book_icon.png"></div><div class="book_text">{title}</div></div>',
        
            data: [
                { title: 'Comparative theology' },
                { title: 'History of Philosophy' },
                { title: 'Early pilgrim accounts' }
            ]
    }
});
