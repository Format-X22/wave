Ext.application({
    extend: 'PAC.Application',
    name: 'PAC',
});

Ext.override(Ext.MessageBox, {
    hideAnimation: null,
});
