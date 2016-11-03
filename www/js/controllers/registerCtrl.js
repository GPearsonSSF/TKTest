angular.module('starter.controllers')
.controller('RegisterCtrl',['$scope', '$stateParams','$state', '$http', 'SSFUsersRest', '$window',
function($scope, $stateParams, $state, $http, SSFUsersRest, $window ) {
        $scope.user = {};
        
        $scope.signupForm = function(form) { 
                
                if(form.$invalid) return alert("Please complete the form before proceeding.");
                
                SSFUsersRest.post($scope.user)
                .then(function(response) {
                        // handle different responses and decide what happens next
                                $window.localStorage.userId = response.data.id;
                                $window.localStorage.token = response.data.token;         
                        if(response == 200){
                                $state.go('lobby')
                           }
                        }, function(error) {
                           // inform the user of any known problems that arose, otherwise give a generic 
                           // failed message
                           if (error.status === 404 ){
                                   return alert('Error: 404 File not found')
                           }
                           if (error.status === 422){
                                   return alert('Error: Email already taken')
                           }
                        });

};
}]);