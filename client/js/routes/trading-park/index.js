/* global angular */

angular.module('TANKapp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/routes/trading-park/template.html',
        controller: 'tradingController'
      })
  })
  