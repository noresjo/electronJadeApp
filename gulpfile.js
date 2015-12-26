'use strict';
var gulp = require('gulp');
var electron = require('electron-connect').server.create();
let jade = require('gulp-jade');



gulp.task('transpile', function () {
      gulp.src('./*.jade')
        .pipe(jade({
            pretty: true,
            locals: {}
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('serve', ['transpile'], function () {

    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('main.js', electron.restart);

    // Reload renderer process
    gulp.watch(['index.css','index.js', 'index2.html'], electron.reload);

    gulp.src('./*.jade')
        .pipe(jade({
            pretty: true,
            locals: {}
        }))
        .pipe(gulp.dest('./'))

});