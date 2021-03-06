/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('FileStash.Application', {
    extend: 'Ext.app.Application',
    
    name: 'FileStash',

    stores: [
        'FileStash.store.widget.ContentStore',
        'FileStash.store.ContentInfoStore'
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
