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
	width : 250,
	border : 1,
	controller : 'actionPanelController',
	intiComponent : function()
	{
		this.items = [
			{
				xtype : 'textfield',
				height : 10,
				width : 100,
				margin : '20 30 0 0'
			}
		]
		this.callParent(arguments);
	},
	listeners : {
		expand : 'onExpand',
		collapse : 'onCollapse'
	}
});

