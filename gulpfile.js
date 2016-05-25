var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var order = require('gulp-order');
var paths = {
  sass: ['./scss/*.scss'],
  javascript: ['./project/**/*.js']
};

gulp.task('default', ['sass', 'js']);

gulp.task('js', function() {
  gulp.src(['./project/**/*.js'])
  .pipe(order([
    'project/app.js',
    'project/landingpage.factory.js',
    'project/landing.controller.js'
    ], { base: './' }))
        .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest('./www/js')).on('error', gutil.log)
});

gulp.task('sass', function(done) {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/')).on('error', gutil.log)
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.javascript, ['js']);
});


gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
