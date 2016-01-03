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

gulp.task('default', ['transpile'], function () {

    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('main.js', electron.restart);
    
    // Reload renderer process
    gulp.watch(['*.css', '*.js', '*.html','!main.js'], function (fileVinyl) {
        // do not reload renderer process if the main application has changed
        // TODO Refactor this to separate browser and renderer source

        electron.reload();

        console.log('Reload renderer process since '
            + fileVinyl.path + ' changed.')
    });

    gulp.watch('*.jade', ['transpile']);

});