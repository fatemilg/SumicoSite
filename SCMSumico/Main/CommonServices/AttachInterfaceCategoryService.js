myApp.factory('AttachInterfaceCategoryService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        ListFoldersFilesByIDXDefineDetailProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/AttachInterfaceCategory/ListFoldersFilesByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
        , FillOtherImagesOfDefineDetailProductByIDX: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/AttachInterfaceCategory/FillOtherImagesOfDefineDetailProductByIDX/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);