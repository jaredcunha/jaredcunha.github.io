const gulp = require("gulp");
//var clean = require('gulp-clean');

gulp.task(
  "build",
  //gulp.series(
  gulp.series("fonts", "images", "scripts", "sass")
  //  )
);

gulp.task("watch", function () {
  console.log("Running gulp watch");
  gulp.watch("./src/assets/stylesheets/**/*.scss", gulp.series("sass"));
  gulp.watch("./src/assets/javascripts/**/*.js", gulp.series("scripts"));
  //gulp.watch('app/img/*', gulp.series('images'));
});
