var util = require('gulp-util');
var del = require('del');
var log = require('../helpers/logger').log;

function clean(path, done) {
  log(util.colors.blue(`Cleaning ${path}`));

  del(path).then(paths => {
      done();
  });
}

module.exports = { clean };