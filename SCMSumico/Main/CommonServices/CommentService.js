myApp.factory('CommentService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillCommentByIDXContent: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Comment/FillCommentByIDXContent/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteComment: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Comment/DeleteComment/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddComment: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Comment/AddComment/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }, UpdateComment: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Comment/UpdateComment/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);