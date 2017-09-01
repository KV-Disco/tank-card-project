(function() {
	angular.module('cardsOfKurskApp')
		.service('userService', function() {
			var user = {
				id = '59a6983c7300a9c6dab14f03'
			}

			this.login = function(username, password) {
				// TODO make login, connect to server, validate credentials, and ... set user with the user var data
			}

			this.user = function() {
				return user
			}
		})
})()