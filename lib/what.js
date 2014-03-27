var info = require('./functionInfo');

module.exports = function what() {
	var out = [];

	var args = Array.prototype.slice.call(arguments, 0);

	if (args[0] == null && args[1]) {
		out[0] = {
			value: null,
			type: 'Error'
		}
	}

	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		var type = typeof arg;

		if (i == 0 && out[i]) {
			//we've already determined the first element
			continue;
		}

		if (arg == null || type != 'object') {
			// null is an 'object' for some reason
			// if not null or object, then primitive type
		} else {
			// get the name of our object
			type = info(arg.constructor).name || 'object';
		}


		out[i] = {
			value: arg,
			type: type
		}
	}

	return out;
}