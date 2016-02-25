/**
 * Created by Administrator on 2016/1/25.
 */
//  JSON对象的序列化和反序列化
//jQuery中也有将字符串转为JSON格式的方法jQuery.parseJSON( json )，接受一个标准格式的 JSON 字符串，
// 并返回解析后的 JavaScript （JSON）对象。
// 当然如果有兴趣可以自己封装一个jQuery扩展，jQuery.stringifyJSON(obj)将JSON转为字符串。
var person = {name :'Saad', age : 26, department : {ID : 15, name : "R&D"} };
var stringFromPerson = JSON.stringify(person);
/* stringFromPerson is equal to "{"name":"Saad","age":26,"department":{"ID":15,"name":"R&D"}}"   */
var personFromString = JSON.parse(stringFromPerson);
/* personFromString is equal to person object  */

//舍入小数位数
var num =2.443242342;
num = num.toFixed(4);  // num will be equal to 2.4432

//Floating point problems
//0.1 +0.2 is equal to 0.30000000000000004,You can use toFixed() and toPrecision() to resolve this problem.
0.1 + 0.2 !== 0.3;  // true

var items = [12, 548 ,'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' ,2154 , 119 ];
items.length; // return 11
items.splice(3,1) ;
items.length; // return 10
/* items will be equal to [12, 548, "a", 5478, "foo", 8852, undefined &times; 1, "Doe", 2154,       119]   */
//The delete method should be used to delete an object property.

//Truncate an array using length
var myArray = [12 , 222 , 1000 , 124 , 98 , 10 ];
myArray.length = 4; // myArray will be equal to [12 , 222 , 1000 , 124].
myArray.length = 10; // the new array length is 10
myArray[myArray.length - 1] ; // undefined


//undefined, null, 0, false, NaN, '' (empty string) are all falsy.


//replace函数可接受回调函数
alert('10 13 21 48 52'.replace(/\d+/g,function(match) {
  returnparseInt(match)<30?'*': match;
}));


// use === instead of ==
[10] === 10    // is false
  [10]  == 10    // is true
'10' == 10     // is true
'10' === 10    // is false
  []   == 0     // is true
  [] ===  0     // is false
'' == false   // is true but true == "a" is false
'' ===   false // is false


//能使用运算符就是用运算符,而不是使用函数
var min = a < b ? a b;
A[A.length] = v;
//而不是使用
var min = Math.min(a,b);
A.push(v);


//给ajax设置过期时间setTimeout
var xhr = new XMLHttpRequest ();
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    clearTimeout(timeout);
    // do something with response data
  }
}
var timeout = setTimeout( function () {
  xhr.abort(); // call error callback
}, 60*1000 /* timeout after a minute */ );
xhr.open('GET', url, true);

xhr.send();


//使用switch case代替过多的if else
function getCategory(age) {
  var category = "";
  switch (true) {
    case isNaN(age):
      category = "not an age";
      break;
    case (age >= 50):
      category = "Old";
      break;
    case (age <= 20):
      category = "Baby";
      break;
    default:
      category = "Young";
      break;
  };
  return category;
}
getCategory(5);  // will return "Baby"


//使用setTimeout,setInterval时，传递函数名而不是字符串
setInterval(doSomethingPeriodically, 1000);
setTimeOut(doSomethingAfterFiveSeconds, 5000);
//而不是
setInterval('doSomethingPeriodically()', 1000);
setTimeOut('doSomethingAfterFiveSeconds()', 5000);

//逗号运算符
var a = 0;
var b = ( a++, 99 );
console.log(a);  // a will be equal to 1
console.log(b);  // b is equal to 99


//Check the properties of an object when using a for-in loop
for (var name in object) {
  if (object.hasOwnProperty(name)) {
    // do something with name
  }
}


//Use the map() function method to loop through an array’s items
var squares = [1,2,3,4].map(function (val) {
  return val * val;
});
// squares will be equal to [1, 4, 9, 16]


//Empty an array
var myArray = [12 , 222 , 1000 ];
myArray.length = 0; // myArray will be equal to [].


//Get the max or the min in an array of numbers
var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
var maxInNumbers = Math.max.apply(Math, numbers);
var minInNumbers = Math.min.apply(Math, numbers);


//Append an array to another array
var array1 = [12 , "foo" , {name "Joe"} , -2458];
var array2 = ["Doe" , 555 , 100];
Array.prototype.push.apply(array1, array2);
/* array1 will be equal to  [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100] */


//Transform the arguments object into an array
var argArray = Array.prototype.slice.call(arguments);


//A string trim function
String.prototype.trim = function(){return this.replace(/^\s+|\s+$/g, "");};
//or
if (!String.prototype.trim) {
  String.prototype.trim=function() {return this.replace(/^\s+|\s+$/g, '');};
}
//用法
var str = "  some string    ";
str.trim();
//输出 str = "some string"


//Shuffle an array of numbers
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
numbers = numbers.sort(function(){ return Math.random() - 0.5});
/* the array numbers will be equal for example to [120, 5, 228, -215, 400, 458, -85411, 122205]  */


