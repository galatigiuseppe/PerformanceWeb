'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var critical = require('critical').stream;

gulp.task("concatScripts", function(){
	gulp.src(['js/perfmatters.js','views/js/main.js'])
	.pipe(concat("app.js"))
	.pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", function () {
	gulp.src("js/app.js")
		.pipe(uglify())
		.pipe(gulp.dest('js'));
});

gulp.task("default", ["hello"], function() {
	console.log("This is the default task!");
});



// Generate & Inline Critical-path CSS
gulp.task("critical", function () {
    return gulp.src('/*.html')
        .pipe(critical({base: '/', inline: true, css: ['node_modules/bootstrap/dist/css/bootstrap.css','css/style.css']}))
        .pipe(gulp.dest('/'));
});