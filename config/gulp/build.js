const gulp = require('gulp');
//var clean = require('gulp-clean');

gulp.task('build',
  //gulp.series(
    gulp.series(
       //'fonts',
      'images',
      //'javascript',
      'sass'
    )
//  )
);



gulp.task('watch', function() {
  console.log('Running gulp watch');
  gulp.watch('./src/assets/stylesheets/**/*.scss', gulp.series('sass'));
  //gulp.watch('app/js/*.js', gulp.series('scripts'));
  //gulp.watch('app/img/*', gulp.series('images'));
});