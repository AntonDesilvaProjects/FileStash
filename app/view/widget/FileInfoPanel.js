Ext.define('FileStash.view.widget.FileInfoPanel', {
	extend : 'Ext.form.Panel',
	xtype : 'fileInfoPanel',
	bodyPadding : 10,
	initComponent : function()
	{
		this.fileImage = Ext.widget('image', {
			name : 'image',
			src : '',
			width : 100,
			height : 100,
			margin : '0 0 0 100'
		});
		this.lblFileName = Ext.widget('displayfield', {
			name : 'name',
			fieldLabel : 'File Name',
			value : 'Fantastic Beasts and Where to Find Them'
		});
		this.lblfileAuthor = Ext.widget('displayfield', {
			name : 'author',
			fieldLabel : 'Author',
			value : 'Anton Desilva'
		});
		this.lblFileType = Ext.widget('displayfield', {
			name : 'type',
			fieldLabel : 'File Type',
			value : 'Microsoft Word 2015'
		});
		this.lbluploadDate = Ext.widget('displayfield', {
			name : 'readbleUploadTime',
			fieldLabel : 'Date Uploaded',
			value : '12/25/2016 10:23 am'
		});

		this.items = [
			this.fileImage,
			this.lblFileName,
			this.lblfileAuthor,
			this.lbluploadDate,
			this.lblFileType
		];

		this.callParent( arguments 	);
	},
	loadRecord : function( record )
	{
		this.fileImage.setSrc( record.get('image') );
		this.callParent(arguments);
	},	
	loadLogs : function( data )
	{
		//this.logGrid.getStore().loadRawData( data );
	}
});