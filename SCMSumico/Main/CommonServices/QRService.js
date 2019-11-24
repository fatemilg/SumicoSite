myApp.factory('QRServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetQRCode: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QR/GetQRCode/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);