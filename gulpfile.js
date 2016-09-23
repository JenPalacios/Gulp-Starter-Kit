//Include Gulp
var gulp          = require('gulp');

//Include Plugins
var browserSync   = require('browser-sync').create();
    autoprefixer  = require('gulp-autoprefixer');
    cssnano       = require('gulp-cssnano');
    sass          = require('gulp-sass');
    notify        = require('gulp-notify');
    uglify        = require('gulp-uglify');
    rename        = require('gulp-rename');
    concat        = require('gulp-concat');
    opn           = require('opn');

// Compile sass, minify css with autoprefixer.
gulp.task('sass', function() {
  // scss file location
  return gulp.src('frontend/sass/*.scss')
    //compiles SASS and returns error messages if something went wrong
    .pipe(sass().on('error', sass.logError))
    //autoprefixer
    .pipe(autoprefixer('last 2 version'))
    // minifies css
    .pipe(cssnano())
    // where to save your new minified css file
    .pipe(gulp.dest('build/css/'))
    // reloads browser automatically
    .pipe(browserSync.stream());
    // notifies you when the task has been successfully completed.
    // .pipe(notify({ message: 'sass task complete' }));
});

//Minify and Concat JS
gulp.task('compressJS', function(){
  // javascript files location -- remember to change file names
  return gulp.src(['frontend/js/file1.js', 'frontend/js/file2.js'])
    // concats JS and creates a new file called all.js
    .pipe(concat('all.js'))
    // where to save all.js
    .pipe(gulp.dest('frontend/js/'))
    //renames all.js into main.min.js -- prepares file for minification
    .pipe(rename('main.min.js'))
    //minifies JS and returns error messages if something went wrong
    .pipe(uglify()).on('error', function(e){
            console.log(e);
         })
    // where to save your new minified js file
    .pipe(gulp.dest('build/js'))
    // reloads browser automatically
    .pipe(browserSync.stream())
    // notifies you when the task has been successfully completed.
    .pipe(notify({message: 'Javascript has been concatenated and minified!'}));
});

// Watches files for changes
gulp.task('watch', ['sass'], function() {
  browserSync.init({
    logSnippet: false
  });

  opn('http://changeme.local');

  //Watch SASS files and if there is a change runs 'sass' task
  gulp.watch('frontend/sass/*.scss', ['sass']);

  //Watch HTML files and if there is a change reloads the browser
  gulp.watch("*.html").on('change', browserSync.reload);

  //Watch JS files and if there is a change runs 'compressJS' task
  gulp.watch('frontend/js/*.js', ['compressJS']);

});

//Tells the gulp task to run watch. Just type gulp into your terminal
gulp.task('default', ['watch']);
