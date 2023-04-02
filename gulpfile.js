import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { clear } from './gulp/tasks/clear.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { styles } from './gulp/tasks/styles.js';
import { js } from './gulp/tasks/js.js';
import { copyLibs } from './gulp/tasks/copyLibs.js';
import { copyFonts } from './gulp/tasks/copyFonts.js';
import { copyImages } from './gulp/tasks/copyImages.js';

global.app = {
  isDev: process.argv.includes('--build'),
  isProd: !process.argv.includes('--build'),
  gulp: gulp,
  path: path,
  plugins: plugins,
};

const mainTasks = gulp.parallel(copyLibs, copyFonts, copyImages, html, styles, js);

const watcher = () => {
  gulp.watch(path.watch.libs, copyLibs);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.styles, styles);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, copyImages);
};

const dev = gulp.series(clear, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clear, mainTasks);

export { dev };
export { build };

gulp.task('default', dev);