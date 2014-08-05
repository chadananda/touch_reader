Ext.define('book.view.CompletedStudeyProjectList', {
    extend: 'Ext.List',
    xtype: 'completedstudeyprojectlist',
    requires: [],
    config: {
        scrollable: false,
        cls: 'projct_list',
        itemTpl: '{title}',
        
            data: [
                { title: '<div class="reader_option"><img src="resources/images/study_course_small_icon.png">Comparative theology</div>' },
                { title: '<div class="reader_option"><img src="resources/images/study_course_small_icon.png">History of Philosophy</div>' },
                { title: '<div class="reader_option"><img src="resources/images/study_course_small_icon.png">Early pilgrim accounts</div>' }
            ]
    }
});
