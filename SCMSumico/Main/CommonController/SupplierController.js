
myApp.controller('SupplierController', ['$scope', '$rootScope', 'SupplierServices', function ($scope, $rootScope, SupplierServices) {
    $scope.FillSupplier = function () {
        SupplierServices.FetchSupplierData().then(function (result) {
            $rootScope.Suppliers = result.data;
        }).catch(function () {

        }).finally(function () {

        });
    };
    $scope.ResetLabProduct = function (_SupplierName) {
        if (_SupplierName === 'SOL') {
            $rootScope.SelectedCategoryIndex = undefined;
            $rootScope.SelectedMasterProdcut = undefined;
            $rootScope.XPartNumber = undefined;
            $rootScope.LastItemSelecting = undefined;
        }
    };
    $scope.FillSupplier();
}]);

