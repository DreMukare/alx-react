const { fromJS } = require('immutable');

const getImmutableObject = (object) => fromJS(object);

module.exports = getImmutableObject;
