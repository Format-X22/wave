Ext.define('PAC.view.manual.ManualView', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.field.Number', 'Ext.field.Display'],
    xtype: 'manualView',
    controller: 'manualviewcontroller',

    layout: 'vbox',
    padding: 20,
    items: [
        {
            xtype: 'numberfield',
            label: 'Start',
            name: 'start',
        },
        {
            xtype: 'numberfield',
            label: 'After 10',
            name: 'after10',
        },
        {
            xtype: 'displayfield',
            label: 'After 20',
            value: 0,
        },
        {
            xtype: 'numberfield',
            label: 'Capital',
            name: 'capital',
        },
        {
            xtype: 'container',
            html: '&nbsp;',
            flex: 1,
        },
        {
            xtype: 'button',
            text: 'Start',
            handler: 'confirmStart',
            height: 50,
        },
        {
            xtype: 'container',
            html: '&nbsp;',
            flex: 1,
        },
    ],
});
