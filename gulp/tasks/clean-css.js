var gulp = require('gulp');
var clean = require('../helpers/clean').clean;
var config = require('../config')();

var cleanCssTask = done => clean(config.css.destFiles, done);

gulp.task('clean-css', cleanCssTask);
module.exports = cleanCssTask;