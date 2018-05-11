module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      dist: {
        src: ['bower_components/jquery/dist/jquery.js', 'src/js/lightbox.js'],
        dest: 'dist/js/lightbox-plus-jquery.js',
      },
    },
    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**'],
            dest: 'dist/'
          }
        ],
      },
    },
    jshint: {
      all: [
        'src/js/lightbox.js'
      ],
      options: {
        jshintrc: true
      }
    },
    jscs: {
      src: [
        'src/js/lightbox.js'
      ],
      options: {
        config: ".jscsrc"
      }
    },
    uglify: {
      options: {
        preserveComments: 'some',
        sourceMap: true
      },
      dist: {
        files: {
          'dist/js/lightbox.min.js': ['src/js/lightbox.js'],
          'dist/js/lightbox-plus-jquery.min.js': ['dist/js/lightbox-plus-jquery.js']
        }
      }
    },
    watch: {
      jshint: {
        files: ['src/js/lightbox.js'],
        tasks: ['jshint', 'jscs']
      }
    },
    cssmin: {
      minify: {
          src: 'dist/css/lightbox.css',
          dest: 'dist/css/lightbox.min.css'
      }
    }
  });
