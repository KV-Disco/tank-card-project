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
  		.then($window.location.reload())
  	}

    $scope.logOut = function () {
      userService.logOut()
       .then($window.location.reload())
    }
  })
  