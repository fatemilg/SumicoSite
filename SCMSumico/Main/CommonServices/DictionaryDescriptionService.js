myApp.factory('DictionaryDescriptionService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetDictionaryByIDX: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/Dictionary/GetDictionaryByIDX/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}])