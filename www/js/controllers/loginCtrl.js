angular.module('starter.controllers')
.controller('LoginCtrl',['$scope', '$stateParams','$state', '$http', 'SSFUsersRest', '$window',
function($scope, $stateParams, $state, $http, SSFUsersRest, $window ) {
        $scope.user = {};
        
        $scope.loginForm = function(form) { 
                
                if(form.$invalid) return alert("Please complete the form before proceeding.");
                
                SSFUsersRest.login($scope.user)
                .then(function(response) {
                        // handle different responses and decide what happens next
                                $window.localStorage.userId = response.data.userId;
                                $window.localStorage.token = response.data.id; 
                                console.log(response.status);
                        if(response.status === 200){
                                
                                $state.go('lobby');
                           }
                        }, function(error) {
                           // inform the user of any known problems that arose, otherwise give a generic 
                           // failed message
                           if (error.status === 404 ){
                                   return alert('Error: 404 File not found');
                           }
                        });

};
}]);