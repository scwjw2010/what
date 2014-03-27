var util = require('util');

var what = require('./what'),
	info = require('./functionInfo');

module.exports = function determineWhat() {
	var args = what.apply(this, arguments);

	var out = [
		'callback(',
	];
	args.forEach(function(arg) {
		var value;
		var type;

		{
			value = util.format(arg.value);
			var maxLength = 15;
			if (value.length >= maxLength) {
				value = value.substr(0, maxLength) + '\u2026';
			}
		}

		{
			if (arg.type == 'Error' && arg.value == null) {
				type = arg.type + ' (guessed)';
			} else {
				if (arg.value == null || arg.value == undefined) {
					type = '?';
				} else {
					type = arg.type;
				}
			}
		}

		out.push(util.format('  %s => %s', value, type));
	});

	out.push(');');

	log(out.join('\n'));
};

module.exports.params = function getParams(func) {
	var funcInfo = info(func);

	var out = [
		'function ' + (funcInfo.name ? funcInfo.name : '<anonymous>') + '(',
	];

	out.push(funcInfo.params.join(','));
	out.push(');');

	if (funcInfo.isArgumentsUsed) {
		out.push(' // arguments variable is used (some parameters may not in header)');
	}

	log(out.join(''));
};

log = function log() {
	console.log.apply(this, arguments);
}