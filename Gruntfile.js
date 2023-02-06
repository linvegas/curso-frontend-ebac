module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      production: {
        options: { compress: true },
        files: { 'dist/styles/main.min.css': 'src/styles/main.less' }
      }
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'CSS',
              replacement: './styles/main.min.css'
            },
            {
              match: 'JS',
              replacement: './scripts/main.min.js'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['src/index.html'],
            dest: 'dist/'
          }
        ]
      }
    },
    clean: ['prebuild'],
    uglify: {
      target: {
        files: { 'dist/scripts/main.min.js': 'src/scripts/main.js' }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-replace')

  grunt.registerTask("build", ['less:production', 'replace:dist', 'uglify', 'clean'])
}
