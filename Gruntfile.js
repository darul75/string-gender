module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['src/**/*.js', 'test/**/*.js']
    },
    // UGLIFY TASK
    uglify: {
      task1: {
       options: {
        preserveComments: 'some',
        report: 'min',
        banner: '/*! \n* @license <%= pkg.name %> - v<%= pkg.version %>\n' + 
         '* (c) 2014 Julien VALERY https://github.com/darul75/string-gender\n' +
         '* License: MIT \n*/\n'
        },         
        files: {
            'lib/constants.js': ['src/constants.js'],
            'lib/index.js': ['src/index.js'],
            'lib/tfidf.js': ['src/tfidf.js'],
            'lib/indexer.js': ['src/indexer.js']
        }        
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['src/*.txt'], dest: 'lib/', filter: 'isFile', flatten: true},

          // // includes files within path and its sub-directories
          // {expand: true, src: ['path/**'], dest: 'dest/'},

          // // makes all src relative to cwd
          // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

          // // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'}
        ]
      }
    }
});

  // LOAD PLUGINS
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');  

  // TASK REGISTER
  //grunt.registerTask('default', ['copy','jshint', 'uglify:task1']);
  grunt.registerTask('default', ['copy', 'uglify:task1']);
};
