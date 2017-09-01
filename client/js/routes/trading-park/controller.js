/* global angular */
angular.module('cardsOfKurskApp')
  .controller('tradingController', function ($scope, $rootScope, cardService) {
  	cardService.getCards()
  		.then(function (res) {
  			console.log(res.data)
  			$scope.userCards = res.data
  		})
  })
  