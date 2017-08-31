/* global angular */

angular.module('TANKapp')
  .controller('userController', function ($scope, $rootScope, tankService) {
  	tankService.getUser1()
  		.then(function (res) {
  			console.log(res.data)
  			$scope.tanks = res.data
  		})
  })
  