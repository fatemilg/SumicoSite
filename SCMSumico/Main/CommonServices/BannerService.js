myApp.factory('BannerService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetBanner: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Banner/GetBanner/',
                headers: { "Content-Type": "application/json" }
            })
        }
    }
}])