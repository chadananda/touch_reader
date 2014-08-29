Ext.define('book.view.SearchBooksView', {
    extend: 'Ext.Panel',
    xtype: 'searchbooksview',
    requires: [],
    config: { 
        layout:'hbox',
        cls: 'search_book_container',
        items: [
            {
                html:'<div class="filter_icon"><img src="resources/images/filter_icon.png"></div>'
            },
            
            {
                flex: 2,
                xtype: 'selectfield',
                //label: '&nbsp;',
                labelWidth: '20',
                options: [
                    {text: 'category',  value: 'category'},
                    {text: 'title', value: 'title'},
                    {text: 'author',  value: 'author'}
                ]
            },
            {
                flex: 1.5,
                cls: 'search_field',
                xtype: 'searchfield',
                placeHolder: 'Text Field',
                name: 'query',
            },            
            {
                    
                flex: 1,
                itemId: 'top_select_field', 
                xtype: 'selectfield',
                options: [
                    {text: 'English',  value: 'english'},
                    {text: 'Franch', value: 'franch'},
                    {text: 'Spanish',  value: 'spanish'}
                ]
            }
        ]
    }
});
