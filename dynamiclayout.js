/**
 * Created by Administrator on 2015/12/16.
 */

function dynamicLayout(){
  var browserWidth = getBrowserWidth();    //Load Thin CSS Rules
  if (browserWidth < 750){
    changeLayout("thin");
  }
  //Load Wide CSS Rules
  if ((browserWidth >= 750) && (browserWidth <= 950)){
    changeLayout("wide");
  }
  //Load Wider CSS Rules
  if (browserWidth > 950){
    changeLayout("wider");
  }
}


function getBrowserWidth(){
  if (window.innerWidth){
    return window.innerWidth;}
  else if (document.documentElement && document.documentElement.clientWidth != 0){
    return document.documentElement.clientWidth;    }
  else if (document.body){return document.body.clientWidth;}
  return 0;
}






var defaultSheet = document.styleSheets[0];

defaultSheet.insertRule("#container{width:500px;}");




totalRules = defaultSheet.cssRules.length;

lastRule = defaultSheet.cssRules[totalRules - 1];

defaultSheet.addImport("/css/wide.css", lastRule);




//addEvent() by John Resig

function addEvent( obj, type, fn ){
  if (obj.addEventListener){
    obj.addEventListener( type, fn, false );
  }
  else if (obj.attachEvent){
    obj["e"+type+fn] = fn;
    obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); }
    obj.attachEvent( "on"+type, obj[type+fn] );
  }
} //Run dynamicLayout function when page loads and when it resizes.
addEvent(window, 'load', dynamicLayout);
addEvent(window, 'resize', dynamicLayout);
