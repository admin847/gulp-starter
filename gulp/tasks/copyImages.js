export const copyImages = () => {
  return app.gulp.src(app.path.src.img, { encoding: false })
    .pipe(app.gulp.dest(app.path.build.img))
}