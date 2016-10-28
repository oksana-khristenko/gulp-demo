var util = require('gulp-util');

function log(message) {
    if (typeof(message) === 'object') {
        for (let item in message) {
            if (message.hasOwnProperty(item)) {
                util.log(util.colors.blue(message[item]));
            }
        }
    }
    else {
        util.log(util.colors.blue(message));
    }

}

module.exports = { log };