const gulp = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const browserSync = require("browser-sync").create();
const imageMin = require("gulp-imagemin");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const path = {
    src: {
        img: './src/img/**/*',
        js: './src/js/*.js',
        scss: './src/scss/**/*.scss',
        html: './index.html'
    }, 
    dist: {
        css: './dist/css',
        js: './dist/js',
        img: './dist/img',
        root: './dist/'
    }
};

/**FUNCTIONS**/
const cleanBuild = () => (
    gulp.src(path.dist.root, {allowEmpty: true})
    .pipe(clean())
);

const buildStyles = () => (
    gulp.src(path.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer({browsers: 'last 3 versions'}))
    .pipe(gulp.dest(path.dist.css))
    .pipe(browserSync.stream())
);

const buildJS = () => (
    gulp.src(path.src.js)
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.dist.js))
    .pipe(browserSync.stream())
);

const imageMinFunc = () => (
    gulp.src(path.src.img)
    .pipe(imageMin())
    .pipe(gulp.dest(path.dist.img))
);


/**WATCHERS**/

const watcher = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(path.src.scss, buildStyles).on('change', browserSync.reload);
    gulp.watch(path.src.js, buildJS).on('change', browserSync.reload);
    gulp.watch(path.src.html).on('change', browserSync.reload);
}


/**TASKS**/

gulp.task('build', gulp.series(
    cleanBuild,
    imageMinFunc,
    buildStyles,
    buildJS
));

gulp.task('dev', watcher);