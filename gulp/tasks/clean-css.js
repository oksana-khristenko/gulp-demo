var gulp = require('gulp');
var clean = require('../helpers/clean').clean;
var config = require('../config')();

var cleanCssTask = (done) => {
  var files = config.css.destFiles;
  clean(files, done);
};

gulp.task('clean-css', cleanCssTask);
module.exports = cleanCssTask;