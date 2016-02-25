/**
 * 有两种方法动态加载js
 * 1.RequireJS
 * 2.jQuery动态加载
 */
//jQuery动态加载
jQuery.getScript("/path/to/myscript.js", function(data, status, jqxhr) {
  /*
   做一些加载完成后需要执行的事情
   */
});

jQuery.getScript("/path/to/myscript.js")
  .done(function() {
    /* 耶，没有问题，这里可以干点什么 */
  })
  .fail(function() {
    /* 靠，马上执行挽救操作 */
  });

//最常用的是：延迟加载一个js插件，而且在加载完成时执行它
jQuery.getScript("jquery.cookie.js")
  .done(function() {
    jQuery.cookie("cookie_name", "value", { expires: 7 });
  });

//有一个非常重要的问题，使用jQuery.getScript时，你需要用一个时间戳字符串跟在需要加载的js地址后面，防止它被缓存。
// 但是，如果你希望这个脚本被缓存，你需要设置全局缓存变量
jQuery.ajaxSetup({
  cache: true
});
//如果你并不想使用全局缓存变量，你也可以使用jQuery.ajax
jQuery.ajax({
  url: "jquery.cookie.js",
  dataType: "script",
  cache: true
}).done(function() {
  jQuery.cookie("cookie_name", "value", { expires: 7 });
});

