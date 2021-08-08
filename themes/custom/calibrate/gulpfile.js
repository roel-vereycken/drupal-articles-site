const gulp = require("gulp");
// const livereload = require("gulp-livereload");
// const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
// const sourcemaps = require("gulp-sourcemaps");
// const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();
// const pngquant = require("imagemin-pngquant");
sass.compiler = require("node-sass");

// function imagemin() {
//   return gulp
//     .src("./images/*")
//     .pipe(
//       imagemin({
//         progressive: true,
//         svgoPlugins: [{ removeViewBox: false }],
//         use: [pngquant()],
//       })
//     )
//     .pipe(gulp.dest("./images"));
// }

// CSS task
function sass2css() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

// Watch files
function watchFiles() {
  browserSync.init({
    open: false,
    server: "./scss/**/*.scss",
  });

  gulp.watch("./scss/**/*.scss", sass2css).on("change", browserSync.reload);
}

const watch = gulp.series(watchFiles);

exports.watch = watch;
