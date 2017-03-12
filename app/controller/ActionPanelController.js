Ext.define('FileStash.controller.ActionPanelController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.actionPanelController',
	init : function()
	{
		this.parentView = this.getView();
		this.uploadForm = this.lookupReference('uploadForm');
		this.fileUploadList = [];
		
	},
	onSelectFileBtnClick : function( fileSelectInput, value, eOpts)
	{

		/*
			Idea: Create an array of progress bars. As soon as
			this function is called, add a new progress bar to 
			array. Pass in the name of that bar to a function such
			as(names should be generated in a unique manner):

			$(function( pbName) {

			    var bar = $('progressbar[name=pbName]');

			    $('form').ajaxForm({0
			        beforeSend: function() {
			            status.empty();
			            var percentVal = '0%';
			            bar.width(percentVal);
			            percent.html(percentVal);
			        },
			        uploadProgress: function(event, position, total, percentComplete) {
			            var percentVal = percentComplete + '%';
			            bar.width(percentVal);
			            percent.html(percentVal);
			        },
			        complete: function(xhr) {
			            status.html(xhr.responseText);
			        }
			    });
			}); 
		*/

		var uploadForm = $('input[name=uploadItem]')[0];
		var formData = new FormData();
		formData.append('uploadItem', uploadForm.files[0] );

		//console.log(uploadForm.files[0]);	

		var progressBar = this.parentView.addFileUpload(uploadForm.files[0].name, this.fileUploadList.length, this);
		var scope = this;
		$.ajax({
			xhr: function() {
   				var xhr = new window.XMLHttpRequest();
   				scope.fileUploadList.push(xhr);

   				xhr.upload.addEventListener("progress", function(evt) {
			    if (evt.lengthComputable) {
			        var percentComplete = evt.loaded / ( evt.total + evt.total * 0.1 ) ;
			        progressBar.updateProgress(percentComplete);
			        percentComplete = parseInt(percentComplete * 100);
			        //console.log(percentComplete);

			        if (percentComplete === 100) {
			        		progressBar.updateProgress(1);
			        }

			      }
			    }, false);

   				xhr.addEventListener("readystatechange", function( evt ) {
   					if (this.readyState == 4) { // If the HTTP request has completed 
   						 if (this.status == 200) { // If the HTTP response code is 200 (e.g. successful)
	    					var response = this.responseText; // Retrieve the response text   
	    					progressBar.updateProgress(1);  
   						 }
   						 else
   						 {
   						 	console.log("XHR Status: " + this.status);
   						 }	
 					}
   				});
			    return xhr;
			},
			url : 'http://localhost:3000/content/upload',
			data : formData,
			processData : false,
			contentType : false,
			type : 'POST',
			sucess : function( data ) //This doesn't get executed
			{
				//console.log('success');
				//console.log(data);
				alert("server finished processing!");
			},
			error : function( data )
			{
				//console.log('failure');
				console.log(data);
				//alert('failed!');
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
	cancelUpload( xhrId )
	{
		this.fileUploadList[ xhrId ].abort();
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