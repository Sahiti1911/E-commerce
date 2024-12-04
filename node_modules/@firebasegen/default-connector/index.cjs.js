const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'E-commerce',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

