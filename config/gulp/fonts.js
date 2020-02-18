const gulp = require('gulp');


gulp.task('fonts', function (done) {
  console.log("\n\nMoving fonts into '_site' folder");
  const stream = gulp.src('./src/assets/fonts/**/*.*')
    .pipe(gulp.dest('_site/fonts'));

  return stream;
});