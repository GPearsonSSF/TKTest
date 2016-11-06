angular.module("RESTServices")
 .service('TestResultsRest', ['$http', function($http){
    var TestResultsRest = this;
   TestResultsRest.save = function(test) {
       return $http({
           url: "https://loopback-backend-gpearsonssf.c9users.io:8080/api/TestResults",
           method: 'POST',
           data: test
       });
   };
   
   TestResultsRest.get = function (userID) {
     return $http({
       url: "https://loopback-backend-gpearsonssf.c9users.io:8080/api/TestResults?filter[where][userID]=" + userID,
       method: "GET"
     });
   };
}])
 