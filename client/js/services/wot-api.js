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

        return {
          getCards: getCards
        }
      })
})()
