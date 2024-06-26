//import { src } from 'gulp';
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	src: {
		js: `${srcFolder}/js/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`, //(**) - проверка файлов в любых вложенных папках, (*.*) - абсолютно любые файлы с любыми расширениями
		svgicons: `${srcFolder}/svgicons/*.svg` //папка для svg спрайтов
	},
	watch: { //автоматически добавляет/изменяет файлы в папке назначения
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
		files: `${srcFolder}/files/**/*.*`,
	}, 
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder, 
	rootFolder: rootFolder,
	ftp: `Mark-Ups`
};