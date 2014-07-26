Ext.define('book.view.RightCategoryTitle', {
    extend: 'Ext.Panel',
    xtype: 'rightcategorytitle',
    requires: [],
    config: { 
        layout:'vbox',
        cls: 'right_cat_title',
        items: [
            {
             
                html: 'Category <span class="h-line"></span>',
            }
        ]
    }
});
