'use strict';
var hrtime = require(".");
var start = hrtime();

console.log(hrtime());
setTimeout(function () {
	console.log(hrtime(start));
	console.log(hrtime(start, 's') + ' s');
	console.log(hrtime(start, 'ms') + ' ms');
	console.log(hrtime(start, 'us') + ' us');
	console.log(hrtime(start, 'ns') + ' ns');
}, 200);