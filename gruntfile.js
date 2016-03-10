module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist', '.tmp'],

        connect: {
            main: {
                options: {
                    port: 9001,
                    hostname: '0.0.0.0',
                }
            },
            dist: {
                options: {
                    port: 8282,
                    hostname: '0.0.0.0',
                    base: 'dist'
                }
            }
        },
        replace: {
            restURL: {
                src: ['.tmp/concat/js/app.min.js'],
                //src: ['app/app.constant.js'],
                overwrite: true,                 // overwrite matched source files
                replacements: [{
                    from: /\/\*@restURL\*\/"(.*)"/g,
                    to: function (matchedWord, index, fullText, regexMatches) {
                        var restURL = grunt.option('restURL');
                        if (restURL == null) {
                            return matchedWord;
                        }
                        return '"' + restURL + '"';
                    }
                }]
            },
        },
        less: {
            main: {
                options: {
                    paths: ["app/assets/css"]
                },
                files: {
                    "app/assets/css/app.css": "app/assets/css/less/app.less"
                }
            },
        },
        watch: {
            main: {
                options: {
                    livereload: true,
                    livereloadOnError: false,
                    spawn: false
                },
                files: [createFolderGlobs(['*.js', '*.less', '*.html']), '!_SpecRunner.html', '!.grunt'],
                tasks: [] //all the tasks are run dynamically during the watch event handler
            },
            less: {
                files: "app/assets/css/less/*",
                tasks: ["less"]
            },
        },
        ngAnnotate: {
            main: {
                src: '.tmp/concat/js/app.min.js',
                dest: '.tmp/concat/js/app.min.js'
            }
        },
        filerev: {
            dist: {
                src: [
                    'dist/js/*.js',
                    'dist/css/*.css',
                ]
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'app/',
                src: ['modules/**/*.html', 'assets/images/**', 'assets/rs-plugin/**', 'index.html'],
                dest: 'dist/'
            },

            fonts: {
                expand: true,
                cwd: 'app/',
                flatten: true,
                filter: 'isFile',
                src: ['../bower_components/**/fonts/**'],
                dest: 'dist/fonts'
            }
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'dist'
            }
        },

        usemin: {
            html: ['dist/index.html']
        },

    });

    grunt.registerTask('hello', function () {
        grunt.log.writeln('Hello World');
    });

    grunt.registerTask('default', ['watch:less']);

    grunt.registerTask('dist', [
        'clean',
        'less',
        'copy',
        'useminPrepare',
        'concat:generated',
        'replace',
        'cssmin:generated',
        'ngAnnotate',
        'uglify:generated',
        'filerev',
        'usemin'
    ]);

    // Debug version run on http://localhost:9001/app/
    // Minimized/Uglified run on http://localhost:8282
    grunt.registerTask('serve', ['connect', 'watch:main']);
}

//Using exclusion patterns slows down Grunt significantly
//instead of creating a set of patterns like '**/*.js' and '!**/node_modules/**'
//this method is used to create a set of inclusive patterns for all subdirectories
//skipping node_modules, libs, dist, and any .dirs
//This enables users to create any directory structure they desire.
var createFolderGlobs = function (fileTypePatterns) {
    fileTypePatterns = Array.isArray(fileTypePatterns) ? fileTypePatterns : [fileTypePatterns];
    var ignore = ['node_modules', 'bower_components', 'libs', 'dist', 'temp'];
    var fs = require('fs');
    return fs.readdirSync(process.cwd())
        .map(function (file) {
            if (ignore.indexOf(file) !== -1 ||
                file.indexOf('.') === 0 || !fs.lstatSync(file).isDirectory()) {
                return null;
            } else {
                return fileTypePatterns.map(function (pattern) {
                    return file + '/**/' + pattern;
                });
            }
        })
        .filter(function (patterns) {
            return patterns;
        })
        .concat(fileTypePatterns);
};