if (typeof process == 'undefined') {

    module.exports = function (date, option) {
        var time = date ? (new Date).getTime() - date : (new Date).getTime();
        switch (option) {
            case 's':
                return Math.floor(time / 1000);
            case 'us':
                return time * 1000;
            case 'ns':
                return time * 1000000;
            default:
                return time
        }
    };
} else {
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
}