/* global angular */

angular.module('cardsOfKurskApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/registration', {
        templateUrl: 'js/routes/registration/template.html',
        controller: 'registratioController'
      })
  })
  