Ext.define('PAC.view.status.StatusView', {
    extend: 'Ext.container.Container',
    requires: ['Ext.grid.Grid', 'Ext.grid.plugin.RowExpander'],
    xtype: 'statusView',
    controller: 'statusviewcontroller',
    layout: 'vbox',

    items: [
        {
            xtype: 'grid',
            flex: 1,
            plugins: {
                rowexpander: true,
            },
            itemConfig: {
                body: {
                    tpl:
                        '<div style="margin-top: 5px"><strong>Description</strong>: {description}</div>' +
                        '<div style="margin-top: 5px"><strong>Last error</strong>: {lastError}</div>',
                },
            },
            columns: [
                {
                    text: 'ID',
                    dataIndex: '_id',
                    width: 70,
                },
                {
                    text: 'Status',
                    dataIndex: 'status',
                    flex: 1,
                    cell: {
                        encodeHtml: false,
                    },
                    renderer: function(value) {
                        const icons = [];

                        switch (value) {
                            case 'INITIAL':
                                icons.push(['rocket', 'black']);
                                break;

                            case 'WAIT':
                                icons.push(['clock', 'rgb(185, 0, 255)']);
                                break;

                            case 'IN_PROCESS':
                                icons.push(['chart-line', 'blue']);
                                break;

                            case 'TAKE':
                                icons.push(['check-circle', 'green']);
                                break;

                            case 'LOSS':
                                icons.push(['window-close', 'rgb(255, 18, 143)']);
                                break;

                            case 'ZERO':
                                icons.push(['map-signs', 'orange']);
                                break;

                            case 'ERROR':
                                icons.push(['exclamation-circle', 'red']);
                                break;

                            case 'IN_CANCEL':
                                icons.push(['times', 'black']);
                                icons.push(['hourglass-half', 'gray']);
                                break;

                            case 'CANCELED':
                                icons.push(['times', 'black']);
                                break;

                            case 'IN_CLEAR':
                                icons.push(['skull-crossbones', 'black']);
                                icons.push(['hourglass-half', 'gray']);
                                break;

                            case 'CLEARED':
                                icons.push(['skull-crossbones', 'black']);
                                break;
                        }

                        return icons
                            .map(
                                ([icon, color]) =>
                                    `<span class="x-fa fa-${icon}" style="margin-right: 5px; color: ${color};"></span>`
                            )
                            .join(' ')
                            .concat(value);
                    },
                },
                {
                    width: 70,
                    cell: {
                        tools: {
                            clear: {
                                iconCls: 'x-fa fa-skull-crossbones',
                                width: 50,
                                handler: 'clearTask',
                            },
                        },
                    },
                },
                {
                    width: 70,
                    cell: {
                        tools: {
                            cancel: {
                                iconCls: 'x-fa fa-times',
                                width: 50,
                                handler: 'cancelTask',
                            },
                        },
                    },
                },
            ],
            data: [
                {
                    _id: 300,
                    status: 'INITIAL',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 301,
                    status: 'WAIT',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 302,
                    status: 'IN_PROCESS',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 303,
                    status: 'TAKE',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 309,
                    status: 'LOSS',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 310,
                    status: 'ZERO',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 304,
                    status: 'ERROR',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 305,
                    status: 'IN_CANCEL',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 306,
                    status: 'CANCELED',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 307,
                    status: 'IN_CLEAR',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 308,
                    status: 'CLEARED',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 311,
                    status: 'CLEARED',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
                {
                    _id: 312,
                    status: 'CLEARED',
                    description: 'Test long text 100500 some test 100500 fifty 500 test 22 text',
                    lastError: 'Error Test long text 100500 some test 100500 fifty 500 test',
                },
            ],
        },
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-sync',
                    iconAlign: 'left',
                    text: 'Sync',
                    handler: 'refresh',
                },
                '->',
                {
                    xtype: 'button',
                    iconCls: 'x-fa fa-sync',
                    iconAlign: 'right',
                    text: 'Sync',
                    handler: 'refresh',
                },
            ],
        },
    ],
});
