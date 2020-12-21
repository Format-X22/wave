Ext.define('PAC.view.control.AuthViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authviewcontroller',

    signIn: function(button) {
        const { username, password } = button.up('authView').getValues();

        if (!username || !password) {
            Ext.Msg.alert('Error', 'Invalid params');
            return;
        }

        // TODO -

        button.up('authView').hide();
        button
            .up('mainview')
            .down('#theToolbar')
            .show();
        button
            .up('mainview')
            .getController()
            .redirectTo('statusView', true);

        console.log(values);
    },
});
