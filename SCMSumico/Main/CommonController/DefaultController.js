myApp.controller('DefaultController', ['$scope', 'DefineDetailProductServices', 'SupplierServices', 'BannerService', 'DefineDetailFactory', '$routeParams', '$rootScope', function ($scope, DefineDetailProductServices, SupplierServices, BannerService, DefineDetailFactory, $routeParams, $rootScope) {

    // Static Slider
    $(function () {
        var owl = $("#DefaultPage-SliderBrands");
        owl.owlCarousel({
            itemsCustom: [
                [0, 1]
            ],
            navigation: true,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            center: true
        });
    });

    //---------------Define Functions-------------------  
    $scope.FillAllUnderConstractionDefineDetailProduct = function (IDX) {
        var Param = {
        };
        DefineDetailProductServices.FillAllUnderConstractionDefineDetailProduct(Param).then(function (result) {
            $scope.UnderConstractionDefineDetailProducts = result.data;
        }).catch(function () {
        }).finally(function () {
        });
    };

    // GetBanner Service
    $scope.GetBanner = function () {
        BannerService.GetBanner().then(function (result) {
            $scope.BannerUrls = result.data;

        }).catch(function () {
        }).finally(function () {
        });
    };

    // Supplier Service
    $scope.FillSupplier = function () {
        SupplierServices.FetchSupplierData().then(function (result) {
            $scope.Suppliers = result.data;
            //console.log($rootScope.Suppliers);
        }).catch(function () {
        }).finally(function () {
        });
    };

    $scope.AddToCompareList = function (IDDefineDetailProduct, ImageClass) {
        DefineDetailFactory.AddToCompareList(IDDefineDetailProduct, ImageClass);
    }
    $scope.AddToMaterialList = function (IDDefineDetailProduct) {
        DefineDetailFactory.AddToMaterialList(IDDefineDetailProduct);
    }
    $scope.FillAllUnderConstractionDefineDetailProduct($routeParams.IDX);
    $scope.GetBanner();
    $scope.FillSupplier();
}]);