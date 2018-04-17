// var gulp = require('gulp');  
// var sass = require('gulp-sass');  
// var browserSync = require('browser-sync');

// gulp.task('sass', function () {
//   return gulp.src('sass/**/*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('css'));
// });

// gulp.task('browser-sync', function() {  
//     browserSync.init(["css/*.css", "js/*.js"], {
//         server: {
//             baseDir: "./"
//         }
//     });
// });

// gulp.task('default', ['sass', 'browser-sync'], function () {  
// 	gulp.watch('sass/**/*.scss', ['sass']);
// });


var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);