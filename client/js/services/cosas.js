
        function getUser1Tanks () {
          const url = user1Json
          console.log(url)
          return $http.get(url)
        }

        function getUser2Tanks () {
          const url = user2Json
          console.log(url)
          return $http.get(url)
        }
