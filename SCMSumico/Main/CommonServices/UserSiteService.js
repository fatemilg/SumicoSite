myApp.factory('UserSiteService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetUserSiteByNationalCode: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/UserSite/GetUserSiteByNationalCode/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddUserSiteByEnroll: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/UserSite/AddUserSiteByEnroll/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        LoginUserSite: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/UserSite/LoginUserSite/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        LoginUserSiteByToken: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/UserSite/LoginUserSiteByToken/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
    }
}]);