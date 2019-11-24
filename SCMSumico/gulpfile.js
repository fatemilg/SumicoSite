var gulp = require('gulp');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var minify = require('gulp-minify');

gulp.task('Upper', function (done) {
    gulp.src([
        './Scripts/jquery.min.js',
        './Scripts/jquery-ui.min.js',
        './Scripts/bootstrap.min.js',
        './Scripts/angular.min.js',
        './Scripts/angular-route.min.js',
        './Scripts/angular-sanitize.js',
        './Scripts/angular-cookies.min.js',
        './Scripts/ExtensionMethod.js',
        './Scripts/jquery.scrollTo.min.js',
        './Scripts/jquery.nicescroll.js',
        './Scripts/jquery.dcjqaccordion.2.7.js',
        './Scripts/angular-page-loader.min.js',
        './Scripts/owl.carousel.js',
        './Scripts/jQueryRotate.js',
        './Scripts/ngProgress.js',
        './Scripts/angular-iran-national-id.min.js',
        './Scripts/bootstrap-toggle.min.js',
        './Scripts/Alert.js',
        './Main/Routing.js'
    ])
        .pipe(concat('up.js'))
        .pipe(gulp.dest('dist/'));
    done();
});
gulp.task('Bottom', function (done) {
    gulp.src([
        './Main/CommonServices/*js',
        './Main/CommonController/*js',
        './Main/CommonDirectives/*js',
        './Main/CommonFilters/*js',
        './Main/CommonFactories/*js'
    ])
        .pipe(concat('down.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/'));
    done();
});