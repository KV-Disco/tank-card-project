/* global angular */

angular.module('cardsOfKurskApp')
  .controller('userController', function ($scope, $rootScope, cardService) {
    var socket = io();
    // $scope.isTrading = {}

  	cardService.getUserCards()
  		.then(function (res) {
  			console.log(res)
  			$scope.userCards = res.data
  		})

    // socket.on('cardTraded', function() {
    //   cardService.getUserCards()
    //   .then(function (res) {
    //     console.log(res)
    //     $scope.userCards = res.data
    //   })
    // })

    $scope.ifCardOnTrade = function (isOnTrade){
      if(isOnTrade){return {'border-color': 'blue'}}
    }

		$scope.pushToTrade = function (userCardId) {
      console.log(userCardId)
			cardService.pushToTrade(userCardId)
        .then(result => {
          cardService.getUserCards()
          .then(function (res) {
            $scope.userCards = res.data
            socket.emit('updateAll')
          })
        })
		}
  })
  