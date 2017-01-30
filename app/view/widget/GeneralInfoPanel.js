Ext.define('FileStash.view.widget.GeneralInfoPanel', {
	extend : 'Ext.form.Panel',
	xtype : 'generalInfoPanel',
	bodyPadding : 10,
	initComponent : function()
	{
		this.lblUsername = Ext.widget('displayfield', {
			name : 'username',
			fieldLabel : 'User',
			value : 'Anton Desilva'
		});
		this.lblSize = Ext.widget('displayfield', {
			name : 'size',
			fieldLabel : 'Size',
			value : '758 GB'
		});
		this.lblLastModified = Ext.widget('displayfield', {
			name : 'lastModified',
			fieldLabel : 'Last Modified',
			value : 'Wed. 12 December, 2017 8:54 PM'
		});

		this.logGrid = Ext.widget( 'grid', {
			store : null,
			columns : [
				{
					text : '',
					flex : 1
				},
				{
					text : 'Item',
					flex : 2
				},
				{
					text : 'Date/Time',
					flex : 2
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
	}
});