Ext.define('PAC.view.main.MenuView', {
    extend: 'Ext.Sheet',
    xtype: 'menuview',
    controller: 'menuviewcontroller',
    layout: 'vbox',
    cls: 'menuview',
    items: [
        {
            xtype: 'container',
            cls: 'menubuttons',
            layout: {
                type: 'vbox',
                pack: 'end',
            },
            flex: 1,
            defaults: {
                xtype: 'button',
                ui: 'menubutton',
                handler: 'onMenuClick',
            },
            items: [
                { xtype: 'container', html: '&nbsp;', height: 20 },
                { text: 'Status', tag: 'statusView', height: 50 },
                { text: 'Control', tag: 'controlView', height: 50 },
                { text: 'Manual', tag: 'manualView', height: 50 },
                { xtype: 'container', html: '&nbsp;', height: 20 },
            ],
        },
    ],
});
