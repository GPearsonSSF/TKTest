angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService','TKAnswersService', '$state', 'SSFUsersRest', '$window',
function($scope, TKTestQuestionService, TKAnswersService, $state, SSFUsersRest, $window) {
    TKTestQuestionService.all();
    $scope.goToTest = function()
   {
        TKAnswersService.resetAnswers();
           $state.go('question',{questionID:1});
   };
   $scope.logout = function(){
       SSFUsersRest.logout($window.localStorage.token)
       .then(function (response){
           if (response.status === 204){
                $state.go('landing');
           }
       });
   };
}]);