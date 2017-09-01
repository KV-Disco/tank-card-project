/* global angular */

angular.module('TANKapp')
  .controller('userController', function ($scope, $rootScope, tankService) {
  	tankService.getUser1()
  		.then(function (res) {
  			console.log(res.data)
  			$scope.userCards = res.data
  		})


  		$scope.trade = function (id) {
  			console.log("hello")
  			// console.log(id)
  			const cardId = id

  			// cardId = id

  			console.log(cardId)

  			tankService.doTrade(cardId) // .../cards
  		}
  })
  