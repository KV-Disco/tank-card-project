/* global angular */

angular.module('cardsOfKurskApp')
  .controller('userController', function ($scope, $rootScope, cardService) {
    var socket = io();
    // $scope.isTrading = {}

  	cardService.getUserCards()
  		.then(function (res) {
  			$scope.userCards = res.data
  		})

    $scope.ifCardOnTrade = function (isOnTrade){
      if(isOnTrade){return {'border-color': 'blue'}}
    }

		$scope.pushToTrade = function (userCardId) {
      var loadingCardId = '#loading' + userCardId
      var myCardSelector = angular.element( document.querySelector( loadingCardId ) )
      
      myCardSelector.addClass('loading')
			cardService.pushToTrade(userCardId)
        .then(result => {
          cardService.getUserCards()
          .then(function (res) {
            $scope.userCards = res.data
            socket.emit('updateAll')
            myCardSelector.removeClass('loading')
          })
        })
		}
  })
  