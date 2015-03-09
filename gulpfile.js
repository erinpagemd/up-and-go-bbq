var gulp = require('gulp');
var jade = require('gulp-jade');

//////////JADE////////////////////////////////////

gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  gulp.src('./app/*.jade')
    .pipe(jade({pretty: true, doctype: 'html'}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/'))
});

//////////DEFAULT////////////////////////////////////

gulp.task('default', function () {
  //default code here
});
