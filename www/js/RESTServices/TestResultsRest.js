angular.module("RESTServices")
 .service('TestResultsRest', ['$http', function($http){
    var TestResultsRest = this;
   TestResultsRest.save = function(test, userToken) {
       return $http({
           headers: {Authorization: userToken},
           url: "https://loopback-backend-gpearsonssf.c9users.io:8080/api/TestResults",
           method: 'POST',
           data: test
       });
   };
   
   TestResultsRest.get = function (userID, userToken) {
     return $http({
       headers: {Authorization: userToken},
       url: "https://loopback-backend-gpearsonssf.c9users.io:8080/api/TestResults?filter[where][userID]=" + userID,
       method: "GET"
     });
   };
}])
 