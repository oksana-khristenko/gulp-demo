var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var hbsfy = require('hbsfy');
var source = require('vinyl-source-stream');
var babelConfig = require('../rc/.babelrc');

var browserifyTask = () => {
  browserify({ debug: true })
    .transform(hbsfy)
    .transform(['babelify', babelConfig])
    .require('app/assets/js/main.js', { entry: true })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/assets/js'));
};

gulp.task('browserify', browserifyTask);
module.exports = browserifyTask;