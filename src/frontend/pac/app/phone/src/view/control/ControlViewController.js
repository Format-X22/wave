Ext.define('PAC.view.control.ControlViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.controlviewcontroller',

    confirmAction(button) {
        Ext.Msg.confirm('Confirm', `Action - <strong>${button.tag}</strong>`, choice => {
            if (choice === 'yes') {
                // TODO -
                console.log(button.tag);
            }
        });
    },
});
