Ext.define('FileStash.controller.ContentPanelController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.contentPanelController',
	init : function()
	{

	},
	listen : {
		controller : {
			'*' : {
				panelResize : 'onPanelResize'
			}
		}
	},
	onPanelResize : function( type )
	{
		//alert('panel resized: ' + this.getView().getWidth() );
		this.getView().redrawNavigation();
	}
});