myApp.controller('SideUserMenuController', ['$scope', '$rootScope', '$cookies', function ($scope, $rootScope, $cookies) {

    $scope.LogOut = function () {
        $cookies.remove('Token');
        $rootScope.Login = undefined;
        ToggleSideUserMenu();
        window.location.href = '/#!/Default';
    }
    $rootScope.SelectSideMenu = function (Url, ID, MenuID) {
        $rootScope.SelectedSideMenuItem = Url;
        $rootScope.MenuParam = ID;
        $('.ActiveUserSideMenu').removeClass('ActiveUserSideMenu');
        if (DetectMobile()) {
            $('.SideMenuViewContainer').animate({ left: 0 });
        }
        if (MenuID) {
            $('#' + MenuID).addClass('ActiveUserSideMenu');
        }
    }
    $rootScope.BackUserSideMenu = function (Url, ID) {
        $('.ActiveUserSideMenu').removeClass('ActiveUserSideMenu');
        if (DetectMobile()) {
            $('.SideMenuViewContainer').animate({ left: '100%' });
        }
    }
}]);