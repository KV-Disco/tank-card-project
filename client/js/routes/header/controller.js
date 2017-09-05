/* global angular */

angular.module('cardsOfKurskApp')
  .controller('headerController', function ($scope, $rootScope, $window, $location, userService) {
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
  		.then(() => {
        $location.path('/')
        $window.location.reload()
      })
  	}

    $scope.logOut = function () {
      userService.logOut()
       .then($window.location.reload())
    }
  })
  