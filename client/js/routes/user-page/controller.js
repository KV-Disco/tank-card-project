/* global angular */

angular.module('cardsOfKurskApp')
  .controller('userController', function ($scope, $rootScope, cardService) {
  	cardService.getUser1()
  		.then(function (res) {
  			console.log(res.data)
  			$scope.tanks = res.data
  		})


  		$scope.trade = function (userCardId) {
  			cardService.doTrade(userCardId)
  		}
  })
  