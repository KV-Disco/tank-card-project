/* global angular */

angular.module('cardsOfKurskApp')
  .controller('headerController', function ($scope, $rootScope, $window, $location, userService, toastr) {
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
  		.then((res) => {
        if(res.data.id){
          $location.path('/')
          $window.location.reload()
        }else{
          toastr.error('The user dont exist or your password is wrong.', 'Something went wrong!!')
        }
      })
  	}

    $scope.logOut = function () {
      userService.logOut()
      .then(() => {
        $location.path('/')
        $window.location.reload()
      })
    }
  })
  