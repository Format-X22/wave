const core = require('json-rpc-service');
const BasicConnector = core.services.Connector;
const apiTypes = require('../api/@types');

class Connector extends BasicConnector {
    middlewareMode = true;

    constructor() {
        super();

        const linking = { connector: this };

        // TODO -
    }

    async start() {
        await super.start({
            serverRoutes: {
                // TODO -
            },
            serverDefaults: {
                validationTypes: {
                    ...apiTypes(),
                },
            },
        });
    }
}

module.exports = Connector;
