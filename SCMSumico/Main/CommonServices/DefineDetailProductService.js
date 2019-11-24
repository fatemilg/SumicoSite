myApp.factory('DefineDetailProductServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillDefineDetailProductByIDXProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/DefineDetailProduct/FillDefineDetailProductByIDXProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillDefineDetailProductByIDX: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/DefineDetailProduct/FillDefineDetailProductByIDX/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillRulePropertyProductByIDXDefineDetailProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/DefineDetailProduct/FillRulePropertyProductByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillAllUnderConstractionDefineDetailProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/FillAllUnderConstractionDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetCompareListDetails: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/GetCompareListDetails/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetPropertiesDetailForCompare: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/GetPropertiesDetailForCompare/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetTechnicalPropertiesDetailForCompare: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/GetTechnicalPropertiesDetailForCompare/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetDefineDetailProductByGeneratedCode: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/GetDefineDetailProductByGeneratedCode/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);