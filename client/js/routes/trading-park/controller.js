/* global angular */
angular.module('cardsOfKurskApp')
  .controller('tradingController', function ($scope, $rootScope, cardService, userService, toastr) {
    cardService.getTradingCards()
      .then(function (res) {
        $scope.userCards = res.data
      })

      // socket.on('updateNow', )

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
          cardService.pickFromTrade(userCardId, newUserId, oldUserId).then(
            cardService.getTradingCards()
            .then(function (res) {
              $scope.userCards = res.data
            // socket.emit('updateAll')
            }))
        }
        else{
           var toast = toastr.warning('You are trying to get card that you yourself push.');

           toastr.refreshTimer(toast, 1000);
        }

      })
    }
  })
  