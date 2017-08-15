var myApp = angular.module('myApp', ['ngStorage']);
myApp.controller('AppCtrl', ['$scope',  '$http', function($scope, $http) {
	$http.get('/recom').then(function(response){
		console.log("get data in controller");
   // You will get the above response here  in response.data
   $scope.title = response.data.title;
   $scope.release = response.data.release;
   $scope.duration = response.data.duration;
   $scope.genre = response.data.genre;
   $scope.synopsis = response.data.synopsis;
   console.log("data = " + response.data.title);

  });


	
  
	
}]);

