myApp.factory('ProductCategoryServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchProductCategoryData: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ProductCategory/FillProductCategory/',
                headers: { "Content-Type": "application/json" }
            });
        },
        GetProductCategoryFromChildToParentForSiteMapMenu: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ProductCategory/GetProductCategoryFromChildToParentForSiteMapMenu/',
                headers: { "Content-Type": "application/json" }
            });
        },
        FillProductCategoryfromParentToMasterForSite: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ProductCategory/FillProductCategoryfromParentToMasterForSite/',
                headers: { "Content-Type": "application/json" }
            });
        },
        FillProductCategoryWithMasterProductForSOL: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ProductCategory/FillProductCategoryWithMasterProductForSOL/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);