var gulp   = require('gulp');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import')();
var postcssNested = require('postcss-nested')();
var postcssMixins = require('postcss-mixins')();
var postcssConditionals = require('postcss-conditionals')();
var postcssEach = require('postcss-each')();
var postcssFor = require('postcss-for')();
var postcssCustomMedia = require('postcss-custom-media')();
var postcssCustomProperties = require('postcss-custom-properties')();
var postcssCustomSelectors = require('postcss-custom-selectors')();
var postcssCalc = require('postcss-calc')();
var config = require('../config')();

var cssTask = () => {

  var processors = [
    postcssImport,
    postcssNested,
    postcssMixins,
    postcssConditionals,
    postcssEach,
    postcssFor,
    postcssCustomMedia,
    postcssCustomProperties,
    postcssCustomSelectors,
    postcssCalc
  ];

  return gulp
    .src(config.css.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions', '>5%'] }) ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.css.destDir));
};

gulp.task('css', ['clean-css'], cssTask);
module.exports = cssTask;