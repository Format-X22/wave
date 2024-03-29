Ext.define('PAC.Application', {
    extend: 'Ext.app.Application',
    name: 'PAC',
    requires: [
        'PAC.*',
        'Ext.dataview.List',
        'Ext.field.Date',
        'Ext.Video',
        'Ext.carousel.Carousel',
        'Ext.data.TreeStore',
        'Ext.layout.Center',
    ],
    defaultToken: 'statusview',

    launch: function() {
        Ext.getBody().removeCls('launching');

        const elem = document.getElementById('splash');

        elem.parentNode.removeChild(elem);

        Ext.Viewport.add([{ xtype: 'mainview' }]);
    },

    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?', function(
            choice
        ) {
            if (choice === 'yes') {
                window.location.reload();
            }
        });
    },
});
