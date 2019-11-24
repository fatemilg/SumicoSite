myApp.controller('FooterController', ['$scope', '$rootScope', '$cookies', 'ngProgress',
    function ($scope, $rootScope, $cookies, ngProgress) {
        $scope.OpenMaterialListMenu = function () {
            $('#DarkBody').click();
            $rootScope.Token = $cookies.get('Token');
            if ($rootScope.Token) {
                ToggleSideUserMenu();
                $rootScope.SelectSideMenu("/Main/MaterialList/MaterialList.html", undefined, 'MaterialListMenu');
            } else {
                $('#ModalChekToken').modal('show');
            }
        }
    }]);
