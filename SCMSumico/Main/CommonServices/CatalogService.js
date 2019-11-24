myApp.factory('CatalogServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchCatalogData: function () {

            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Catalog/FillCatalog/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);