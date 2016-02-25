require.config({
  baseUrl: 'js/lib',
  paths: {
    jquery: 'jquery.min'
  }
});
require(["jquery"],function($){
  $(".test").each(function(){
    console.log($(this).text());
  })
})
