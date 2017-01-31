Ext.define('FileStash.view.widget.FileInfoPanel', {
	extend : 'Ext.form.Panel',
	xtype : 'fileInfoPanel',
	bodyPadding : 10,
	initComponent : function()
	{
		this.fileImage = Ext.widget('image', {
			src : 'http://www.bstlbd-ict.com/admin/asset/download_software_icon/BSTLIJLZ1460.jpg',
			width : 100,
			height : 100,
			margin : '0 0 0 100'
		});
		this.lblFileName = Ext.widget('displayfield', {
			name : 'fileName',
			fieldLabel : 'File Name',
			value : 'Fantastic Beasts and Where to Find Them'
		});
		this.lblfileAuthor = Ext.widget('displayfield', {
			name : 'fileAuthor',
			fieldLabel : 'Author',
			value : 'Anton Desilva'
		});
		this.lblFileType = Ext.widget('displayfield', {
			name : 'fileType',
			fieldLabel : 'File Type',
			value : 'Microsoft Word 2015'
		});
		this.lbluploadDate = Ext.widget('displayfield', {
			name : 'uploadDate',
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
	}
});