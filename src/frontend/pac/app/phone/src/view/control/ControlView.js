Ext.define('PAC.view.control.ControlView', {
    extend: 'Ext.container.Container',
    xtype: 'controlView',
    controller: 'controlviewcontroller',
    layout: {
        type: 'vbox',
        pack: 'center',
    },
    defaults: {
        height: 70,
        listeners: {
            tap: 'confirmAction',
        },
    },
    items: [
        {
            xtype: 'button',
            text: 'Sign Out',
            tag: 'signOut',
        },
        {
            xtype: 'button',
            text: 'Reboot',
            tag: 'reboot',
            ui: 'decline',
        },
    ],
});
