/*
	This panel hosts context sensitive features for current view
		1. Sorting for the current content view
		2. Folder traversal
*/
Ext.define('FileStash.view.ContextBarPanel', {
	extend : 'Ext.panel.Panel',
	xtype : 'contextBarPanel',
	requires : [
		'FileStash.controller.ContextBarController'
	], 
	//title : 'Context Bar Panel',
	height : 35, 
	layout : {
		type: 'hbox',
		pack : 'end'
	},
	border : 1,
	controller : 'contextBarController',
	initComponent : function()
	{

		this.contextOn = false;

		this.btnViewMode = Ext.widget('button', {
			text : 'list/grid',
			handler : 'onClick'
		});
		this.btnSort = Ext.widget('button', {
			text : 'sort'
		});

		this.btnDelete = Ext.widget('button', {
			text : 'delete',
			hidden : true
		});
		this.btnInfo = Ext.widget('button', {
			text : 'info',
			hidden : true
		});
		this.btnDownload = Ext.widget('button', {
			text : 'download',
			hidden : true
		});
		this.btnEmail = Ext.widget('button', {
			text : 'email',
			hidden : true
		});
		this.btnOpen = Ext.widget('button', {
			text : 'open',
			hidden : true
		});
	
		this.items = [
				this.btnOpen,
				this.btnDownload,
				this.btnInfo,
				this.btnDelete,
				this.btnEmail,
				this.btnSort,
				this.btnViewMode
		];
		this.callParent(arguments);
	},
	updateContextButtons : function( selectedItems )
	{
		if( selectedItems.length == 0)
		{
			this.hideContextButtons();
			return;
		}
		else if( selectedItems.length == 1 && selectedItems[0].get('isFolder'))
		{
			this.btnOpen.setVisible(true);
		}
		else
		{
			this.btnOpen.setVisible(false);
		}
		this.btnDownload.setVisible(true);
		this.btnInfo.setVisible(true);
		this.btnDelete.setVisible(true);
		this.btnEmail.setVisible(true);
	},
	hideContextButtons : function()
	{
		this.btnOpen.setVisible(false);
		this.btnDownload.setVisible(false);
		this.btnInfo.setVisible(false);
		this.btnDelete.setVisible(false);
		this.btnEmail.setVisible(false);
	},
	addItems : function( itemArray )
	{
		this.removeAll(false);
		this.add( itemArray );
	},
	enableItems : function( itemArray, bool )
	{
		for( var i = 0; i < itemArray.length; i++)
			itemArray[i].setVisible(bool);

	}
});