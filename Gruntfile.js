module.exports = function(grunt) {

	var config = {
		jsDir: 'src/javascripts',
		cssDir: 'src/stylesheets',
		outputDir: 'src/build',
	};

	// Project configuration.
	grunt.initConfig({

		config: config,

		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n\n'
			},
			build: {
				src: ['src/javascripts/*.js'],
				dest: '<%= config.outputDir %>/javascripts/<%= pkg.name %>.min.js'
			}
		},
		sass: {
			dev: {
				files: {
					'<%= config.cssDir %>/css/style.css' : '<%= config.cssDir %>/main.scss'
				},
				options: {
					style: 'expanded',
					lineNumbers: true
				}
			},
			dist: {
				files: {
					'<%= config.outputDir %>/stylesheets/style.css' : '<%= config.cssDir %>/style.scss'
				},
				options: {
					style: 'compressed',
					sourcemap: 'none'
				}
			}
		},
		watch: {
			// css: {
			// 	files: '**/*.scss',
			// 	tasks: ['sass']
			// }

			css: {
				files: '<%= config.cssDir %>/**/*.{scss,sass}',
				tasks: ['sass:dev']
			}
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Create tasks.
	grunt.registerTask('default', ['sass:dev']); // Default task. Run with 'grunt'
	grunt.registerTask('build', ['sass:dist', 'concat']); // Run with 'grunt build'
	grunt.registerTask('watcher', ['watch']); // Run with 'grunt watcher'
};