//Generate an array of numbers with numbers from 0 to max
var numbersArray = [] , max = 100;
for( var i=1; numbersArray.push(i++) < max;);  // numbers = [0,1,2,3 ... 100]


//Generate a random set of alphanumeric characters
function generateRandomAlphaNum(len) {
  var rdmstring = "";
  for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
  return  rdmString.substr(0, len);
}

//Get a random item from an array
var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];
var  randomItem = items[Math.floor(Math.random() * items.length)];

//Get a random number in a specific range
var x = Math.floor(Math.random() * (max - min + 1)) + min;



//Verify that a given argument is a number
function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//Verify that a given argument is an array
function isArray(obj){
  return Object.prototype.toString.call(obj) === '[object Array]' ;
}
Array.isArray(obj); // its a new Array method


//Deal with WebSocket timeout
var timerID = 0;
function keepAlive() {
  var timeout = 15000;
  if (webSocket.readyState == webSocket.OPEN) {
    webSocket.send('');
  }
  timerId = setTimeout(keepAlive, timeout);
}
function cancelKeepAlive() {
  if (timerId) {
    cancelTimeout(timerId);
  }
}


//An HTML escaper function
function escapeHTML(text) {
  var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"};
  return text.replace(/[<>&"]/g, function(character) {
    return replacements[character];
  });
}


//Create an object whose prototype is a given object
function clone(object) {
  function OneShotConstructor(){};
  OneShotConstructor.prototype= object;
  return new OneShotConstructor();
}
clone(Array).prototype ;  // []

//Use logical AND/ OR for conditions
var foo = 10;
foo == 10 && doSomething(); // is the same thing as if (foo == 10) doSomething();
foo == 5 || doSomething(); // is the same thing as if (foo != 5) doSomething();
//The logical AND could also be used to set a default value for function argument.
Function doSomething(arg1){
  Arg1 = arg1 || 10; // arg1 will have 10 as a default value if it’s not already set
}

//Javascript数组转换为CSV格式
var fruits = ['apple', 'peaches', 'oranges', 'mangoes'];
var str = fruits.valueOf();
//输出：apple,peaches,oranges,mangoes
//要注意的是，如果想不使用逗号分割，比如用｜号分割，则请使用join方法
var fruits = ['apple', 'peaches', 'oranges', 'mangoes'];
var str = fruits.join("|");
//输出： apple|peaches|oranges|mangoes

//将CSV格式重新转换回Javscript数组
var str = "apple, peaches, oranges, mangoes";
var fruitsArray = str.split(",");


//根据索引移除数组中的某个元素
function removeByIndex(arr, index) {
  arr.splice(index, 1);
}
test = new Array();
test[0] = 'Apple';
test[1] = 'Ball';
test[2] = 'Cat';
test[3] = 'Dog';
alert("Array before removing elements: "+test);
removeByIndex(test, 2);
alert("Array after removing elements: "+test);

//根据元素的值移除数组元素中的值
function removeByValue(arr, val) {
  for(var i=0; i<arr.length; i++) {
    if(arr[i] == val) {
      arr.splice(i, 1);
      break;
    }
  }
}
var somearray = ["mon", "tue", "wed", "thur"]
removeByValue(somearray, "tue");
//somearray 将会有的元素是 "mon", "wed", "thur"

//更好的方式是使用prototype的方法去实现
Array.prototype.removeByValue = function(val) {
  for(var i=0; i<this.length; i++) {
    if(this[i] == val) {
      this.splice(i, 1);
      break;
    }
  }
}
//..
var somearray = ["mon", "tue", "wed", "thur"]
somearray.removeByValue("tue");


//去掉Javscript数组中的重复元素
function removeDuplicates(arr) {
  var temp = {};
  for (var i = 0; i < arr.length; i++)
    temp[arr[i]] = true;

  var r = [];
  for (var k in temp)
    r.push(k);
  return r;
}

//用法
var fruits = ['apple', 'orange', 'peach', 'apple', 'strawberry', 'orange'];
var uniquefruits = removeDuplicates(fruits);
//输出 uniquefruits ['apple', 'orange', 'peach', 'strawberry'];


//通过字符串指定的方式动态调用某个方法
var strFun = "someFunction"; //someFunction 为已经定义的方法名
var strParam = "this is the parameter"; //要传入方法的参数
var fn = window[strFun];

//调用方法传入参数
fn(strParam);



//产生1到N的随机数
var random = Math.floor(Math.random() * N + 1);

//产生1到10之间的随机数
var random = Math.floor(Math.random() * 10 + 1);

//产生1到100之间的随机数
var random = Math.floor(Math.random() * 100 + 1);


//捕捉浏览器关闭的事件,编写onbeforeunload()事件的代码即可
<script language="javascript">
  function fnUnloadHandler() {

    alert("Unload event.. Do something to invalidate users session..");
  }
  </script>
  <body onbeforeunload="fnUnloadHandler()">
………
</body>


//检查是否按了回退键
window.onbeforeunload = function() {
  return "You work will be lost.";
};


//对URL进行编码
var myOtherUrl = "http://example.com/index.html?url=" + encodeURIComponent(myUrl);

