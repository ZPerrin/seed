var myApp = angular.module('myApp', [
	'ngRoute'
]);

myApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
   
    // this will remove the # from angular routes if the browser is html5 complient; but it doesn't play well with deeplinking
    // need to dig into this a bit more
    //$locationProvider.html5Mode(true);

    $routeProvider.when('/partial', {
    	templateUrl: 'partials/partial.html'
    }).otherwise({
		  redirectTo: '/'
   	});
}]);