Ext.define('FileStash.model.ContentInfoModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'firstName',
			type : 'string'
		},
		{
			name : 'lastName',
			type : 'string'
		},
		{
			name : 'fullName',
			type : 'string',
			convert : function( value, record )
			{
				return record.get('firstName') + ' ' + record.get('lastName');
			}
		},
		{
			name : 'logs',
			type : 'auto'
		},
		{
			name : 'fileStashSize',
			type : 'string',
			convert : function( value, record )
			{
				return value + " MB";
			}
		},
		{
			name : 'readableLastModified',
			type : 'string',
		}
	]
})