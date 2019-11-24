
myApp.factory('RelatedDefineDetailProductServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchRelatedDefineDetailProductDataByIDXDefineDetailProduct: function (Param) {

            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/RelatedDefineDetailProduct/FillRelatedDefineDetailProductDataByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);