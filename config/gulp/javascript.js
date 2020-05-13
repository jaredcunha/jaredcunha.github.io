const gulp = require('gulp');
const order = require("gulp-order");
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('scripts', function () {
 console.log("\nBuilding JS");
 return gulp.src('./src/assets/javascripts/**/*.js')
   .pipe(sourcemaps.init())
      .pipe(order([
       "utilities/**/*.js",
       "scripts/**/*.js"
      ]))
     .pipe(concat('site.js'))
   .pipe(sourcemaps.write('maps'))
   .pipe(gulp.dest('./src/js'));
});

gulp.task('js:watch', function () {
  gulp.watch('./src/assets/javascripts/**/*.js', ['scripts']);
});
