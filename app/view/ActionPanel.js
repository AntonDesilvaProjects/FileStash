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
	initComponent : function()
	{

		this.uploadBtn = Ext.widget('button', {
			text : 'Upload',
			handler : 'onUploadBtnClick',
		});
		this.uploadFieldSet = Ext.widget('fieldset', {
			title : 'Upload Files',
			width : '100%',
			collapsible : true,
			layout : 'vbox',
			items : [
				this.uploadBtn,
				{
					xtype : 'label',
					text : 'In Progress'
				}
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
	//create
});

