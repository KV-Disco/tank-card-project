/* global angular */

angular.module('cardsOfKurskApp')
  .controller('registratioController', function ($scope, $http, $window, $location, userService, toastr) {
  	$scope.createNewUser = function (newUser){
  		const {username, password} = newUser

  		userService.newUser(username, password)
  			.then(res => {
  				if (res.data){	
  			           var toast = toastr.warning('Eather this user already exist or your password is to short.', 'Warning')
  			  	}
  			  	else{
              userService.login(username, password)
                .then(() => {
                  $location.path('/')
                  $window.location.reload()
                })
  			  	}
  		})
  	}
  })
  