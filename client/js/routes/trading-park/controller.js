/* global angular */
angular.module('cardsOfKurskApp')
  .controller('tradingController', function ($scope, $rootScope, cardService, userService, toastr) {
    var socket = io();

    cardService.getTradingCards()
      .then(function (res) {
        $scope.userCards = res.data
      })

      socket.on('timeToUpdate', () => {
        cardService.getTradingCards()
          .then(function (res) {
            $scope.userCards = res.data
          })
      })

    $scope.isUserCard = function(sessionId, userCardId) {
      console.log(sessionId)
      console.log(userCardId)
      
      if(sessionId === userCardId){
        return {'border-color': 'red'}
      }
    }


    $scope.pickFromTrade = function(userCardId, oldUserId) {
      userService.getSessionId()
      .then(res => {
        const newUserId = res.data
        if(newUserId !== oldUserId){
          console.log(newUserId)
          cardService.pickFromTrade(userCardId, newUserId, oldUserId).then((res) => {
            if(!res.data){
              toastr.error('You have no more cards to trade.', '0 tading cards!!');
            }else socket.emit('updateAll')
            })
        }
        else{
          toastr.warning('You are trying to get card that you yourself push.', 'That was yours!!');
        }

      })
    }
  })
  