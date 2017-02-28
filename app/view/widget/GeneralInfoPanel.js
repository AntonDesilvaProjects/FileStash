Ext.define('FileStash.view.widget.GeneralInfoPanel', {
	extend : 'Ext.form.Panel',
	xtype : 'generalInfoPanel',
	bodyPadding : 10,
	initComponent : function()
	{
		this.lblUsername = Ext.widget('displayfield', {
			name : 'fullName',
			fieldLabel : 'User',
			//value : 'Anton Desilva'
		});
		this.lblSize = Ext.widget('displayfield', {
			name : 'fileStashSize',
			fieldLabel : 'Size',
			//value : '758 GB'
		});
		this.lblLastModified = Ext.widget('displayfield', {
			name : 'readableLastModified',
			fieldLabel : 'Last Modified',
			//value : 'Wed. 12 December, 2017 8:54 PM'
		});

		this.logStore = Ext.create('Ext.data.Store', {
			fields : [
				'contentName',
				'logAction',
				'readableLogTime'
			],
			proxy : {
				type : 'memory',
				reader : {
					type : 'json',
					rootProperty : ''
				}
			}
		});

		this.logGrid = Ext.widget( 'grid', {
			name : 'logs',
			store : this.logStore,
			columns : [
				{
					text : '',
					flex : 1,
					dataIndex : 'logAction'
				},
				{
					text : 'Item',
					flex : 2,
					dataIndex : 'contentName'
				},
				{
					text : 'Date/Time',
					flex : 2,
					dataIndex : 'readableLogTime'
				}
			],
			padding : '10 0 0 0'
		});

		this.items = [
			this.lblUsername,
			this.lblSize,
			this.lblLastModified,
			this.logGrid
		];

		this.callParent( arguments );
	},
	loadLogs : function( data )
	{
		this.logGrid.getStore().loadRawData( data );
	}
});