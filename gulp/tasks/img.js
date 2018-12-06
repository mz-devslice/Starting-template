module.exports = function () {
	$.gulp.task('img:dev', function () {
		return $.gulp.src('src/static/img/*.{png,jpg,gif}')
			.pipe($.gulp.dest('build/img'));
	});

	$.gulp.task('img:build', function () {
		return $.gulp.src('src/static/img/*.{png,jpg,gif}')
			.pipe($.gp.tinypng('Mshg6sPC0cl2TsvlkTLfjqdRSk9V7z92'))
			.pipe($.gulp.dest('build/img'));
	});
};