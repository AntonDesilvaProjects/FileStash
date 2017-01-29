Ext.define('FileStash.controller.ContextBarController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.contextBarController',
	init : function()
	{

	},
	listen : {
		controller : {
			'*' : {
				updateContext : 'onContextChange'
			}
		}
	},
	onContextChange : function( selectedItems )
	{
		this.getView().updateContextButtons( selectedItems );
	}
});