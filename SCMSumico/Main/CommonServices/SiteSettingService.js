myApp.factory('SiteSettingService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetSiteSetting: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/SiteSetting/GetSiteSetting/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);