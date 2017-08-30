/* global angular */

angular.module('TANKapp')
  .controller('userController', function ($scope, $rootScope, tankService) {
  	tankService.getUser1Tanks()
  		.then(function (res) {
  			$scope.tanks = res.data.tanks
  		})
  })
  