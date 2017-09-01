/* global angular */

(function () {
  angular.module('cardsOfKurskApp')
      .factory('cardService', function ($http) {
        function getTradingCards () {
          const url = '/api/trading-cards'
          return $http.get(url)
        }

        function getUser1 () {
          const url = '/api/user1'
          return $http.get(url)
        }

        function getUser2 () {
          const url = '/api/user2'
          return $http.get(url)
        }

        function pushToTrade (userCardId) {
          // TODO
          // const url = '/api/trade/' + userCardId
          // return $http.put(url)
        }

        function pickFromTrade (userCardId, userId) {
          console.log('pickFromTrade', userCardId, userId)
          const url = '/api/trade/pick/' + userCardId + '&' + userId
          return $http.put(url)
          // TODO call api for updating user-card, etc...
        }

        return {
          getTradingCards: getTradingCards,
          getUser1: getUser1,
          getUser2: getUser2,
          pushToTrade: pushToTrade,
          pickFromTrade: pickFromTrade
        }
      })
})()
