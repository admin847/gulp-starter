export const copyLibs = () => {
    return app.gulp.src(app.path.src.libs, { encoding: false })
        .pipe(app.gulp.dest(app.path.build.libs))
}