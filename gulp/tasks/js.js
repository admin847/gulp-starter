import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify-es';

const ugl = uglify.default;


export const js = () => {
  return app.gulp.src(app.path.src.js, {sourcemaps: true})
    .pipe(webpackStream({
      entry: `${ app.path.srcFolder }/js/main.js`,
      mode: app.isProd ? 'production' : 'development',
      output: {
        filename: 'main.js',
      },
    }, webpack))
    .pipe(app.plugins.if(app.isProd, babel({
      presets: ['@babel/env'],
    })))
    .pipe(ugl())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};