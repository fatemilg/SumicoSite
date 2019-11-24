myApp.factory('TechnicalPropertiesServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillTechnicalPropertiesByIDXDefineDetailProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/TechnicalProperties/FillTechnicalPropertiesByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);