Ext.define('book.view.CurrentOpenStudeyProjectList', {
    extend: 'Ext.List',
    xtype: 'currentppenstudeyprojectlist',
    requires: [],
    config: {
        scrollable: false,
        cls: 'projct_list',
        itemTpl: '{title}',
            
            data: [
                { title: '<div class="reader_option"><img src="resources/images/study_course_small_icon.png">Famous English Fiction 101</div>' },
                { title: '<div class="reader_option"><img src="resources/images/study_course_small_icon.png">Group Study of Classic Poetry</div>' },
                { title: '<div class="reader_option"><img src="resources/images/study_course_small_icon.png">Independent study #2</div>' }
            ]
    }
});
