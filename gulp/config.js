module.exports = function() {
  return {
    jslint: [
      'app/assets/js/**/*.js',
      './*.js'
    ],
    css: [
      'app/assets/css/**/*.css',
      '!app/assets/css/**/_*.css'
    ]
  };
};