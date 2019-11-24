myApp.factory('MaterialListPreparationService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        AddMaterialListPreparationByCustomer: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListPreparation/AddMaterialListPreparationByCustomer/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);