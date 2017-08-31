/* global angular */
angular.module('TANKapp')
  .controller('tradingController', function ($scope, $rootScope, tankService) {
  	tankService.getCards()
  		.then(function (res) {
  			console.log(res.data)
  			$scope.tanks = res.data
  		})
  })
  