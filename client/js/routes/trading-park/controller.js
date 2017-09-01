/* global angular */
angular.module('cardsOfKurskApp')
  .controller('tradingController', function ($scope, $rootScope, cardService, userService) {
  	cardService.getTradingCards()
  		.then(function (res) {
  			$scope.userCards = res.data
  		})


  	$scope.pickFromTrade = function(userCardId) {
  		const userId = userService.getUser().id

  		cardService.pickFromTrade(userCardId, userId)
  	}
  })
  