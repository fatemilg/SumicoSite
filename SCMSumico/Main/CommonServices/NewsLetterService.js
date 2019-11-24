myApp.factory('NewsLetterService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetListOfNewsLetter: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/NewsLetter/GetListOfNewsLetter/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);