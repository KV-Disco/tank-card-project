/* global angular */

angular.module('cardsOfKurskApp')
  .controller('registratioController', function ($scope, $http, userService, toastr) {
  	$scope.createNewUser = function (newUser){
  		const {username, password} = newUser

  		userService.newUser(username, password)
  			.then(res => {
  				if (res.data){	
  			           var toast = toastr.warning('This user already exist.');
  			
  			           toastr.refreshTimer(toast, 1000);
  			  	}
  		})
  	}
  })
  