/* global angular */

angular.module('cardsOfKurskApp')
  .controller('userController', function ($scope, $rootScope, cardService) {

    $scope.isTrading = {}

  	cardService.getUserCards()
  		.then(function (res) {
  			console.log(res)
  			$scope.userCards = res.data

        // TODO for loop over user cards
        // $scope.isTrading = userCard.isTrading
  		})

      $scope.ifCardOnTrade = function (isOnTrade){
        if(isOnTrade){return {'border-color': 'blue'}}
      }

  		$scope.pushToTrade = function (userCardId) {
        console.log(userCardId)
  			cardService.pushToTrade(userCardId)
          .then(result => {
            cardService.getUserCards()
            .then(function (res) {
              console.log(res)
              $scope.userCards = res.data

              // TODO for loop over user cards
              // $scope.isTrading = userCard.isTrading
            })
          })
  		}
  })
  