myApp.factory('ContentModuleRetService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetContentModuleRet: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentModuleRet/GetContentModuleRet/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetContentModuleByIDRet: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentModuleRet/GetContentModuleByIDRet/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetContentModuleByUniqueName: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentModuleRet/GetContentModuleByUniqueName/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
    }
}]);




