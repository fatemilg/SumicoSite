myApp.factory('QuestionAndAnswerService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchQuestionAndAnswerForDefineDetailProductJsonDataData: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionAndAnswer/FillQuestionAndAnswerForDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FetchQuestionAndAnswerForDefineDetailProductJsonDataDataByIDX: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionAndAnswer/FillQuestionAndAnswerForDefineDetailProductByIDX/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
       AddQuestionAndAnswer: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionAndAnswer/AddQuestionAndAnswer/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
       },
       DeleteQuestionAndAnswer: function (Param) {
           return $http({
               method: 'Post',
               url: $rootScope.ServerUrl + '/api/QuestionAndAnswer/DeleteQuestionAndAnswer/',
               data: JSON.stringify(Param),
               headers: { "Content-Type": "application/json" }
           });
       }
    }
}]);