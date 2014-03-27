var regex = {
	func: /^function\s*(?:\s([^\(\s]+))?\(((?:.|[\r\n])*?)\)[\s\n]*\{((?:.|[\r\n])*)\}$/,
	whitespace: /\/\/.*|\/\*(?:.|[\r\n])*?\*\/|\s*|[\r\n]*/g,
	whitespaceKeepLines: /\/\/.*|\/\*.*?\*\/|\s*|/g
};

module.exports = function functionInfo(func) {
	var funcStr = func.toString();

	var funcName = funcStr
		.replace(regex.func, '$1');

	var funcHeader = funcStr
		.replace(regex.func, '$2')
		.replace(regex.whitespace, '');

	var funcBody = funcStr
		.replace(regex.func, '$3');

	var funcBodyClean = funcBody
		.replace(regex.whitespaceKeepLines, '');

	var funcParams = funcHeader.split(',');

	// check if the `arguments` variable is used
	var isArgumentsUsed = false;
	if (funcBodyClean.indexOf('arguments') != -1) {
		isArgumentsUsed = true;
		// throw new Error('function may not declare all of its parameters in its header (uses `arguments`)');
	}

	return {
		name: funcName ? funcName : null,
		params: funcParams,
		body: funcBody,
		isArgumentsUsed: isArgumentsUsed
	};
}