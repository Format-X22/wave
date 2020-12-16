Ext.define('PAC.view.control.ManualViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.manualviewcontroller',

    confirmStart(button) {
        const values = button.up('manualView').getValues();

        if (!values.start || !values.after10 || !values.capital) {
            Ext.Msg.alert('Error', 'Invalid params');
            return;
        }

        const messageLines = [
            'Params:',
            '',
            'Start line at ' + values.start,
            'After 10 candles line is ' + values.after10,
            'After 20 candles line is ' + 'TODO', // TODO -
            'Capital is ' + values.capital,
            '',
            'All ok?'
        ];

        Ext.Msg.confirm('Confirm', messageLines.join('<br>'), choice => {
            if (choice !== 'yes') {
                return;
            }

            // TODO -
        });
    },
});
