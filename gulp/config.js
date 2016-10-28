module.exports = function() {
  var src = 'app',
      dest = 'public';

  return {
    jslint: [
      `${src}/assets/js/**/*.js`,
      './*.js'
    ],
    css: {
      src: [
        `${src}/assets/css/**/*.css`,
        `!${src}/assets/css/**/_*.css`
      ],
      destDir: `${dest}/assets/css`,
      destFiles: `${dest}/assets/css/**/*.css`
    }
  };
};