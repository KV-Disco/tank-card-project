/* global angular */

angular.module('cardsOfKurskApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user1', {
        templateUrl: 'js/routes/user-page/template.html',
        controller: 'userController'
      })
  })
