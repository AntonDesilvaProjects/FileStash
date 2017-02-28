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
		//Set appropriate parameters before load to get the correct data
		//this.infoStore.load();
		console.log( record );
		this.loadInfo( record );
	},
	onInfoStoreLoad : function(store, records, successful, eOpts )
	{
		console.log( records );
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
		if( record.get('isFolder') == true )
		{
			this.parentView.getLayout().setActiveItem('folderInfoPanel');
			this.parentView.getLayout().getActiveItem().loadRecord( record );
		}
		else if ( record.get('isFolder') == false )
		{
			this.parentView.getLayout().setActiveItem('fileInfoPanel');
			this.parentView.getLayout().getActiveItem().loadRecord( record );
		}
		else
		{
			//Load the data
			this.parentView.getLayout().getActiveItem().loadRecord( record );
			this.parentView.getLayout().getActiveItem().loadLogs( record.get('logs') );
		}
	}
});