/* global angular */

(function () {
  const localJson = '/data'

  angular.module('TANKapp')
      .factory('tankService', function ($http) {
        function getTanks () {
          const url = localJson
          console.log(url)
          return $http.get(url)
        }

        return {
          getTanks: getTanks
        }
      })
})()
