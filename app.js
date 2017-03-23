(function(){
	// body...
	'use strict';
	angular.module('myFirstApp',[])

	.controller('myFirstController', function($scope){
		// body...
		$scope.name = "Isha";
		$scope.sayHello = function() {
			// body...
			return "Hello";
		}
	});
})();
