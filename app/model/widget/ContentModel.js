Ext.define('FileStash.model.widget.ContentModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'id',
			type : 'int'
		},
		{
			name : 'isFolder',
			type : 'boolean'
		},
		{
			name : 'name',
			type : 'string'
		},
		{
			name : 'image',
			type : 'string'
		}
	]
});