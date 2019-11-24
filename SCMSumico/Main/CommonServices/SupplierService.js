myApp.factory('SupplierServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchSupplierData: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Supplier/FillSupplier/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);