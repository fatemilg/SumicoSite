myApp.controller('LoginController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    window.location = $rootScope.ServerUrl + "Admin/Login.aspx?Client=" + window.location.href.split(':')[1].replace('//', '').split('.')[0];
}])