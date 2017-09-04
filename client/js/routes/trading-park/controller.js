/* global angular */
angular.module('cardsOfKurskApp')
  .controller('tradingController', function ($scope, $rootScope, cardService, userService) {
  	cardService.getTradingCards()
  		.then(function (res) {
  			$scope.userCards = res.data
  		})


  	$scope.pickFromTrade = function(userCardId) {

      userService.getSessionId()
      .then(res => {
        const userId = res.data
        console.log(userId)
        cardService.pickFromTrade(userCardId, userId)
      })
  	}
  })
  