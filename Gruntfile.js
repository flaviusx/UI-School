module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),      
    });

    grunt.registerTask('init:dev', []);
    
    grunt.registerTask('build:dev', []);
    grunt.registerTask('build:prod', []);
};