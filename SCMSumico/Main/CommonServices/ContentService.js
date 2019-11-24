myApp.factory('ContentService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillContentDataByID: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/FillContentByID/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillArticleByIDX: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/FillContentByIDX/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillTopArticle: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/GetTopArticleJsonData/',
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteContent: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/DeleteContent/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddContent: function (Param) {
            return $http({
                method: 'POST',
                url: $rootScope.ServerUrl + '/api/Content/AddContent/',
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify(Param)
            });
        },
        LikeContent: function (Param) {
            return $http({
                method: 'POST',
                url: $rootScope.ServerUrl + '/api/Content/LikeContent/',
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify(Param)
            });
        },
        UnLikeContent: function (Param) {
            return $http({
                method: 'POST',
                url: $rootScope.ServerUrl + '/api/Content/UnLikeContent/',
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify(Param)
            });
        },
        UpdateContent: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/UpdateContent/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);