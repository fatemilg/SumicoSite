myApp.factory('DictionaryServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetAllDictionary: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Dictionary/GetAllDictionary/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);