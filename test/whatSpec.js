var what = require('..');

var fs = require('fs');

function runner(params, cb) {
	cb.apply(this, params);
}

var tests = [
	[new Error()],
	[null, 'test'],
	[null, new Buffer(1)],
	[null, 5],
	[
		[1, 2, 3, 4, 5]
	],
	[void 0]
];

tests.forEach(function(test) {
	runner(test, what);
});

fs.stat('what?', what);

fs.stat('./index.js', what);

what.params(fs.stat);

console.log(what.info(fs.stat));