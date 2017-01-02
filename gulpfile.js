const gulp = require("gulp");
const clean = require("gulp-clean");
const wiredep = require("wiredep").stream;
const inject = require("gulp-inject");
const templateCache = require("gulp-angular-templatecache");
const minify = require("gulp-htmlmin");
const connect = require("gulp-connect");
const concat = require("gulp-concat");
const config = require("./gulpConfig");
const bower_config = config.bower_config;

gulp.task("clean", function(){
  gulp.src(config.build, {read: false})
      .pipe(clean());
});

gulp.task("js", function(){
  gulp.src(config.js)
      .pipe(gulp.dest(config.build + "/src"))
      .pipe(connect.reload());
});

gulp.task("vendor", function(){
  gulp.src(config.vendor)
      .pipe(gulp.dest(config.build + "/vendor"));
});

gulp.task("templateCache", function(){
  gulp.src(config.html)
  		.pipe(minify({collapseWhitespace: true}))
  		.pipe(templateCache("templates-app.module.js", {module: "templates-app", standalone: true}))
  		.pipe(gulp.dest(config.build + '/src'))
      .pipe(connect.reload());
});

gulp.task("wiredep", function(){
  gulp.src(config.index)
      .pipe(wiredep(bower_config))
      .pipe(inject(gulp.src(config.build_js, {read: false}), {ignorePath: '/build/'}))
      .pipe(gulp.dest(config.build));
});

gulp.task("images", function(){
  gulp.src(config.images)
      .pipe(gulp.dest(config.build_images));
});

gulp.task("watch", function(){
  gulp.watch(config.js, ["transpile"]);
  gulp.watch(config.html, ["templateCache"]);
});

gulp.task("connect", function(){
  connect.server({
    root: "./build",
    port: 8383,
    livereload: true
  })
});

gulp.task("default", ["js", "vendor", "images", "templateCache", "wiredep", "connect", "watch"]);
