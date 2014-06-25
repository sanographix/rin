module.exports = function(grunt){
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-pngmin');

    grunt.initConfig({

        // 画像パス
        paths: {
            img: 'images/',
            imgdist: 'dist/images/'
        },

        // grunt-contrib-imagemin
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.img %>',
                    src: '**/*.{jpg,gif}',
                    dest: '<%= paths.imgdist %>'
                }]
            }
        },

        // pngmin
        pngmin: {
          compile: {
            options: {
              ext: '.png'
            },
            files: [{
              expand: true,
              cwd: '<%= paths.img %>',
              src: '**/*.png',
              dest: '<%= paths.imgdist %>'
            }]
          }
        },

        less : {
            // 作業のラベルは"dist"にしてみます
            dist : {
                // オプションの指定
                options : {
                    compress : true
                },
                // コンパイルするファイルの指定。左辺には出力先のCSSファイル、右辺には元となるLessファイルへのパス
                files : {
                    "css/style.css" : "css/style.less"
                }
            }
        },

        watch : {

            img : {
                files: ['<%= paths.img %>**/*.{png,jpg,gif}'],
                tasks: ['imagemin', 'tinypng']
            },

            // ラベルは"less"にしてみます
            less : {
                // "files"セクションで監視するファイルの条件を指定
                files : [
                    "**/*.less"
                ],
                // "tasks"セクションで実行するタスクを指定
                tasks : [
                    "less:dist"
                ]
            }

        }

    });

    // grunt コマンドでなにやるか指定
    grunt.registerTask('default', ['less:dist','watch', 'imagemin', 'pngmin']);

};