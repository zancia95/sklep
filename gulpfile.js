// stworzenie pliku style.css w 'prod-assets'
var gulp = require('gulp');
var gulpSass = require('gulp-sass')(require('sass'));

gulp.task('buildcss', function(){
    return gulp.src('./dev-assets/style.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('./prod-assets'));
});


//automatyczna kompilacja  gulp wszystkich plikow sass na css
gulp.task('watch', function(){
    gulp.watch('./dev-assets/**/*.scss', gulp.series('buildcss'));
});