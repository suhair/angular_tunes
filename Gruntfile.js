module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      uses_defaults: {}
    },
    watch:{
    	
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", "A default task", function(){
  	grunt.log.writeln("Hello Grunt!");
  });

  grunt.registerTask("runserver", ["connect", "watch"]);

  
};