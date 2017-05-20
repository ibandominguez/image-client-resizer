'use strict'

const gulp = require('gulp')
const babel = require('gulp-babel')
const rename = require('gulp-rename')

gulp.task('default', () => {
  return gulp.src('./src/ImageClientResizer.js')
    .pipe(babel({
      presets: ['es2015'],
      minified: true,
      plugins: [
        'typecheck',
        'syntax-flow',
        'transform-class-properties',
        'transform-flow-strip-types'
      ]
    }))
    .pipe(rename('image-client-resizer.min.js'))
    .pipe(gulp.dest('./dist/'))
})
