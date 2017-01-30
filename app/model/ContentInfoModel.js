Ext.define('FileStash.model.ContentInfoModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'username',
			type : 'string'
		},
		{
			name : 'size',
			type : 'string'
		},
		{
			name : 'lastModified',
			type : 'string'
		}
	]
})