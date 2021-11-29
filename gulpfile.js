const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
  return src('sass/index.scss')
    .pipe(sass({ outputStyle: 'compact' }))
    .pipe(dest('css'))
}

function watchTask() {
  watch(['sass/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)