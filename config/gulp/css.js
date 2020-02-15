const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
 return gulp.src('./_src/assets/stylesheets/**/*.scss')
   .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('maps'))
   .pipe(gulp.dest('./_src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./_src/assets/stylesheets/**/*.scss', ['sass']);
});