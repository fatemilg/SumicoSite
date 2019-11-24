myApp.controller('MasterProductController', ['$scope', 'DefineDetailProductServices', 'ProductCategoryServices', 'DefineDetailFactory', '$routeParams', '$rootScope', 'ngProgress', function ($scope, DefineDetailProductServices, ProductCategoryServices, DefineDetailFactory, $routeParams, $rootScope, ngProgress) {
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $scope.FillProduct = function (IDXProduct) {
        ngProgress.start();
        $rootScope.ViewClassName = 'page-FadeIn';
        var Param = {
            IDXProduct: IDXProduct
        };
        DefineDetailProductServices.FillDefineDetailProductByIDXProduct(Param).then(function (result) {
            $scope.DefineDetailProducts = result.data;
            $scope.GetProductCategoryFromChildToParentForSiteMapMenu( $scope.DefineDetailProducts[0].IDXProductCategory);
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    };
    /* sending IDX of target product to server and getting data from server with post method  */
    $scope.GetProductCategoryFromChildToParentForSiteMapMenu = function ( IDXProductCategory) {
        var Param = {
            IDXParentCategory: IDXProductCategory
        };
        ProductCategoryServices.GetProductCategoryFromChildToParentForSiteMapMenu(Param).then(function (result) {
            $scope.BreadCrumbsData = result.data;
        }).catch(function () {
        }).finally(function () {
        });
    };

    $scope.AddToCompareList = function (IDDefineDetailProduct, ImgeClass) {
        DefineDetailFactory.AddToCompareList(IDDefineDetailProduct, ImgeClass);
    }
    $scope.AddToMaterialList = function (IDDefineDetailProduct) {
        DefineDetailFactory.AddToMaterialList(IDDefineDetailProduct);
    }
    $scope.FillProduct($routeParams.IDXProduct);
}])