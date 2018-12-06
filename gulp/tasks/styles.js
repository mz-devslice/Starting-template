module.exports = function () {
	$.gulp.task('styles:build', function () {
		return $.gulp.src('src/static/sass/*.*')
			.pipe($.gp.sass({
				includePaths: require('node-normalize-scss').includePaths
			}))
			.pipe($.gp.autoprefixer({
				browsers: ['last 10 versions'],
				cascade: true
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.csso())
			.pipe($.gulp.dest('build/css'));
	});

	$.gulp.task('styles:dev', function () {
		return $.gulp.src('src/static/sass/*.*')
			.pipe($.gp.plumber({
				errorHandler: $.gp.notify.onError(function (err) {
					return {
						title: 'styles',
						message: err.message
					};
				})
			}))
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass({
				includePaths: require('node-normalize-scss').includePaths
			}))
			.pipe($.gp.autoprefixer({
				browsers: ['last 10 versions'],
				cascade: true
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.sourcemaps.write())
			.pipe($.gulp.dest('build/css'))
			.pipe($.bs.reload({
				stream: true
			}));
	});
};