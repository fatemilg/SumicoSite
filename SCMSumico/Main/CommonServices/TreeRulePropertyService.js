myApp.factory('TreeRulePropertyService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetTreeRulePropertyByIDProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/TreeRuleProperty/GetTreeRulePropertyByIDProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);