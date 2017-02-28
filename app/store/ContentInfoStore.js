Ext.define('FileStash.store.ContentInfoStore', {
	extend : 'Ext.data.Store',
	requires : [
		'FileStash.model.ContentInfoModel'
	],
	autoLoad : true,
	model : 'FileStash.model.ContentInfoModel',
	/*proxy : {
		type : 'memory',
		reader : {
			type : 'json'
		}
	},
	data : [
		{ 'username' : 'peprika de silva', 'size' : '235 GB', 'lastModified' : '12/24/16' }
	]*/
	proxy : {
		type : 'ajax',
		method : 'GET',
		//By default call the service to get the general FileStash info
		url : 'http://localhost:3000/content/general?userId=4&from=-1&to=-1&pageSize=10&page=0', 
		reader : {
			type : 'json',
			rootProperty : ''
		}
	}
});
	