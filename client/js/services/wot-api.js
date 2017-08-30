/* global angular */

(function () {
  const mainTanksJson = '/data'
  const user1Json = '/data/user/1'
  const user2Json = '/data/user/2'

  angular.module('TANKapp')
      .factory('tankService', function ($http) {
        function getTanks () {
          const url = mainTanksJson
          console.log(url)
          return $http.get(url)
        }

        function getUser1Tanks () {
          const url = user1Json
          console.log(url)
          return $http.get(url)
        }

        function getUser2Tanks () {
          const url = user2Json
          console.log(url)
          return $http.get(url)
        }

        return {
          getTanks: getTanks,
          getUser1Tanks: getUser1Tanks,
          getUser2Tanks: getUser2Tanks
        }
      })
})()
