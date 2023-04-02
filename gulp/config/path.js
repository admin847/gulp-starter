const srcFolder = './src';
const distFolder = './dist';

export const path = {
  src: {
    html: [`${ srcFolder }/*.html`, `!${ srcFolder }/_*.html`],
    styles: `${ srcFolder }/styles/main.scss`,
    js: `${ srcFolder }/js/**/*.js`,
    fonts: `${ srcFolder }/fonts/**/*.*`,
    img: `${ srcFolder }/img/**/*.*`,
    libs: `${ srcFolder }/libs/**/*.*`,
  },
  build: {
    html: distFolder,
    styles: `${ distFolder }/styles`,
    js: `${ distFolder }/js`,
    fonts: `${ distFolder }/fonts`,
    img: `${ distFolder }/img`,
    libs: `${ distFolder }/libs`,
  },
  watch: {
    html: `${ srcFolder }/**/*.html`,
    styles: `${ srcFolder }/**/*.scss`,
    js: `${ srcFolder }/**/*.js`,
    img: `${ srcFolder }/img/**/*.*`,
    libs: `${ srcFolder }/libs/**/*.*`,
  },
  clean: distFolder,
  srcFolder: srcFolder,
  distFolder: distFolder,
};