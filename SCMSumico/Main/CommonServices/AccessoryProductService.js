myApp.factory('AccessoryProductServices', ['$http','$rootScope', function ($http, $rootScope) {
    return {
        FetchAccessoryProductDataByIDXDefineDetailProduct: function (Param) {
            
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/AccessoryProduct/FillAccessoryProductByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);