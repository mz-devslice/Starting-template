module.exports = function () {
	$.gulp.task('libsJS:dev', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
				'node_modules/slick-carousel/slick/slick.min.js',
				'node_modules/svg4everybody/dist/svg4everybody.min.js'])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gulp.dest('build/js'))
			.pipe($.bs.reload({
				stream: true
			}));
	});

	$.gulp.task('libsJS:build', function () {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
				'node_modules/slick-carousel/slick/slick.min.js',
				'node_modules/svg4everybody/dist/svg4everybody.min.js'
			])
			.pipe($.gp.concat('libs.min.js'))
			.pipe($.gp.uglify())
			.pipe($.gulp.dest('build/js'));
	});

	$.gulp.task('js:copy', function () {
		return $.gulp.src(['src/static/js/*.js',
				'!.src/static/js/libs.min.js'])
			.pipe($.gulp.dest('build/js'))
			.pipe($.bs.reload({
				stream: true
			}));
	});
};