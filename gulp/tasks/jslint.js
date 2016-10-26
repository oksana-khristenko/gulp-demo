var gulp   = require('gulp');
var gulpif = require('gulp-if');
var args = require('yargs').argv;
var log = require('../helpers/logger').log;
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var gulpPrint = require('gulp-print');
var config = require('../config')();

var jslintTask = () => {
  log('Analysing JS files with jshint and jscs');

  return gulp
    .src(config.jslint)
    .pipe(gulpif(args.verbose, gulpPrint()))
    .pipe(jscs({configPath:'gulp/rc/.jscsrc'}))
    .pipe(jshint('gulp/rc/.jshintrc'))
    .pipe(stylish.combineWithHintResults())
    .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
    .pipe(jshint.reporter('fail'));
};

gulp.task('jslint', jslintTask);
module.exports = jslintTask;