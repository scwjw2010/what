var what = require('..'),
	params = what.params;

//manual testing ftw

params(params);

params(function(){});
params(function() {});
params(function (){});
params(function () {});
params(function a(){});
params(function a () 
{});
params(function(a,b,c,d){});
params(function(a,/*b,c,*/b){});
params(function(a,
	/*b,
	c,*/b){});
params(function(a, //hello world
b){});
params(function(){
	arguments;
});
params(function(){
	// arguments
});

params(function(){{}});
