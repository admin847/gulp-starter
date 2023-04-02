import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gcmq from 'gulp-group-css-media-queries';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

export const styles = () => {
  return app.gulp.src(app.path.src.styles, {sourcemaps: app.isDev})
    .pipe(sass({
      outputStyle: 'compressed',
    }))
    .pipe(app.plugins.if(app.isProd, gcmq()))
    .pipe(app.plugins.if(app.isProd, autoPrefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
    })))
    .pipe(app.plugins.if(app.isProd, cleanCss()))
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.plugins.browsersync.stream());
};