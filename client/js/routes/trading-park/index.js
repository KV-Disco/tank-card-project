/* global angular */

angular.module('cardsOfKurskApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/routes/trading-park/template.html',
        controller: 'tradingController'
      })
  })
  