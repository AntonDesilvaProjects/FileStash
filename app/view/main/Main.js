/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FileStash.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'FileStash.view.main.MainController',
        'FileStash.view.main.MainModel',
        'FileStash.view.SearchPanel',
        'FileStash.view.ActionPanel',
        'FileStash.view.ContentPanel',
        'FileStash.view.InformationPanel',
        'FileStash.view.ContextBarPanel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype : 'searchPanel',
            region : 'north'
        },
        {
            xtype : 'contextBarPanel',
            region : 'north'
        },
        {
            xtype : 'contentPanel',
            region : 'center'
        },
        {
            xtype : 'actionPanel',
            region : 'west',
            collapsible : true,
            autoScroll : true
        },
        {
            xtype : 'infoPanel',
            region : 'east'
        }
    ]
});
