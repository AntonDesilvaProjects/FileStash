/*
	This panel hosts both the Search bar and current user information.
*/
Ext.define('FileStash.view.SearchPanel', {
	extend : 'Ext.panel.Panel',
	xtype : 'searchPanel',
	height : 100, 
	layout : 'hbox',
	initComponent : function()
	{
		this.items = [
			{
				xtype : 'image',
				src : 'https://blog.seibert-media.com/wp-content/uploads/2015/12/Stash-Artikelbild.png',
				width : 100,
				height : 100
			},
			{
				xtype : 'textarea',
				height : 10,
				width : 500,
				margin : '20 20 20 0'
			},
			{
				xtype : 'button',
				text : 'Search',
				margin : '20 10 0 0'
			}
		]

		this.callParent(arguments);
	}
});