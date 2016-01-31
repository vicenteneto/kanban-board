var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var options = {
    script: 'bin/www',
    ext: 'js html',
    env: {'NODE_ENV': 'development'},
    watch: ['bin/*', 'app/*', 'app.js']
};

gulp.task('default', function () {
    nodemon(options)
        .on('restart', onRestart);
});

function onRestart() {
    console.log('Restarted!')
}
