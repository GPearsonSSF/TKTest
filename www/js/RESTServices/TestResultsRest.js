angular.module("RESTServices")
 .service('TestResultsRest', ['$http', '$window', '$state', function($http, $window, $state){
    var TestResultsRest = this;
   TestResultsRest.save = function(test) {
       return $http({
           url: "https://loopback-backend-gpearsonssf.c9users.io:8080/api/TestResults",
           method: 'POST',
           data: test
       });
   };
   
   TestResultsRest.get = function () {
     return $http({
       url: "https://loopback-backend-gpearsonssf.c9users.io:8080/api/TestResults",
       method: "GET"
     });
   };
}])
 