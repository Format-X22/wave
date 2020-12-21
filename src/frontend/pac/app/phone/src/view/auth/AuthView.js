Ext.define('PAC.view.control.AuthView', {
    extend: 'Ext.form.Panel',
    xtype: 'authView',
    controller: 'authviewcontroller',
    layout: {
        type: 'vbox',
        pack: 'center',
    },
    padding: 20,

    items: [
        {
            xtype: 'textfield',
            label: 'Name',
            name: 'username',
        },
        {
            xtype: 'passwordfield',
            label: 'Password',
            name: 'password',
        },
        {
            xtype: 'button',
            text: 'Sign In',
            handler: 'signIn',
            height: 50,
        },
    ],
});
