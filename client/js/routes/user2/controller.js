/* global angular */

angular.module('TANKapp')
  .controller('user2Controller', function ($scope, $rootScope, tankService) {
  	tankService.getUser2Tanks()
  		.then(function (res) {
  			$scope.tanks = res.data.tanks
  		})
  })
  