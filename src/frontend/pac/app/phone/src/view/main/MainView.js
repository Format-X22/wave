Ext.define('PAC.view.main.MainView', {
    extend: 'Ext.Container',
    xtype: 'mainview',
    id: 'mainview',
    reference: 'mainview',
    controller: 'mainviewcontroller',
    viewModel: { type: 'mainviewmodel' },
    initialize: function() {
        Ext.Viewport.setMenu(
            { xtype: 'menuview' },
            {
                side: 'bottom',
                reveal: true,
            }
        );
    },
    config: {
        layout: {
            type: 'card',
        },
        items: [
            {
                id: 'theToolbar',
                xtype: 'toolbar',
                cls: 'maintoolbar',
                reference: 'toolbar',
                docked: 'bottom',
                title: 'Status',
                ui: 'plain',
                items: [
                    {
                        ui: 'plain',
                        iconCls: 'x-fa fa-bars',
                        margin: '0 0 0 0',
                        handler: function() {
                            Ext.Viewport.toggleMenu('bottom');
                        },
                    },
                    '->',
                    {
                        ui: 'plain',
                        iconCls: 'x-fa fa-bars',
                        margin: '0 0 0 0',
                        handler: function() {
                            Ext.Viewport.toggleMenu('bottom');
                        },
                    },
                ],
            },
        ],
    },
});
