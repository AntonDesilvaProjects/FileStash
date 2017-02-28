Ext.define('FileStash.model.widget.ContentModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'id',
			type : 'int'
		},
		{
			name : 'isFolder',
			mapping : 'type',
			type : 'boolean',
			convert : function( value, record )
			{
				return value == 'Folder' ? true : false;
			}
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