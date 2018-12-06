module.exports = function () {
	$.gulp.task('watch', function () {
		$.gulp.watch('src/**/*.html', $.gulp.series('pug'));
		$.gulp.watch('src/static/sass/**/*.sass', $.gulp.series('styles:dev'));
		$.gulp.watch('src/static/svg/**/*.svg', $.gulp.series('svg'));
		$.gulp.watch('src/static/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
		$.gulp.watch('src/static/img/*', $.gulp.series('img:dev'));
	});
};