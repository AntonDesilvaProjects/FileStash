Ext.define('FileStash.store.widget.ContentStore', {
	extend : 'Ext.data.ArrayStore',
	model : 'FileStash.model.widget.ContentModel',
	autoLoad : true,
	proxy : {
		type : 'ajax',
		method : 'GET',
		url : 'http://localhost:3000/content/directory/16',
		reader : {
			type : 'json',
			//root : ''
		}
	},
	/*proxy : {
		type : 'memory',
		reader : {
			type : 'json'
		}
	},
	data : [
		{ 'id' : 0 , 'isFolder' : false , "name" : "Data Structures and Algorithms", "image" : "http://www.visual-integrity.com/wp-content/uploads/2016/02/pdf-page.png"},
		{ 'id' : 1 , 'isFolder' : true , 'name' : 'Cancer Research', 'image' : 'http://www.graphicsfuel.com/wp-content/uploads/2012/03/folder-icon-512x512.png'},
		{ 'id' : 2 , 'isFolder' : true , 'name' : 'bin', 'image' : 'http://www.graphicsfuel.com/wp-content/uploads/2012/03/folder-icon-512x512.png'},
		{ 'id' : 3 , 'isFolder' : false , 'name' : 'Studies of the Unknown', 'image' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png'},
		{ 'id' : 4 , 'isFolder' : false , 'name' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png/http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png', 'image' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png'}
	],*/
	loadInnerContent : function()
	{
		this.removeAll();
		this.loadData([
			{ 'id' : 0 , 'isFolder' : false , "name" : "Biology of Cancer", "image" : "http://www.visual-integrity.com/wp-content/uploads/2016/02/pdf-page.png"},
			{ 'id' : 1 , 'isFolder' : true , 'name' : 'Immunology', 'image' : 'http://www.graphicsfuel.com/wp-content/uploads/2012/03/folder-icon-512x512.png'},
			{ 'id' : 2 , 'isFolder' : false , 'name' : 'Leukemia', 'image' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png'},
			{ 'id' : 3 , 'isFolder' : false , 'name' : 'Hypoxia based treatment', 'image' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png'},
			{ 'id' : 4 , 'isFolder' : false , 'name' : 'p53 - The Guardian Angel', 'image' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png'},
			{ 'id' : 5 , 'isFolder' : false , 'name' : 'BRACA-1/BRACA-2 Genes', 'image' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png'},
			{ 'id' : 6 , 'isFolder' : false , 'name' : 'Olive Oil as treatment for concer ?	', 'image' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png'},
			{ 'id' : 7 , 'isFolder' : false , 'name' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png', 'image' : 'http://www.reviversoft.com/blog/wp-content/uploads/2013/05/compatibility_word_icon.png'}
		]);
	}
});