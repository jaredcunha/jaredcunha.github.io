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
  imagesDest: '_assets/images/optimized',
  scripts: ['_assets/javascripts/**/*.js', '!_assets/javascripts/vendor**/*.js', '!_assets/javascripts/libs/**/*.js', '!_assets/javascripts/polyfills/**/*.js'],
  sass: '/_assets/stylesheets/global.scss',
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
            includePaths: ['_site/assets/dev/css'],
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('_site/assets/dev/css'))
        .pipe(minifycss())
        .pipe(gulp.dest('_site/assets/css'));
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
    .pipe(gulp.dest('_site/assets/dev/js'))
    .pipe(uglify('comments:false'))
    .pipe(gulp.dest('_site/assets/js'))
});

// Lint Task
gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('move', function(){
  gulp.src('_assets/javascripts/polyfills/*.*')
    .pipe(gulp.dest('_site/assets/js'));
  gulp.src('assets/svg/*')
    .pipe(gulp.dest('_assets/images/svg'));
  gulp.src('_assets/fonts/*.*')
    .pipe(gulp.dest('_site/assets/fonts'));
    gulp.src('_assets/images/optimized/*.*')
    .pipe(gulp.dest('_site/assets/images'));
});

// gzip all our fonts.
gulp.task('fonts', function() {
  return gulp.src(paths.fonts)
    .pipe(gzip())
    .pipe(gulp.dest('_site/assets/fonts'));
})


// Our 'build' tasks for jekyll server.
gulp.task('jekyll-build', function (done) {
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'})
    .on('close', done);
});

// Our 'dev' tasks for jekyll server, note: it builds the files, but uses extra configuration.
gulp.task('jekyll-dev', function (done) {
  browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build');
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--config=_config.yml,_config.yml'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll-rebuild', function() {
  runSequence(['jekyll-dev'], ['lint', 'sass', 'scripts', 'move'], function () {
      browserSync.reload();
  });
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['lint', 'jekyll-rebuild']);
  gulp.watch(paths.sassFiles, ['sass']);
  gulp.watch(paths.imagesSrc, function() {
    runSequence(['images'], ['jekyll-dev'])
  });
  gulp.watch(paths.jekyll, ['jekyll-rebuild']);
});

//////////////////////////////
// BrowserSync Task
//////////////////////////////
gulp.task('browserSync', function () {
  browserSync.init([
    '_site/' + paths.assets +  '/**/*.css',
    '_site/' + paths.assets + '/**/*.js',
    '_site/**/*.html',
  ], {
    server: {
      baseDir: '_site'
    },
    host: "localhost",
    port: "4545"
  });
});

// Build Task
gulp.task('build', function() {
  runSequence('jekyll-build', ['lint', 'sass', 'scripts', 'move']
    
  );
});

gulp.task('default', ['build']);

gulp.task('server', function() {
  runSequence('jekyll-dev', ['lint', 'images', 'sass', 'scripts', 'move'],
    ['browserSync', 'watch']
  );
});

gulp.task('serve', ['server']);