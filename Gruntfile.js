var hostname = 'localhost';

module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
  	connect: {
      devserver: {
        options: {
          hostname: hostname,
          keepalive: true
        }
      },
      testserver: {
        options: {
          hostname: hostname,
          keepalive: false
        }
      }
    },
  });

  grunt.registerTask('default', 'connect:devserver');
}