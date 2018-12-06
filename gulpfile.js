'use strict';

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	del: require('del'),
	argv: require('yargs').argv,
	bs: require('browser-sync').create(),
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel('pug', 'styles:dev', 'libsJS:dev', 'js:copy', 'img:dev', 'svg', 'fonts')
));


$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel('pug', 'styles:build', 'libsJS:build', 'js:copy', 'img:build', 'svg', 'fonts')
));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel('watch', 'serve')
));