const {src,dest,watch,series}= require('gulp')
const sass= require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('assets/sass/*.scss')
    .pipe(sass())
   // .pipe(purgecss({ content: ['*.html']}))
    .pipe(dest('assets/css'))
}

function watchtask(){
    watch(['assets/sass/*.scss'],buildStyles)
}

exports.default = series(buildStyles, watchtask)