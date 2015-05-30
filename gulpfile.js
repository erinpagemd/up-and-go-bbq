var gulp = require('gulp');
var connect = require('gulp-connect');
var jade = require('gulp-jade');
var copy = require('gulp-copy');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

//////////CONNECT////////////////////////////////////
gulp.task('connect', function(){
  connect.server({
    root: ['public'],
    port: 8000,
    livereload: true
  });
});

//////////WATCH////////////////////////////////////
gulp.task('watch', function () {
  watch('./app/**/*', function() {
    gulp.start('build');
  });
});
//////////SASS////////////////////////////////////
gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/'));
});
//////////COPY////////////////////////////////////
gulp.task('copy', function () {
  gulp.src(['./app/**/*.js', './app/**/*.jpg', './app/**/*.jpeg', './app/**/*.png', './app/**/*.gif', './app/**/*.mp4'])
  .pipe(copy('./public/', {prefix:1}))
});
//////////JADE////////////////////////////////////
gulp.task('jade', function() {
  gulp.src('./app/**/*.jade')
    .pipe(jade({pretty: true, doctype: 'html'}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/'))
});
//////////DEFAULT////////////////////////////////////
gulp.task('build', ['copy', 'jade', 'sass']);
gulp.task('default', ['connect', 'watch']);
