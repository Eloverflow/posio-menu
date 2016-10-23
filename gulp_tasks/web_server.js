const gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webServer', function() {
  gulp.src('src/app')
      .pipe(webserver({
        port:'3000',
        livereload: {
          enable: true, // need this set to true to enable livereload
          filter: function(fileName) {
            if (fileName.match(/.map$/)) { // exclude all source maps from livereload
              return false;
            } else {
              return true;
            }
          }
        },
        open: true
      }));
});