  module.exports = function(grunt) {

    //Load grunt plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    //Initialize tasks
    grunt.initConfig({

      compass: {
        dev: {
          options: {
            config: 'config.rb'
          }
        }
      }, //compass

      uglify: {
        my_target: {  
          files: {
            //'js/script.js': ['_/assets/js/*.js']
          }
        }
      }, //uglify

      watch: {
        options: { 
          livereload: true 
        },

        sass: {
          files: ['adoption-modal/sass/*.scss'],
          tasks: ['compass:dev']
        },

        // js: {
        //   files: ['_/assets/js/*.js'],
        //   tasks: ['uglify']
        // },

        html: {
          files: ['*.html']
        }
        
      } //watch

    }) // InitConfig

    grunt.registerTask('default', 'watch');
    
} //exports