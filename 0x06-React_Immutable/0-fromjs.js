const { fromJs, isKeyed } = require('immutable');

const getImmutableObject = (object) => {
	return fromJs(object, (value) =>
		isKeyed(value) ? value.toOrderedMap() : value.toList()
	);
};

export default getImmutableObject;
