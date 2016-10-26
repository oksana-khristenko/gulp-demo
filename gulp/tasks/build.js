var gulp = require('gulp');

var buildTask = () => {};

gulp.task('build', ['jslint', 'browserify', 'css'], buildTask);
module.exports = buildTask;