/* global angular */

angular.module('TANKapp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user1', {
        templateUrl: 'js/routes/user-page/template.html',
        controller: 'userController'
      })
  })
