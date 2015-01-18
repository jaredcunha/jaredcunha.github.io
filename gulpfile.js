// Gulp
    var gulp = require('gulp'),

    // JavaScript
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),

    // Images,
    svgmin = require('gulp-svgmin'),
    imagemin = require('gulp-imagemin'),
    svgSprite = require("gulp-svg-sprites"),
    filter    = require('gulp-filter'),
    svg2png   = require('gulp-svg2png'),

    // Stats and Things
    size = require('gulp-size');

    // Scripts
    gulp.task('scripts', function() {
      gulp.src(['_assets/javascripts/libs/*.js', '_assets/javascripts/plugins/*.js', '_assets/javascripts/scripts/*.js'])
        .pipe(concat('global.js'))
        .pipe(gulp.dest('_site/assets/dev/js'))
        .pipe(uglify('comments:false'))
        .pipe(gulp.dest('_site/prod/js'))
    });

    gulp.task('lint', function() {
      return gulp.src('_assets/javascripts/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    });

    gulp.task('move', function(){
      gulp.src('_assets/javascripts/polyfills/*.*')
      .pipe(gulp.dest('_site/assets/prod/js'));
      gulp.src('_assets/images/svg/*')
      .pipe(gulp.dest('_site/assets/prod/svg'));
    });

    // Images
    gulp.task('svgmin', function() {
        gulp.src('images/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/dev/images/svg'))
        .pipe(gulp.dest('dist/prod/images/svg'));
    });

    gulp.task('sprites', function () {
        return gulp.src('images/icons/*.svg')
            .pipe(svgSprite({
                 cssFile: "scss/_sprite.scss",
                 padding: 4
             }))
            .pipe(gulp.dest("assets"))
            .pipe(filter("**/*.svg"))
            .pipe(svg2png())
            .pipe(gulp.dest("assets"));
    });

    gulp.task('imagemin', function () {
        gulp.src('./dev/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dev/img'))
        .pipe(gulp.dest('./prod/img'));
    });

    // Stats and Things
    gulp.task('stats', function () {
        gulp.src('./prod/**/*')
        .pipe(size())
        .pipe(gulp.dest('./prod'));
    });

//

    gulp.task('watch', function(){
        gulp.watch(["_assets/javascripts/**/*.js", "!js/build/**/*.js", "!js/build/*.js"], ['scripts', 'lint', 'move']);
    });

    gulp.task('default', ['watch', 'move'])