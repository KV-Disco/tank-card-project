/* global angular */

angular.module('cardsOfKurskApp')
  .controller('user2Controller', function ($scope, $rootScope, cardService) {
  	cardService.getUser2()
  		.then(function (res) {
  			console.log(res.data)
  			$scope.userCards = res.data
  		})
  })
  