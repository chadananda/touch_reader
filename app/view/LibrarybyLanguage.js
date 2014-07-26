Ext.define('book.view.LibrarybyLanguage', {
    extend: 'Ext.Panel',
    xtype: 'librarybylanguage',
    requires: [],
    config: { 
        layout:'hbox',
        cls: 'sel_lib_language',
       // flex: 0.2,
        items: [
            {
                xtype: 'spacer'
            },
            {
                cls: 'select_backgnd',
                flex: 1,
                xtype: 'selectfield',
                label: 'Select your Library by Language',
                labelWidth: '55%',
                options: [
                    {text: 'English',  value: 'english'},
                    {text: 'Franch', value: 'franch'},
                    {text: 'Spanish',  value: 'spanish'}
                ]
            }
        ]
    }
});
