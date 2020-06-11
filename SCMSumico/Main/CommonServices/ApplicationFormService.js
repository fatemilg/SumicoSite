myApp.factory('ApplicationFormServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetApplicationFormType: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ApplicationFormType/GetApplicationFormType/',
                headers: { "Content-Type": "application/json" }
            });
        },
        AddApplicationForm: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ApplicationForm/AddApplicationForm/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);