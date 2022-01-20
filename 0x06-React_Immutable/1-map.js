const { Map } = require('immutable');

const getImmutableObject = (object) => Map(object);

module.exports = getImmutableObject;
