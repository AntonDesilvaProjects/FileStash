/*
*/
Ext.define('FileStash.view.widget.GridView', {
	extend : 'Ext.view.View',
	requires : [
		'FileStash.controller.widget.GridViewController'
	],
	id : 'images-view',
	xtype : 'gridView',
	controller : 'gridViewController',
	tpl : [
		'<tpl for=".">', 
		   '<div class="thumb-wrap">',
		   		'<div class="thumb">',
		   			'<img src="{image}" title="{name}">',
		   		'</div>',
		        '<span class="x-editable">{name}</span>',
		   '</div>',
        '</tpl>',
        '<div class="x-clear"></div>'
	],
	itemSelector :'div.thumb-wrap',
	store :  'FileStash.store.widget.ContentStore',
	emptyText : 'No files/folders uploaded',
	overItemCls : 'x-item-over',
	trackOver : true,
	multiSelect : true,
	border : 2,
	listeners : {
		select : 'onItemSelect',
		itemcontextmenu : 'onItemRightClick',
		itemclick : 'onItemClick',
		selectionchange : 'onSelectionChange',
		itemdblclick : 'onItemDoubleClick'
	},
	height : '96%',
	autoScroll : true,
	intiComponent : function()
	{
		this.callParent(arguments);
	}
});