//Javascript中的重定向
window.location.href = <a href="http://viralpatel.net">http://viralpatel.net</a>;



//检查字符串中是否包含其他字符串
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(obj, start) {
    for (var i = (start || 0), j = this.length; i < j; i++) {
      if (this[i] === obj) { return i; }
    }
    return -1;
  }
}
if (!String.prototype.contains) {
  String.prototype.contains = function (arg) {
    return !!~this.indexOf(arg);
  };
}
//在上面的代码中重写了indexOf方法并定义了contains方法，使用的方法如下：
var hay = "a quick brown fox jumps over lazy dog";
var needle = "jumps";
alert(hay.contains(needle));


//完全禁止使用后退键
<SCRIPT type="text/javascript">
  window.history.forward();
function noBack() { window.history.forward(); }
</SCRIPT>
</HEAD>
<BODY onload="noBack();" onpageshow="if (event.persisted) noBack();" onunload="">

// 检查表单数据是否改变
//有的时候，需要检查用户是否修改了一个表单中的内容，则可以使用下面的技巧，其中如果修改了表单的内容则返回true，没修改表单的内容则返回false。
  function formIsDirty(form) {
    for (var i = 0; i < form.elements.length; i++) {
      var element = form.elements[i];
      var type = element.type;
      if (type == "checkbox" || type == "radio") {
        if (element.checked != element.defaultChecked) {
          return true;
        }
      }
      else if (type == "hidden" || type == "password" ||
        type == "text" || type == "textarea") {
        if (element.value != element.defaultValue) {
          return true;
        }
      }
      else if (type == "select-one" || type == "select-multiple") {
        for (var j = 0; j < element.options.length; j++) {
          if (element.options[j].selected !=
            element.options[j].defaultSelected) {
            return true;
          }
        }
      }
    }
    return false;
  }

window.onbeforeunload = function(e) {
  e = e || window.event;
  if (formIsDirty(document.forms["someForm"])) {
    // IE 和 Firefox
    if (e) {
      e.returnValue = "You have unsaved changes.";
    }
    // Safari 浏览器
    return "You have unsaved changes.";
  }
};



//删除用户多选框中选择的项目
//下面提供的技巧，是当用户在下拉框多选项目的时候，当点删除的时候，可以一次删除它们
function selectBoxRemove(sourceID) {
  //获得listbox的id
  var src = document.getElementById(sourceID);
  //循环listbox
  for(var count= src.options.length-1; count >= 0; count--) {
    //如果找到要删除的选项，则删除
    if(src.options[count].selected == true) {
      try {
        src.remove(count, null);
      } catch(error) {
        src.remove(count);
      }
    }
  }
}

//Listbox中的全选和非全选
//如果对于指定的listbox，下面的方法可以根据用户的需要，传入true或false,分别代表是全选listbox中的所有项目还是非全选所有项目
function listboxSelectDeselect(listID, isSelect) {
  var listbox = document.getElementById(listID);
  for(var count=0; count < listbox.options.length; count++) {
    listbox.options[count].selected = isSelect;
  }
}


//在Listbox中项目的上下移动
function listbox_move(listID, direction) {

  var listbox = document.getElementById(listID);
  var selIndex = listbox.selectedIndex;

  if(-1 == selIndex) {
    alert("Please select an option to move.");
    return;
  }

  var increment = -1;
  if(direction == 'up')
    increment = -1;
  else
    increment = 1;

  if((selIndex + increment) < 0 ||
    (selIndex + increment) > (listbox.options.length-1)) {
    return;
  }

  var selValue = listbox.options[selIndex].value;
  var selText = listbox.options[selIndex].text;
  listbox.options[selIndex].value = listbox.options[selIndex + increment].value
  listbox.options[selIndex].text = listbox.options[selIndex + increment].text

  listbox.options[selIndex + increment].value = selValue;
  listbox.options[selIndex + increment].text = selText;

  listbox.selectedIndex = selIndex + increment;
}
//..
//..

listbox_move('countryList', 'up'); //move up the selected option
listbox_move('countryList', 'down'); //move down the selected option



//在两个不同的Listbox中移动项目
//如果在两个不同的Listbox中，经常需要在左边的一个Listbox中移动项目到另外一个Listbox中去，下面是相关代码
function listbox_moveacross(sourceID, destID) {
  var src = document.getElementById(sourceID);
  var dest = document.getElementById(destID);

  for(var count=0; count < src.options.length; count++) {

    if(src.options[count].selected == true) {
      var option = src.options[count];

      var newOption = document.createElement("option");
      newOption.value = option.value;
      newOption.text = option.text;
      newOption.selected = true;
      try {
        dest.add(newOption, null); //Standard
        src.remove(count, null);
      }catch(error) {
        dest.add(newOption); // IE only
        src.remove(count);
      }
      count--;
    }
  }
}
//..
//..
listbox_moveacross('countryList', 'selectedCountryList');


//快速初始化Javscript数组
var numbers = [];
for(var i=1; numbers.push(i++)<100;);
//numbers = [0,1,2,3 ... 100]
