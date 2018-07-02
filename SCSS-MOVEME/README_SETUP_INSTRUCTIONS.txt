1. Move the SCSS-MOVEME directory up one level and rename it to "scss". This directory should sit side-by-side with the www directory. 
2. Run "npm install" from the working directory of your ionic project (one directory up from www). This will install gulp.js and a few handy tasks, such as gulp-sass and gulp-minify-css. 
3. In the ionic.config.json file, add the JavaScript property "gulpStartupTasks": ["sass", "watch"]

This seems to be working now.
I created a v1 project outside of creator in the CLI and noticed that the ionic.app.scss entry was:
// Include all of Ionic
@import "www/lib/ionic/scss/ionic";
I changed the file that was downloaded as the creator ZIP archive and the error has gone.