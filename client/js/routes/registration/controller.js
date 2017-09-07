/* global angular */

angular.module('cardsOfKurskApp')
  .controller('registratioController', function ($scope, $http, $window, $location, userService, toastr) {
    $scope.createNewUser = function (newUser){
      const {username, password} = newUser

      if(password.length >= 4){
        userService.newUser(username, password)
          .then(res => {
            if (res.data){  
                     var toast = toastr.warning('This user already exist.', 'Warning')
              }
              else{
                swal({
                      title: 'Successfully Registered!',
                      type: 'success',
                      timer: 1500
                })
                  .then(() => {
                    userService.login(username, password)
                    .then(() => {
                      $location.path('/')
                      $window.location.reload()
                    })
                  })
                  .catch((dismiss) => {
                    userService.login(username, password)
                      .then(() => {
                        $location.path('/')
                        $window.location.reload()
                    })
                  })
              }
        })}else {}
    }
  })
  