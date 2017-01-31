Ext.define('FileStash.controller.InformationPanelController', {
	extend : 'Ext.app.ViewController',
	requires : [
		'FileStash.store.ContentInfoStore'
	],
	alias : 'controller.informationPanelController',
	init : function()
	{
		this.parentView = this.getView();
		this.infoStore = Ext.create('FileStash.store.ContentInfoStore');
		this.infoStore.on('load', this.onInfoStoreLoad, this);
	},
	listen : {
		controller : {
			'*' : {
				itemClick : 'onItemClick'
			}
		}
	},
	onItemClick : function(grid, record, item, index, e, options)
	{
		//Set appropirate parameters before load to get the correct data
		this.infoStore.load();
	},
	onInfoStoreLoad : function(store, records, successful, eOpts )
	{
		this.loadInfo(store.getAt(0));
	},
	onCollapse : function()
	{
		this.fireEvent('panelResize', 'collapse');
	},
	onExpand : function()
	{
		this.fireEvent('panelResize', 'expand');
	},
	loadInfo : function( record )
	{
		//Select the appropriate View based on the record sent by server
		this.parentView.getLayout().setActiveItem('folderInfoPanel');
		//Load the data
		this.parentView.getLayout().getActiveItem().loadRecord( record );
	}
});