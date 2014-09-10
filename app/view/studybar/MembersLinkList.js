Ext.define('book.view.studybar.MembersLinkList', {
    extend: 'Ext.List',
    xtype: 'memberslinklist',
    requires: [],
    config: {
        cls: 'member_list_view',
        height:135,
        itemTpl: [  
            '<div class="member_list_wrapper">',                        
                '<div class="members_title">',
                    '{title}',
                '</div>',
                '<div class="memmsg_icon">',
                    '<img src="resources/images/members_list_msg_icon.png">',
                '</div>',
            '</div>'
        ],
            
        data: [
            { title: 'Bob Jones' },
            { title: 'Samuel Johnson' },
            { title: 'John Carson' }
        ]
    }
});
