﻿myApp.factory('ContentCategoryService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchContentCategoryData: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/FillContentCategory/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillArticleCategoryData: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/FillArticleCategoryData/',
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteContentCategory: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/DeleteContentCategory/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddContentCategory: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/AddContentCategory/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },  UpdateContentCategory: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/UpdateContentCategory/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);