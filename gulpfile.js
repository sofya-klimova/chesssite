//основной модуль
import gulp from "gulp";
//импорт путей
import { path } from "./gulp/config/path.js";
//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//передача значений в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path:path,
    gulp: gulp,
    plugins: plugins
}

//импорт файла задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";

export { svgSprive }

//наблюдатель за изменениями файлов

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}


//последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Основные задачи
const myTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));


//построение сценариев выполнения задач

const dev = gulp.series(reset, myTasks, gulp.parallel(watcher, server));
const deployZIP = gulp.series(reset, myTasks, zip);
const deployFTP = gulp.series(reset, myTasks, ftp);

//экспорт сценариев
export { deployZIP };
export { deployFTP };


//выполнение сценария по умолчанию
gulp.task('default', dev);
