myApp.factory('QuestionCustomerService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetQuestionCustomerForSignUp: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionCustomer/GetQuestionCustomerForSignUp/',
                headers: { "Content-Type": "application/json" }
            });
        },
        GetQuestionCustomerForMaterialItem: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionCustomer/GetQuestionCustomerForMaterialItem/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
    }
}]);
