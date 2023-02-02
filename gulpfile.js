const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function imageMin() {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function minifieJs() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compSass() {
  return gulp.src('./src/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: "compressed"
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

exports.default = function() {
  gulp.watch('./src/styles/*.scss', { ignoreInitial: false}, gulp.series(compSass))
  gulp.watch('./src/scripts/*.js', { ignoreInitial: false}, gulp.series(minifieJs))
  gulp.watch('./src/images/*', { ignoreInitial: false}, gulp.series(imageMin))
}
