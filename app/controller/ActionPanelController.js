Ext.define('FileStash.controller.ActionPanelController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.actionPanelController',
	init : function()
	{

	},
	onUploadBtnClick : function()
	{
		alert('upload btn clicked !');
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