'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DancesCtrl
 * @description
 * # DancesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DancesCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {

	console.log('DancesController loaded...');

	$scope.getDances = function(){
		$http.get('http://localhost:3000/dances').then(function(response){
			$scope.dances = response.data;
      console.log(response.data);
		});
	}
}]);
