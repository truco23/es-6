const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass');

const src = {
    index: './src/',
    scss: './src/scss/**/*.scss',
    tmpCss: './src/_tmp/css'
};

const watch = {
    base: './src/**/*',
    scss: src.scss,
};

gulp.task('sass', function () {
    return gulp.src(src.scss)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(src.tmpCss));
});

gulp.task('server', ['compile'], function() {

    browserSync.init({
        server: src.index
    });

    gulp.watch([watch.scss], ['sass']);
    gulp.watch(watch.base).on('change', browserSync.reload);
});

gulp.task('compile', ['sass']);
gulp.task('dev', ['server']);