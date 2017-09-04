/* global angular */

(function () {
  angular.module('cardsOfKurskApp')
      .factory('cardService', function ($http) {
        function getTradingCards () {
          const url = '/api/trading-cards'
          return $http.get(url)
        }

        function getUserCards () {
          const url = '/api/user/cards'
          return $http.get(url)
        }

        function pushToTrade (userCardId) {
          // TODO
          const url = '/api/trade/push/' + userCardId
          return $http.put(url)
        }

        function pickFromTrade (userCardId, newUserId, oldUser) {
          console.log('pickFromTrade', userCardId, newUserId, oldUser)
          const url = '/api/trade/pick/' + userCardId + '&' + newUserId + '&' + oldUser
          return $http.put(url)
          // TODO call api for updating user-card, etc...
        }

        return {
          getTradingCards: getTradingCards,
          getUserCards: getUserCards,
          pushToTrade: pushToTrade,
          pickFromTrade: pickFromTrade
        }
      })
})()
