const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const ts = require("gulp-typescript");

const paths = {
    scss: "./src/scss/**/*.scss",
    css: "./",
    ts: "./src/scripts/**/*.ts",
    js: "./styles.js"
};

function styles() {
    return gulp
        .src(paths.scss)
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.css))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp
        .src(paths.ts)
        .pipe(ts({ noImplicitAny: true, outFile: "scripts.js" }))
        .pipe(gulp.dest("./"));
}


function serve() {
    browserSync.init({ server: "./" });
    gulp.watch(paths.scss, styles);
    gulp.watch(paths.ts, scripts);
    gulp.watch("./dist/*.html").on("change", browserSync.reload);
    gulp.watch(paths.js).on("change", browserSync.reload);
}

exports.default = gulp.series(gulp.parallel(styles, scripts), serve);
