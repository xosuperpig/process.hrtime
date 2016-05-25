var OPTION = {
	's': [1, 1e-9],
	'ms': [1e3, 1e-6],
	'us': [1e6, 1e-3],
	'ns': [1e9, 1]
};

module.exports = function (hrtime, option) {
	var time = hrtime ? process.hrtime(hrtime) : process.hrtime();
	if (option && option in OPTION) {
		time = time[0] * OPTION[option][0] + time[1] * OPTION[option][1]
	}
	return time
};