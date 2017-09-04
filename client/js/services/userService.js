/* global angular */

(function () {
  angular.module('cardsOfKurskApp')
  .service('userService', function ($http) {
    this.getSessionId = function () {
      const url = '/api/user/session'
      return $http.get(url)
    }

    this.login = function (username, password) {
      console.log(username)
      console.log(password)
      const url = '/api/user/check/' + username + '&' + password// TODO make login, connect to server, validate credentials, and ... set user with the user var data
      return $http.get(url)
    }

    this.getUser = function () {
      const url = '/api/user'
      return $http.get(url)
    }
  })
})()
