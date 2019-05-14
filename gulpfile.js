var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

const src = {
    index: './src/'
};

const watch = {
    base: './src/**/*'
};

gulp.task('server', function() {

    browserSync.init({
        server: src.index
    });

    gulp.watch(watch.base).on('change', browserSync.reload);
});

gulp.task('dev', ['server']);