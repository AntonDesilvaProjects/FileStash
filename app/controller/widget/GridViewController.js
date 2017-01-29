Ext.define('FileStash.controller.widget.GridViewController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.gridViewController',
	init : function()
	{
		this.parentContainer = this.getView().up('panel');
	},
	onItemSelect : function( grid, record, options)
	{
		//alert(record.get('caption'));
	},
	onItemRightClick : function( grid, record, item, index, e, options)
	{
		var position = e.getXY();
		e.stopEvent();
		/*var menu = new Ext.menu.Menu({
	        items: 
	        [
	            { text: 'Add', handler: function() {console.log("Add");} },
	            { text: 'Delete', handler: function() {console.log("Delete");} }
	        ]
  		  });
		menu.showAt(position);*/
		console.log(e);
		//alert('[right click]-' + record.get('caption'));
	},
	onItemClick : function( grid, record, item, index, e, options)
	{
		//if( e.parentEvent.button != 2)
		//alert('[Left Click] ' + record.get('caption'));
		//this.fireEvent('updateContext', record, grid.getSelectionModel().getSelection().length );
	},
	onSelectionChange : function( grid, selectedItems , options )
	{
		this.fireEvent('updateContext', selectedItems );
	},
	onItemDoubleClick : function( grid, record, item, index, e, options)
	{
		this.getView().getStore().loadInnerContent();
		this.parentContainer.traverse(record.get('name'));
	}
});