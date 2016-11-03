angular.module("RESTServices", [])
    .service('SSFUsersRest', ['$http', '$window', '$state',
        function($http, $window, $state) {
        var SSFUsersRest = this;
        
        SSFUsersRest.post = function(newUserData) {
            return $http({
                url: "https://loopback-backend-gpearsonssf.c9users.io:8080/api/SSFUsers",
                method: "POST",     
                data: newUserData
            });
        };
        
        SSFUsersRest.login = function(loginData){
            return $http({
                url: "https://loopback-backend-gpearsonssf.c9users.io:8080/api/SSFUsers/login",
                method: 'POST',
                data: loginData
            });
        };
        }
        ]);