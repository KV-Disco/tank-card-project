/* global angular */
console.log("estoy en tradingControler")
angular.module('TANKapp')
  .controller('tradingController', function ($scope, $rootScope, tankService) {
  	console.log("estoy dentro de tradingControler")
  	tankService.getTanks()
  		.then(function (res) {
  			console.log(res.data.tanks)
  			$scope.tanks = res.data.tanks
  		})
  })
  