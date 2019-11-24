myApp.controller('SignInController', ['$scope', '$rootScope', '$cookies', 'UserSiteService', function ($scope, $rootScope, $cookies, UserSiteService) {
    $scope.signIn = {};

    $scope.LoginUserSite = function (obj) {
        UserSiteService.LoginUserSite(obj).then(function (result) {
            $rootScope.Login = result.data;
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);
            $cookies.put('Token', $rootScope.Login[0].IDLogUser, { 'expires': expireDate }, { 'path': '/' });
            if ($rootScope.LastUrl) {
                if ($rootScope.ActiveModal != undefined) {
                    $($rootScope.ActiveModal).modal('show');
                    $rootScope.ActiveModal = undefined;
                }
                $('#SignInIcon').hide();
                $('#UserMenuButton').show();
                window.location.href = $rootScope.LastUrl;
            }
        }).catch(function (result) { 
            var ErrorMes = "<ul>";
            angular.forEach(result.data, function (value, key) {
                ErrorMes += "<li><p>" + value + "</p></li>";
            })
            ErrorMes += "</ul>";
            AutoClosingErrorAlert(ErrorMes, 7000);
        }).finally(function () {
        });
    };
}]);