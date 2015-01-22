module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

};



  module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        //�����Ǹ���JSHintĬ�����õ�ѡ��
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};

//配置Task
grunt.initConfig({
  concat: {
    // 这里是concat任务的配置信息。
  },
  uglify: {
    // 这里是uglify任务的配置信息
  },
  // 任意数据。
  my_property: 'whatever',
  my_src_files: ['foo/*.js', 'bar/*.js'],
});



//任务配置和目标
/*
 同时指定任务（task）和目标（target），例如grunt concat:foo或者grunt concat:bar，
 将只会处理指定目标（target）的配置，而运行grunt concat将遍历所有目标（target）并依次处理。
 注意，如果一个任务使用grunt.task.renameTask重命名过，Grunt将在配置对象中查找以新的任务名命名的属性。
 */
grunt.initConfig({
  concat: {
    foo: {
      // concat task "foo" target options and files go here.
    },
    bar: {
      // concat task "bar" target options and files go here.
    },
  },
  uglify: {
    bar: {
      // uglify task "bar" target options and files go here.
    },
  },
});


//对于指定的配置，这里有一个案例演示了如果通过grunt log:foo运行Grunt，它会输出foo: 1,2,3；
// 如果通过grunt log:bar来运行Grunt， 它会输出bar: hello world。
// 然而如果通过grunt log运行Grunt, 它会输出foo: 1,2,3，然后是bar: hello world，最后是baz: false(任务目标会按照指定的顺序进行处理)。

grunt.initConfig({
  log: {
    foo: [1, 2, 3],
    bar: 'hello world',
    baz: false
  }
});

grunt.registerMultiTask('log', 'Log stuff.', function() {
  grunt.log.writeln(this.target + ': ' + this.data);
});

//传参：它仅仅执行指定的任务函数，并传递任何使用冒号分割的参数作为函数的参数。
/*
 如果执行 grunt foo:testing:123，将输出日志 foo, testing 123。
 如果执行这个任务时不传递参数，只是执行 grunt foo，那么将输出日志 foo, no args。
 */
grunt.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
  if (arguments.length === 0) {
    grunt.log.writeln(this.name + ", no args");
  } else {
    grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
  }
});

//自定义任务：
grunt.registerTask('default', 'My "default" task description.', function() {
  grunt.log.writeln('Currently running the "default" task.');
});

//在一个任务内部，执行其他的任务
grunt.registerTask('foo', 'My "foo" task.', function() {
  // Enqueue "bar" and "baz" tasks, to run after "foo" finishes, in-order.
  grunt.task.run('bar', 'baz');
  // Or:
  grunt.task.run(['bar', 'baz']);
});

//异步任务
grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function() {
  // Force task into async mode and grab a handle to the "done" function.
  var done = this.async();
  // Run some sync stuff.
  grunt.log.writeln('Processing task...');
  // And some async stuff.
  setTimeout(function() {
    grunt.log.writeln('All done!');
    done();
  }, 1000);
});

grunt.registerTask('asyncme', 'My asynchronous task.', function() {
  var done = this.async();
  doSomethingAsync(done);
});

//任务也可以访问它们自身名称和参数
// 用法：
// grunt foo
// grunt foo:bar
//   logs: "foo", undefined, undefined
//   logs: "foo", "bar", undefined
// grunt foo:bar:baz
//   logs: "foo", "bar", "baz"
grunt.registerTask('foo', 'My "foo" task.', function(a, b) {
  grunt.log.writeln(this.name, a, b);
});

//如果记录到任何错误，那么任务就会失败。
grunt.registerTask('foo', 'My "foo" task.', function() {
  if (failureOfSomeKind) {
    grunt.log.error('This is an error message.');
  }

  // 如果这个任务出现错误则返回false
  if (ifErrors) { return false; }

  grunt.log.writeln('This is the success message');
});

//当任务失败时，所有后续任务都将终止，除非指定 --force
grunt.registerTask('foo', 'My "foo" task.', function() {
  // Fail synchronously.
  return false;
});

grunt.registerTask('bar', 'My "bar" task.', function() {
  var done = this.async();
  setTimeout(function() {
    // Fail asynchronously.
    done(false);
  }, 1000);
});


//任务依赖
// 用法：
// grunt foo bar
//   没有输出，因为"foo"失败。
// grunt bar
//   没有输出，因为"foo"从未运行。
grunt.registerTask('foo', 'My "foo" task.', function() {
  return false;
});

grunt.registerTask('bar', 'My "bar" task.', function() {
  // 如果"foo"任务运行失败或者没有运行则任务失败。
  grunt.task.requires('foo');
  // 如果"foo"任务运行成功则执行这里的代码。
  grunt.log.writeln('Hello, world.');
});

//如果任务需要的配置属性不存在，其也可能失败。
grunt.registerTask('foo', 'My "foo" task.', function() {
  // 如果缺少"meta.name"配置属性则任务失败。
  grunt.config.requires('meta.name');
  // 如果缺少"mata.name"配置属性则任务同样失败。
  grunt.config.requires(['meta', 'name']);
  // 根据情况记录日志。
  grunt.log.writeln('This will only log if meta.name is defined in the config.');
});


//任务还可以访问配置属性
grunt.registerTask('foo', 'My "foo" task.', function() {
  // 记录属性值，如果属性未定义（undefined）则返回null。
  grunt.log.writeln('The meta.name property is: ' + grunt.config('meta.name'));
  // 同样的记录属性值，如果属性未定义（undefined）则返回null。
  grunt.log.writeln('The meta.name property is: ' + grunt.config(['meta', 'name']));
});


//导入外部数据
//在下面的Gruntfile中，项目的元数据是从package.json文件中导入到Grunt配置中的
//Grunt有grunt.file.readJSON和grunt.file.readYAML两个方法分别用于引入JSON和YAML数据。
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    dist: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'dist/<%= pkg.name %>.min.js'
    }
  }
});


//过滤

grunt.initConfig({
  clean: {
    foo: {
      src: ['tmp/**/*'],
      filter: 'isFile',
    },
  },
});

//创建你自己的filter函数，根据文件是否匹配来返回true或者false
grunt.initConfig({
  clean: {
    foo: {
      src: ['tmp/**/*'],
      filter: function(filepath) {
        return (grunt.file.isDir(filepath) && require('fs').readdirSync(filepath).length === 0);
      },
    },
  },
});