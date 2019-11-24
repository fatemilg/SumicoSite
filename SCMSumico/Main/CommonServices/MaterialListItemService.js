myApp.factory('MaterialListItemService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetMaterialListItemByIDXMaterialList: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListItem/GetMaterialListItemByIDXMaterialList/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddMaterialListItem: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListItem/AddMaterialListItem/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        UpdateMaterialListItem: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListItem/UpdateMaterialListItem/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteMaterialListItem: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListItem/DeleteMaterialListItem/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);




