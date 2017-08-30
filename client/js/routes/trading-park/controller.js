/* global angular */
angular.module('TANKapp')
  .controller('tradingController', function ($scope, $rootScope, tankService) {
  	tankService.getTanks()
  		.then(function (res) {
  			console.log(res.data.tanks)
  			$scope.tanks = res.data.tanks
  		})
  })
  