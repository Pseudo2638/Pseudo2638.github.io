myApp.controller('indexViewController',['$http','$scope', function($http,$scope){

  this.loadIndex = function()
  {
    console.log('hello');
    var typed = new Typed('#changeText', {
    strings: ["Namaste ! <br> My name is Aditya Sudhakar. <br> I'm a developer from India. <br> I have specialization in MEAN Stack as well as Android Developement. <br> Feel free to reach out to me."],
    typeSpeed: 40,
    loop: !0
    });


  }
}]);
