Ext.define('FileStash.store.ContentInfoStore', {
	extend : 'Ext.data.Store',
	requires : [
		'FileStash.model.ContentInfoModel'
	],
	model : 'FileStash.model.ContentInfoModel',
	proxy : {
		type : 'memory',
		reader : {
			type : 'json'
		}
	},
	data : [
		{ 'username' : 'peprika de silva', 'size' : '235 GB', 'lastModified' : '12/24/16' }
	]
	/*
		proxy : {
		type : 'json',
		method : 'GET',
		url : '', //By default call the service to get the general FileStash info
		reader : {
			type : 'json',
			root : ''
		}
	*/
});