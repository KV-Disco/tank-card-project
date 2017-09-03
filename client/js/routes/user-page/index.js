/* global angular */

angular.module('cardsOfKurskApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user/:username', {
        templateUrl: 'js/routes/user-page/template.html',
        controller: 'userController'
      })
  })
