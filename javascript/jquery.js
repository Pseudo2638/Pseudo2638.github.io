$(document).ready(function(){

  changeColor(".banner", ["#5AB6B6", "black"], 3000);

  function changeColor(selector, colors, time) {
        /* Params:
         * selector: string,
         * colors: array of color strings,
         * every: integer (in mili-seconds)
         */
        var curCol = 0,
            timer = setInterval(function () {
                if (curCol === colors.length) curCol = 0;
                $(selector).css("background-color", colors[curCol]);
                curCol++;
            }, time);
  }


  var count = 1;

function transition() {

 if(count == 1) {
     $('#changeSrc').attr('src','images/sun.png');
      count = 2;

 } else if(count == 2) {
     $('#changeSrc').attr('src','images/mooon.png');
      count = 1;
 }

}
setInterval(transition, 3000);

     });
