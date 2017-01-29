/*
	This panel hosts the following features
		1) If nothing is selected, show general File Stash(Size, last date updated, logs)
		2) If file is selected, file full title, autor, type and date uploaded
		3) If folder is selected, folder title, size, file number, date uploaded
*/
Ext.define('FileStash.view.InformationPanel', {
	extend : 'Ext.panel.Panel',
	requires : [
		'FileStash.controller.InformationPanelController'
	],
	xtype : 'infoPanel',
	title : 'Information Panel',
	width : 250, 
	layout : 'hbox',
	collapsible : true,
	border : 1,
	controller : 'informationPanelController',
	initComponent : function()
	{
		this.items = [
		]

		this.callParent(arguments);
	},
	listeners : {
		expand : 'onExpand',
		collapse : 'onCollapse'
	}
});