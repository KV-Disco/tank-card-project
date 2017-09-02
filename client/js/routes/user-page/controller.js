/* global angular */

angular.module('cardsOfKurskApp')
  .controller('userController', function ($scope, $rootScope, cardService) {
  	cardService.getUser1()
  		.then(function (res) {
  			console.log(res.data)
  			$scope.userCards = res.data
  		})


  		$scope.pushToTrade = function (userCardId) {
        console.log(userCardId)
  			cardService.pushToTrade(userCardId)
  		}
  })
  