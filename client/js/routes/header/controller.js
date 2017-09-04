/* global angular */

angular.module('cardsOfKurskApp')
  .controller('headerController', function ($scope, $rootScope, $window, userService) {
  	userService.getSessionId()
  		.then(function (res) {
  			$rootScope.SessionId = res.data
  		})

  	userService.getUser()
  		.then(function (res) {
  			$scope.userInfo = res.data
  		})

  	$scope.check = function (user) {
  		userService.login(user.username, user.password)
  		$window.location.reload()
  	}
  })
  