/* global angular */

angular.module('TANKapp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/registration', {
        templateUrl: 'js/routes/registration/template.html',
        controller: 'registratioController'
      })
  })
  