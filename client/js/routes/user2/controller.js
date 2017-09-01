/* global angular */

angular.module('TANKapp')
  .controller('user2Controller', function ($scope, $rootScope, tankService) {
  	tankService.getUser2()
  		.then(function (res) {
  			console.log(res.data)
  			$scope.userCards = res.data
  		})
  })
  