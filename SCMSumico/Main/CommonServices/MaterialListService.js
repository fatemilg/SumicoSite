myApp.factory('MaterialListService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetMaterialListByIDLogUser: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialList/GetMaterialListByIDLogUser/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddMaterialList: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialList/AddMaterialList/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        UpdateMaterialList: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialList/UpdateMaterialList/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteMaterialList: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialList/DeleteMaterialList/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);




