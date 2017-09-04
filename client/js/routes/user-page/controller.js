/* global angular */

angular.module('cardsOfKurskApp')
  .controller('userController', function ($scope, $rootScope, cardService) {
  	cardService.getUserCards()
  		.then(function (res) {
  			console.log(res)
  			$scope.userCards = res.data
  		})

  		$scope.pushToTrade = function (userCardId) {
        $scope.isTrading = 'onTrading'
        console.log(userCardId)
  			cardService.pushToTrade(userCardId)
  		}
  })
  