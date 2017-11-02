
// This is the '$routeProvider' directive which defines the route and the view to be displayed //
// This has to be declared as a directive in angular module //

myApp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  // Default Page or Home page //
  // This view will load first when the website url is hit //
  // '/' is the one which defines the route to be home page here //
  .when('/',{
    templateUrl : "views/index-view.html" , // Index page view //
    controller : "indexViewController",  // Controller for index view //
    controllerAs : "myIndexView" // Name for index ciew //
  })
  // If wrong route is called, This is displayed //
  .otherwise({
       template: '<h1> Not Found </h1>'  // If url is mistyped or wrongly configured, it prints not found in the ng-view //
     });
}]);
