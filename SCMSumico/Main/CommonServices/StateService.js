myApp.factory('StateService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetIranianState: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/State/GetIranianState/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);