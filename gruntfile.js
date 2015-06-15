module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('node_modules/grunt-svg-toolkit/package.json'),

        svgtoolkit: {
            dist: {
                options: {
                    //generatePNGs: true,
                    //style: 'src/css/themes/blue.css',
                    //colorize: '#808000',
                    debug: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'src/icons/',
                        src: '**/*.svg',
                        dest: 'dist/icons'
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', []);

    grunt.loadNpmTasks('grunt-svg-toolkit');
};