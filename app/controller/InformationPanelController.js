Ext.define('FileStash.controller.InformationPanelController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.informationPanelController',
	init : function()
	{

	},
	onCollapse : function()
	{
		this.fireEvent('panelResize', 'collapse');
	},
	onExpand : function()
	{
		this.fireEvent('panelResize', 'expand');
	}
});