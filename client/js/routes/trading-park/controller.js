/* global angular */
angular.module('cardsOfKurskApp')
  .controller('tradingController', function ($scope, $rootScope, cardService, userService, toastr) {
    var socket = io();
    $scope.itIs = false

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
      if(sessionId === userCardId){
        return true
      }
      else{return false}
    }


    $scope.pickFromTrade = function(userCardId, oldUserId) {
      userService.getSessionId()
      .then(res => {
        const newUserId = res.data
        if(newUserId){
          if(newUserId !== oldUserId){
            cardService.pickFromTrade(userCardId, newUserId, oldUserId).then((res) => {
              if(!res.data){
                toastr.error('You have no cards available for trading.', '0 tading cards!!');
              }else socket.emit('updateAll')
              })
          }
          else{
            toastr.warning('You are trying to get card that you yourself push.', 'That was yours!!')
          }
        }else{
          toastr.warning('You need to be loged in to pick cards!', 'Login!!')
      }

      })
    }
  })
  