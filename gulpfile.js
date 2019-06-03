//引入gulp
const gulp = require('gulp');
//引入图片压缩模块
const imagemin = require('gulp-imagemin');
//引入css压缩模块
const cssmin = require('gulp-clean-css');
//引入js压缩模块
const jsmin = require('gulp-uglify');
//开启服务
const connect = require('gulp-connect');
const gutil = require('gulp-util');
const babel = require('gulp-babel');

//拷贝index.html
gulp.task('copyIndex', () => {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload())
})

//拷贝html
gulp.task('copyHtml', () => {
    gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./dist/html'))
        .pipe(connect.reload())
})

//压缩图片
gulp.task('imgMin', () => {
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))


})
// gulp.task('default', ['copyIndex', 'copyHtml','imgMin']);

//压缩css
gulp.task('cssMin', () => {
    gulp.src('./src/css/*')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'));


})
//压缩css info
gulp.task('cssMininfo', () => {
    gulp.src('./src/css/iconfont/*')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/iconfont'));

})
//压缩js
// gulp.task('jsMin1', () => {
//     gulp.src('./src/js/js/banner.js')
//         .pipe(jsmin())
//         .pipe(gulp.dest('./dist/js'))

// })

gulp.task('babel', () => {
    gulp.src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./dist/js'));
})


gulp.task('jsMin', function () {
    gulp.src('./dist/js/**/*')
        .pipe(jsmin())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); }) //增加这一行
        .pipe(gulp.dest('./dist/js'));

});

//拷贝php
gulp.task('copyPhp', () => {
    gulp.src('./src/php/*')
        .pipe(gulp.dest('./dist/php'))
        .pipe(connect.reload())
})
//拷贝json
gulp.task('copyJson', () => {
    gulp.src('./src/json/*')
        .pipe(gulp.dest('./dist/json'))
        .pipe(connect.reload())
})
//监听
gulp.task('listen', () => {
    gulp.watch('./src/css/*', ['cssMin']);

})

// //开启服务
gulp.task('server', () => {
    connect.server({
        root: './src',
        prot: '8010',
        livereload: true
    })
})
gulp.task('default', ['listen', 'server']);


