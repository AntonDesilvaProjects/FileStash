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
	addFileUpload : function( fileName )
	{
		var progressBar = Ext.widget('progressbar', {
			text : fileName,
			width :'90%',
			value : 0.5
		});

		var btnCancel = Ext.widget('button', {
			text : 'X',
			margin : ' 0 0 0 5',
			height : '5',
			handler : function()
			{
				alert('sds');
			}
		});

		var fileUpload = Ext.widget('panel', {
			width : '100%',
			layout : 'hbox',
			margin : '5 0 5 0',
			items : [
				progressBar,
				btnCancel
			]
		});

		
		progressBar.updateText(fileName);
		this.uploadFieldSet.add(fileUpload);
	}
});

