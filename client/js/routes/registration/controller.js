/* global angular */

angular.module('cardsOfKurskApp')
  .controller('registratioController', function ($scope, $http, userService, toastr) {
  	$scope.createNewUser = function (newUser){
  		const {username, password} = newUser

  		userService.newUser(username, password)
  			.then(res => {
  				if (res.data){	
  			           var toast = toastr.warning('Eather this user already exist or your password is to short.');
  			
  			           toastr.refreshTimer(toast, 1000);
  			  	}
  			  	else{
  			  		$window.location.reload()
  			  	}
  		})
  	}
  })
  