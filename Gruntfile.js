module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n\n'
			},
			build: {
				src: ['src/javascripts/*.js'],
				dest: 'src/build/javascripts/<%= pkg.name %>.min.js'
			}
		},
		sass: {
			dist: {
				files: {
					'src/build/stylesheets/style.css' : 'src/stylesheets/main.scss'
				},
				options: {
					style: 'nested',
					sourcemap: false
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'concat']);
	grunt.registerTask('watch', ['watch']);
};
