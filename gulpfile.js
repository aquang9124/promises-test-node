var gulp = require('gulp');
var concat = require('gulp-concat');

// set up paths to src files for convenience
var paths = {
	scripts: '/client/app/*/*.js',
	dist: '/client/dist'
};

// set up concatenation task
gulp.task('javascript', function() {
	return gulp.src(['/client/app/module.js', paths.scripts])
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.dist));
});

// set up watch task
gulp.task('watch', function() {
	gulp.watch(['/client/app/module.js', paths.scripts], ['javascript']);
});

// set up default task
gulp.task('default', ['javascript', 'watch']);