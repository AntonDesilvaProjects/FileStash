Ext.define('FileStash.controller.ActionPanelController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.actionPanelController',
	init : function()
	{
		this.parentView = this.getView();
		this.uploadForm = this.lookupReference('uploadForm');
	},
	onSelectFileBtnClick : function( fileSelectInput, value, eOpts)
	{
		//alert('in here');
		//this.parentView.addFileUpload('C://File');
		//Call the form submit method here
		this.uploadForm.getForm().submit({
			url : 'http://localhost:3000/content/upload',
			failure : function(form, response)
			{
				alert('failure');
				console.log(form);
				console.log(response);
			},
			success : function(form, response)
			{
				alert('sucess');
			}
		});
		//Attach a callback, once successful, add progress bar
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