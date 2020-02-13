const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const flatten = require('gulp-flatten');
//const task = 'images';

gulp.task('images', function (done) {
  console.log("\nOptimizing images and moving into './images'");
  const stream = gulp.src('./_src/assets/images/**/*.*')
    .pipe(flatten())
    .pipe(imagemin())
    .pipe(gulp.dest('./_src/images/'));
  return stream;
});


//gulp.task(task, gulp.parallel('images'));