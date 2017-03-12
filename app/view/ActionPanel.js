/*
	This panel hosts the functionality that is relevant to the system:
		1) Upload a new file
		2) See the status of the files being uploaded.
		3) See the existing file/folder categories
		4) See a 'classic' file browser 
*/
Ext.define('FileStash.view.ActionPanel', {
	extend : 'Ext.panel.Panel',
	requires : [
		'FileStash.controller.ActionPanelController'
	],
	title : 'Action Panel',
	xtype : 'actionPanel',
	width : 290,
	border : 1,
	controller : 'actionPanelController',
	layout : 'vbox',
	referenceHolder : true,
	initComponent : function()
	{

		this.selectFileBtn = Ext.widget('filefield', {
			buttonText : 'Select File...',
			buttonOnly : true,
			hideLabel : true,
			name : 'uploadItem',
			itemId : 'uploadItem',
			listeners : {
				change : 'onSelectFileBtnClick'
			}
			//handler : 'onUploadBtnClick',
			//margin : '5 5 5 0'
		});
		/*
			The uploadPanel is a 'form' which allows
			for POST request to server-side with the 
			chosen file from the 'selectFileBtn' file selection.
			This is easier than making a single Ajax call with
			file(because we can not easily access the chosen file
			data).
		*/
		this.uploadForm = Ext.widget('form', {
			reference : 'uploadForm',
			items : [
				this.selectFileBtn
			]
		});




		this.uploadFieldSet = Ext.widget('fieldset', {
			title : 'Upload Files',
			width : 270,
			collapsible : true,
			layout : {
				type : 'vbox',
				align : 'center'
			},
			items : [
				this.uploadForm
			]
		});


		this.items = [
			this.uploadFieldSet
		];
		this.callParent(arguments);
	},
	listeners : {
		expand : 'onExpand',
		collapse : 'onCollapse'
	},
	addFileUpload : function( fileName, xhrId, controller )
	{
		var scope = this;

		var progressBar = Ext.widget('progressbar', {
			text : fileName,
			name : 'pb' + fileName,
			width :'88%',
			border : 1,
			value : 0.0
		});

		/*Using Font-Awesome icons for the cancel button*/
		var btnCancel = Ext.widget('button', {
			margin : '0 0 0 10',
			padding : '0 0 3 0',
			height : 20,
			html : '<i class="fa fa-trash-o" aria-hidden="true"></i>',
			hidden : false,
			handler : function()
			{
				controller.cancelUpload( xhrId );
				scope.removeFileUploadPanel( xhrId );
			}
		});

		var fileUpload = Ext.widget('panel', {
			width : '100%',
			layout : 'hbox',
			margin : '5 0 5 0',
			fileUploadId : xhrId,
			items : [
				progressBar,
				btnCancel
			]
		});
		progressBar.updateText(fileName);
		this.uploadFieldSet.add(fileUpload);

		return progressBar;
	},
	removeFileUploadPanel : function( xhrId )
	{
		var items = this.uploadFieldSet.items.getRange();
	//	console.log(items);
		for( var i = 0; i < items.length; i++)
		{
			console.log(items[i]);
			if( items[i].fileUploadId == xhrId )
				this.uploadFieldSet.remove(items[i], true);
		}
	}
});

