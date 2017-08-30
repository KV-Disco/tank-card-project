/* global angular */

angular.module('TANKapp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user2', {
        templateUrl: 'js/routes/user2/template.html',
        controller: 'user2Controller'
      })
  })
