Ext.define('FileStash.controller.ActionPanelController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.actionPanelController',
	init : function()
	{

	},
	onCollapse : function()
	{
		this.fireEvent('panelResize', 'collapse' );
	},
	onExpand : function()
	{
		this.fireEvent('panelResize', 'expand' );
	}	
});