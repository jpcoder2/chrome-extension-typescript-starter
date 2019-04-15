import gulp from 'gulp';
import run from 'gulp-run-command';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('watch', run('npm run watch'));

gulp.task('build', run('npm run build'));

gulp.task('chromeManifest', () => {
  return gulp.src('dist/manifest.json')
    .pipe($.chromeManifest({
      buildnumber: true
  }))
  .pipe($.if('manifest.json', gulp.dest('dist')));
});

gulp.task('package', ['build', 'chromeManifest'], () => {
  var manifest = require('./dist/manifest.json');
  return gulp.src('dist/**')
      .pipe($.zip(manifest.name + '-' + manifest.version + '.zip'))
      .pipe(gulp.dest('package'));
});