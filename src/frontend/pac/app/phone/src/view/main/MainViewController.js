Ext.define('PAC.view.main.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewcontroller',

    init: function() {
        this.initialMenuToggle = true;
        this.redirectTo('statusView', true);
    },

    onMenuClick: function(button) {
        Ext.Viewport.toggleMenu('left');
        Ext.getCmp('theToolbar').setTitle(button.getText());
        this.redirectTo(button.tag);
    },

    routes: {
        ':xtype': { action: 'mainRoute' },
    },

    mainRoute: function(xtype) {
        const exists = Ext.ClassManager.getByAlias('widget.' + xtype);

        if (exists === undefined) {
            console.log(xtype + ' does not exist');
            return;
        }

        const centerview = Ext.getCmp('mainview');

        if (!centerview.getComponent(xtype)) {
            centerview.add({ xtype: xtype });
        }
        centerview.setActiveItem(xtype);

        if (this.initialMenuToggle) {
            this.initialMenuToggle = false;
        } else {
            Ext.Viewport.toggleMenu('bottom');
        }
    },
});
