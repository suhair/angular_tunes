module.exports = function(grunt) {

  grunt.registerTask("default", "A default task", function(){
  	grunt.log.writeln("Hello Grunt!");
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};