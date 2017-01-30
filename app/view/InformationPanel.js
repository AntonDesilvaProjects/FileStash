/*
	This panel hosts the following features
		1) If nothing is selected, show general File Stash(Size, last date updated, logs)
		2) If file is selected, file full title, author, type and date uploaded
		3) If folder is selected, folder title, size, file number, date uploaded
*/
Ext.define('FileStash.view.InformationPanel', {
	extend : 'Ext.panel.Panel',
	requires : [
		'FileStash.controller.InformationPanelController',
		'FileStash.view.widget.GeneralInfoPanel'
	],
	xtype : 'infoPanel',
	title : 'Information Panel',
	width : 300, 
	collapsible : true,
	border : 1,
	controller : 'informationPanelController',
	layout : 'card',
	initComponent : function()
	{
		this.items = [
			{
				xtype : 'generalInfoPanel',
				itemId : 'generalInfoPanel'
			}
		]

		this.callParent(arguments);
	},
	listeners : {
		expand : 'onExpand',
		collapse : 'onCollapse'
	}
});