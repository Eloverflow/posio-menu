const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

// Load some files into the registry
const hub = new HubRegistry(['gulp_tasks/*.js']);

// Tell gulp to use the tasks just loaded
gulp.registry(hub);

gulp.task('serve', gulp.series('watch', sassCompile, templateCompile, 'webServer'));
gulp.task('watch', watch);

function watch(done) {
  gulp.watch("src/**/*.scss", sassCompile);
  gulp.watch("src/app/**/*.html", templateCompile);
  done();
}

// Compile sass into CSS & auto-inject into browsers
function sassCompile(done) {
  gulp.src(['src/modules/*.scss', 'src/index.scss'])
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest("src/app/"));
  
  done();
}

function templateCompile(done) {
  gulp.src('src/app/**/*.html')
      .pipe(templateCache('templates.js',{root : "templates", module : "starter.templates"}))
      .pipe(gulp.dest('src/app/assets/'));

  done();
}
