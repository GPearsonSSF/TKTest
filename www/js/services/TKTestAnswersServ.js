angular.module('TKTestAnswers',[])
.service('TKAnswersService',['$window','TestResultsRest', '$http', function ($window, TestResultsRest, $http) {
    var service = this;
    var answerCategories = {
        "competing": 0,
        "collaborating": 0,
        "compromising": 0,
        "avoiding": 0,
        "accommodating": 0
    };
    var categoriesStack = [];
   
    service.getAnswers = function() {
        return answerCategories;
    };
   
    service.saveAnswer = function(answerCategory) {
        answerCategories[answerCategory.toLowerCase()]++;
        categoriesStack.push(answerCategory);
    };
   
    service.resetAnswers = function() {
        for (var property in answerCategories) {
            if (answerCategories.hasOwnProperty(property)) {
                answerCategories[property] = 0;
            }
        }
    };
   
   
    service.saveTest = function(test, userToken) {
        test.userID = $window.localStorage["userId"];
        TestResultsRest.save(test, userToken);
    };
    service.getTests = function() {
         //return $window.localStorage.tests ? JSON.parse($window.localStorage.tests): [];

         return TestResultsRest.get($window.localStorage.userId, $window.localStorage.token)
            .then(function(response){
                if (response.status === 200){
                    return response.data;
                }
                else {
                    alert('Error getting test history. Have you taken one yet?')
                }
            });
    };
   
    service.setAnswers = function(answers)
    {
        answerCategories = answers;
    };
    
    
}]);

/*   
service.saveTest = function(test) {
        var tempTests = $window.localStorage.tests === undefined ? [] : JSON.parse($window.localStorage.tests);
        tempTests.push(test);
        $window.localStorage.tests = JSON.stringify(tempTests);
    }
*/