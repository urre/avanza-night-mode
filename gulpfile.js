var gulp = require('gulp')
var zip = require('gulp-zip')
path = require('path')

gulp.task('zip', function () {
	return gulp
		.src(
		[
			'./src/icons/*.png',
			'./src/css/avanza-night-mode.css',
			'manifest.json'
		],
		{
			base: '.'
		}
		)
		.pipe(zip('avanza-night-mode.zip'))
		.pipe(gulp.dest('./ship'))
})
