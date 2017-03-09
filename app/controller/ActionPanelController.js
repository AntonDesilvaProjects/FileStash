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

		var uploadForm = $('#filefield-1025-button-fileInputEl')[0];
		var formData = new FormData();
		formData.append('uploadItem', uploadForm.files[0] );

		$.ajax({
			xhr: function() {
   				 var xhr = new window.XMLHttpRequest();

   				 xhr.upload.addEventListener("progress", function(evt) {
			      if (evt.lengthComputable) {
			        var percentComplete = evt.loaded / evt.total;
			        percentComplete = parseInt(percentComplete * 100);
			        console.log(percentComplete);

			        if (percentComplete === 100) {
			        		alert('file uploaded !');
			        }

			      }
			    }, false);

			    return xhr;
			 },
			url : 'http://localhost:3000/content/upload',
			data : formData,
			processData : false,
			contentType : false,
			type : 'POST',
			sucess : function( data )
			{
				console.log('success');
				console.log(data);
			},
			error : function( data )
			{
				console.log('failure');
				console.log(data);
			}
		});

		//alert('in here');
		//this.parentView.addFileUpload('C://File');
		//Call the form submit method here
		/*this.uploadForm.getForm().submit({
			url : ,
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
		});*/
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