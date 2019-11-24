myApp.factory('ContentCategoryTypeService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillContentCategoryTypeComplete: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategoryType/FillContentCategoryTypeComplete/',
                headers: { "Content-Type": "application/json" }
            });
        },
        FillArticleCategoryComplete: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategoryType/FillArticleCategoryComplete/',
                headers: { "Content-Type": "application/json" }
            });
        },
        FillContentCategoryType: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategoryType/FillContentCategoryType/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);