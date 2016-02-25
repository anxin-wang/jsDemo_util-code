/*
1.jQuery Objects as Arrays
*/
// Selecting all the navigation buttons:
var buttons = $('#navigation a.button');

// We can loop though the collection，使用for循环会比$.each()快:
for(var i=0;i<buttons.length;i++){
  console.log(buttons[i]);	// A DOM element, not a jQuery object
}

// We can even slice it:
var firstFour = buttons.slice(0,4);

//检查jQuery集合是否为空
if(buttons){	// This is always true
  // Do something
}

if(buttons.length){ // True only if buttons contains elements
  // Do something
}

/*5.创建一个空的jQuery对象*/
//Sometimes, you might need to create an empty object, and fill it in with the add() method later.
var container = $([]);
container.add(another_element);
//This is also the basis for the quickEach() method that you can use as a faster alternative to the default each().




/*6.选择一个随机的元素*/
/*As with everything else in the library, you can also create your own.
  To do this simply add a new function to the $.expr[':'] object.
  One awesome use case was presented by Waldek Mastykarz on his blog:
  creating a selector for retrieving a random element. You can see a slightly modified version of his code below:*/
(function($){
  var random = 0;

  $.expr[':'].random = function(a, i, m, r) {
    if (i == 0) {
      random = Math.floor(Math.random() * r.length);
    }
    return i == random;
  };

})(jQuery);

// This is how you use it:
$('li:random').addClass('glow');



/*7.使用css hook*/
//The CSS hooks API was introduced to give developers the ability to get and set particular CSS values.
// Using it, you can hide browser specific implementations and expose a unified interface for accessing
// particular properties.
//What is even better, is that people have already built a rich library of supported CSS hooks that you can use for free in your next project.
$.cssHooks['borderRadius'] = {
  get: function(elem, computed, extra){
    // Depending on the browser, read the value of
    // -moz-border-radius, -webkit-border-radius or border-radius
  },
  set: function(elem, value){
    // Set the appropriate CSS3 property
  }
};

// Use it without worrying which property the browser actually understands:
$('#rect').css('borderRadius',5);




/*8.自定义easing效果*/
//you can simply copy the effect you need from the plugin file, and add it to the jQuery.easing object:

  $.easing.easeInOutQuad = function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  };

// To use it:
$('#elem').animate({width:200},'slow','easeInOutQuad');



/*9.The $.proxy()*/
//For example, if you have this markup:
//
//  <div id="panel" style="display:none">
//  <button>Close</button>
//  </div>
//
//  And you try to execute this code:

  $('#panel').fadeIn(function(){
    // this points to #panel
    $('#panel button').click(function(){
      // this points to the button
      $(this).fadeOut();
    });
  });

//You will run into a problem – the button will disappear, not the panel. With $.proxy, you can write it like this:

$('#panel').fadeIn(function(){
  // Using $.proxy to bind this:

  $('#panel button').click($.proxy(function(){
    // this points to #panel
    $(this).fadeOut();
  },this));
});


/*11.Turn your Code into a jQuery Plugin，这样可以提高代码的重用性， limits dependencies and helps you organize your project’s code base*/
(function($){
  $.fn.yourPluginName = function(){
    // Your code goes here
    return this;
  };
})(jQuery);

/*12.设置全局默认的ajax*/
// ajaxSetup is useful for setting general defaults:
$.ajaxSetup({
  url			: '/ajax/',
  dataType	: 'json'
});

$.ajaxStart(function(){
  showIndicator();
  disableButtons();
});

$.ajaxComplete(function(){
  hideIndicator();
  enableButtons();
});

/*
 // Additional methods you can use:
 $.ajaxStop();
 $.ajaxError();
 $.ajaxSuccess();
 $.ajaxSend();
 */



/*13.动画中使用delay()，过一段时间再触发下一个动画*/
// This is wrong:
$('#elem').animate({width:200},function(){
  setTimeout(function(){
    $('#elem').animate({marginTop:100});
  },2000);
});

// Do it like this:
$('#elem').animate({width:200}).delay(2000).animate({marginTop:100});



/*14.使用HTML5 Data Attributes
* */
//<div id="d1" data-role="page" data-last-value="43" data-hidden="true" data-options='{"name":"John"}'>
//</div>
//我们可以通过data()来获取这个html中的data值
$("#d1").data("role");			// "page"
$("#d1").data("lastValue");		// 43
$("#d1").data("hidden");		// true;
$("#d1").data("options").name;	// "John";


/*15.LocalStorage与jQuery
* 如何在不支持HTML5的浏览器中使用localstorage，使用jQuery插件来替代
* */
//Here is an example using the $.jStorage jQuery plugin:

// Check if "key" exists in the storage
var value = $.jStorage.get("key");
if(!value){
  // if not - load the data from the server
  value = load_data_from_server();
  // and save it
  $.jStorage.set("key",value);
}

// Use value
