/* global angular */

angular.module('cardsOfKurskApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user2', {
        templateUrl: 'js/routes/user2/template.html',
        controller: 'user2Controller'
      })
  })
