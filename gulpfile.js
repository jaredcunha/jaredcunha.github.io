var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stripDebug = require('gulp-strip-debug'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    minifycss = require('gulp-minify-css'),
    changed = require('gulp-changed'),
    gzip = require('gulp-gzip'),
    browserSync = require('browser-sync'),
    cp = require('child_process'),
    runSequence = require('run-sequence');

var paths = {
  imagesSrc: ['_assets/images/*.*'],
  imagesDest: 'assets/images/',
  scripts: ['_assets/javascripts/**/*.js', '!_assets/javascripts/vendor**/*.js', '!_assets/javascripts/libs/**/*.js', '!_assets/javascripts/polyfills/**/*.js'],
  sass: '_assets/stylesheets/global.scss',
  sassFiles: '_assets/stylesheets/**/*.scss',
  assets: 'assets',
  fonts: '_assets/fonts/*.*',
  jekyll: ['**/*.html', '_posts/**/*.md', '!_site/**/*.html']
}

// compile all your Sass
gulp.task('sass', function (){
    gulp.src(['_assets/stylesheets/global.scss'])
        .pipe(sass({
            errLogToConsole: true,
            includePaths: ['/assets/dev/css'],
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('assets/dev/css'))
        .pipe(minifycss())
        .pipe(gulp.dest('assets/css'));
});

// Copy all static images
gulp.task('images', function() {
 return gulp.src(paths.imagesSrc)
    // Only grab the images that have changed.
    .pipe(changed(paths.imagesDest))
    // Optimize all the images.
    .pipe(imagemin({optimizationLevel: 5}))
    // Put them in the images directory.
    .pipe(gulp.dest(paths.imagesDest));
});

gulp.task('scripts', function() {
  gulp.src(['_assets/javascripts/libs/*.js', '_assets/javascripts/vendor/*.js', '_assets/javascripts/scripts/*.js'])
    .pipe(concat('global.js'))
    .pipe(gulp.dest('assets/dev/js'))
    .pipe(uglify('comments:false'))
    .pipe(gulp.dest('assets/js'))
});

// Lint Task
gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('move', function(){
  gulp.src('_assets/javascripts/polyfills/*.*')
    .pipe(gulp.dest('assets/js'));
  gulp.src('assets/svg/*')
    .pipe(gulp.dest('_assets/images/svg'));
  gulp.src('_assets/fonts/*.*')
    .pipe(gulp.dest('assets/fonts'));
});

// gzip all our fonts.
gulp.task('fonts', function() {
  return gulp.src(paths.fonts)
    .pipe(gzip())
    .pipe(gulp.dest('assets/fonts'));
});




gulp.task('watch', function(){
    gulp.watch('_assets/stylesheets/**/*.scss', ['sass']);
    gulp.watch('_assets/javascripts/**/*.js', ['scripts', 'lint', 'move']);
});

gulp.task('default', ['watch'])
