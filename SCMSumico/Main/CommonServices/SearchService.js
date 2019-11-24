myApp.factory('SearchServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchSearchData: function (Param) {

            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Search/FillSearch/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillSearchForSumico: function (Param) {

            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Search/FillSearchForSumico/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);