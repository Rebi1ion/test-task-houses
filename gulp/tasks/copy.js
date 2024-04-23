export const copy = () => {
	return app.gulp.src(app.path.src.files) //получение файлов для копирования
		.pipe(app.gulp.dest(app.path.build.files)); //перенос файлов в папку назначения
}