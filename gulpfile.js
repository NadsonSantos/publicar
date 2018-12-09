var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var copy = require('gulp-contrib-copy');
var reload = browserSync.reload;

// produção 
gulp.task('browser-sync', function() {
    browserSync.init(
    	[
            "./src/css/sass/**/*.scss",
            "./src/css/sass/**/**/*.scss",
    		"./src/css/*.css",
            "./src/scripts/*.js", 
    		"./*.html",
    		"./src/image/*"
		], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function(){
    gulp.src('./src/css/sass/style.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(rename("style.min.css"))
	.pipe(gulp.dest('src/css'))
	.pipe(reload({ stream:true }))
});


gulp.task('default', [ 'sass', 'browser-sync'], function(){	
    gulp.watch(["./src/css/sass/**/*.scss", "./src/css/sass/*/*.scss"], ['sass'])
})