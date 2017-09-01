/* global angular */

(function () {
  const cardsForTrading = '/api/trading-cards'

  angular.module('TANKapp')
      .factory('tankService', function ($http) {
        function getCards () {
          const url = cardsForTrading
          console.log(url)
          return $http.get(url)
        }

        function getUser1 () {
          const url = '/api/user1'
          console.log(url)
          return $http.get(url)
        }

        function getUser2 () {
          const url = '/api/user2'
          console.log(url)
          return $http.get(url)
        }

        function doTrade (cardId, userId) {
          const url = '/api/trade/' + cardId // + '/' + userId
          return $http.put(url)
        }

        return {
          getCards: getCards,
          getUser1: getUser1,
          getUser2: getUser2,
          doTrade: doTrade
        }
      })
})()
