Ext.define('FileStash.view.widget.FolderInfoPanel', {
	extend : 'Ext.form.Panel',
	xtype : 'folderInfoPanel',
	bodyPadding : 10,
	initComponent : function()
	{
		this.folderImage = Ext.widget('image', {
			name : 'image',
			src : '',
			width : 100,
			height : 100,
			margin : '0 0 0 100'
		});
		this.lblFolderName = Ext.widget('displayfield', {
			name : 'name',
			fieldLabel : 'Folder Name',
			value : ''
		});
		this.lbluploadDate = Ext.widget('displayfield', {
			name : 'readbleUploadTime',
			fieldLabel : 'Date Uploaded',
			value : ''
		});

		this.items = [
			this.folderImage,
			this.lblFolderName,
			this.lbluploadDate
		];

		this.callParent( arguments 	);
	},
	loadRecord : function( record )
	{
		this.folderImage.setSrc( record.get('image') );
		this.callParent(arguments);
	},																															
	loadLogs : function( data )
	{
		//this.logGrid.getStore().loadRawData( data );
	}
});