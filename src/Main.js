const core = require('json-rpc-service');
const BasicMain = core.services.BasicMain;
const env = require('./data/env');
const Connector = require('./services/Connector');
const WebServer = require('./services/WebServer');

class Main extends BasicMain {
    constructor() {
        super(env);

        const connector = new Connector();
        const webServer = new WebServer({ connector });

        this.startMongoBeforeBoot();
        this.addNested(connector, webServer);
    }
}

module.exports = Main;
