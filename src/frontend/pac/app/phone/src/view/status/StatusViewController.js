Ext.define('PAC.view.control.StatusViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.statusviewcontroller',

    cancelTask: function(
        target,
        {
            record: {
                data: { _id },
            },
        }
    ) {
        Ext.Msg.confirm('Confirm', `Cancel task ${_id}?`, choice => {
            if (choice === 'yes') {
                // TODO -
                console.log(_id);
            }
        });
    },

    clearTask: function(
        target,
        {
            record: {
                data: { _id },
            },
        }
    ) {
        Ext.Msg.confirm('Confirm', `<span style="color: red">Clear</span> task ${_id}?`, choice => {
            if (choice === 'yes') {
                // TODO -
                console.log(_id);
            }
        });
    },

    refresh: function() {
        // TODO -
        console.log('REFRESH');
    },
});
