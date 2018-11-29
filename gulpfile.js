'use strict';


var gulp = require('gulp'),
    gp = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();


// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});


gulp.task('pug', function(){
    return gulp.src('src/pug/pages/*.pug')
        .pipe(gp.pug({
            pretty:true
        }))
        .on("error", gp.notify.onError({
            title: "stile"
        }))
        .pipe(gulp.dest('build'))
        .on('end',browserSync.reload);
});

gulp.task('watch', function(){
    gulp.watch('src/pug/**/*.pug', ['pug']);
});

gulp.task('build', ['pug', 'watch', 'serve']);

gulp.task('default', ['build'])

