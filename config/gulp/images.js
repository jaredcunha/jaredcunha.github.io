const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const flatten = require('gulp-flatten');
const task = 'images';

gulp.task('rasters', function (done) {
  console.log("\nOptimizing images and moving into './images'");
  const stream = gulp.src(['./src/assets/images/**/*.*', '!./src/assets/images/_svg/**/*.*'])
    .pipe(flatten())
    .pipe(imagemin())
    .pipe(gulp.dest('./src/images/'));
  return stream;
});

gulp.task('vectors', function (done) {
  console.log("\nMove SVGs into './images'");
  const stream = gulp.src('./src/assets/images/_svg/**/*.*')
    .pipe(gulp.dest('./src/images/'));
  return stream;
});


gulp.task(task, gulp.parallel('rasters', 'vectors'));
