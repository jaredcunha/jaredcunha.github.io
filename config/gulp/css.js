const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const sassGlob = require('gulp-sass-glob');
const Fiber = require('fibers');

sass.compiler = require('dart-sass');

gulp.task('sass', function () {
 console.log("\nBuilding CSS");
 return gulp.src('./src/assets/stylesheets/**/*.scss')
   .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass.sync({outputStyle: 'compressed', fiber: Fiber}).on('error', sass.logError))
    .pipe(sourcemaps.write('maps'))
   .pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/assets/stylesheets/**/*.scss', ['sass']);
});
