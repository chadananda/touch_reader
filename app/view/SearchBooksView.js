Ext.define('book.view.SearchBooksView', {
    extend: 'Ext.Panel',
    xtype: 'searchbooksview',
    requires: [],
    config: { 
        layout:'hbox',
        cls: 'search_book_container',
        items: [
            
            {
                flex: 2,
                xtype: 'selectfield',
                label: 'Filter books by',
                labelWidth: '20',
                options: [
                    {text: 'Category',  value: 'category1'},
                    {text: 'Category', value: 'category2'},
                    {text: 'Category',  value: 'category3'}
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
                xtype: 'selectfield',
                label: 'show',
                labelWidth: '10',
                options: [
                    {text: '69',  value: 'show69'},
                    {text: '100', value: 'show100'},
                    {text: '200',  value: 'show200'}
                ]
            },
            {
               flex: 0.3,
               html : '/page',
               style: 'margin:8px 20px 0px 0px;'
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
