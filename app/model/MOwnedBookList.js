Ext.define('book.model.MOwnedBookList', {
	extend: 'Ext.data.Model',

	config: {
		fields: ['book_id', 'book_title', 'author_name', 'category_name', 'url']
	}

});

