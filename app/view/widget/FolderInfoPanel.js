Ext.define('FileStash.view.widget.FolderInfoPanel', {
	extend : 'Ext.form.Panel',
	xtype : 'folderInfoPanel',
	bodyPadding : 10,
	initComponent : function()
	{
		this.folderImage = Ext.widget('image', {
			src : 'http://www.bstlbd-ict.com/admin/asset/download_software_icon/BSTLIJLZ1460.jpg',
			width : 100,
			height : 100,
			margin : '0 0 0 100'
		});
		this.lblFolderName = Ext.widget('displayfield', {
			name : 'folderName',
			fieldLabel : 'Folder Name',
			value : 'Fantastic Beasts and Where to Find Them'
		});
		this.lbluploadDate = Ext.widget('displayfield', {
			name : 'uploadDate',
			fieldLabel : 'Date Uploaded',
			value : '12/25/2016 10:23 am'
		});

		this.items = [
			this.folderImage,
			this.lblFolderName,
			this.lbluploadDate
		];

		this.callParent( arguments 	);
	}
});