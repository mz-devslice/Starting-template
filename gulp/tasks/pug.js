module.exports = function () {
	$.gulp.task('pug', function () {
		return $.gulp.src('src/*.html')
			.pipe($.gp.plumber({
				errorHandler: $.gp.notify.onError(function (err) {
					return {
						title: 'html:',
						message: err.message
					};
				})
			}))
			.pipe($.gulp.dest('build'))
			.on('end', $.bs.reload);
	});
};

//при использовании препроцесора pug для html добавить в src папку pug, а в ней папкуи pages и layout вместо index.html
// $.gulp.task('pug',function() { 
// 	return $.gulp.src('src/pug/pages/*.pug')
// 	.pipe($.gp.pug({
// 		pretty:true
// 	}))
// 	.pipe($.gulp.dest('build'))
// 	.on('end', $.bs.reload);
// 	});