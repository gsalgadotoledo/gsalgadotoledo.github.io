'use strict';
 
const gulp = require('gulp')
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
 
gulp.task('sass', () => {
  return gulp.src('./assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix("last 1 version", "> 1%", "ie 9", "ie 10"))
    .pipe(gulp.dest('./assets/css'))
});
 
gulp.task('sass:watch', () => {
  gulp.watch('./assets/**/*.scss', ['sass'])
})