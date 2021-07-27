var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var gcmq = require('gulp-group-css-media-queries');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');


function style(){
    return gulp.src('./app/precss/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gcmq())
    .pipe(gulp.dest('./app/css/'))
    .pipe(csso())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(browserSync.stream())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/css/'))
}


gulp.task('watch', function(){
    watch('./app/precss/style.scss', style)
    watch('./app/index.html', browserSync.reload)
    watch('./app/js/script.js', browserSync.reload)
})

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('style', style);

gulp.task('imagemin', function(){
    return gulp.src('./app/image-original/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('./app/img/'))
})

gulp.task('default', gulp.parallel('watch', 'server', 'style', 'imagemin'));