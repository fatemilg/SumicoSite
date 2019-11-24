myApp.controller('ProductCategoryController', ['$scope', 'ProductCategoryServices', '$routeParams', '$rootScope', 'ngProgress', function ($scope, ProductCategoryServices, $routeParams, $rootScope, ngProgress) {
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $rootScope.ViewClassName = 'page-FadeIn';
    $scope.IDXSupplier=$routeParams.IDXSupplier;
    $scope.FillProductCategoryfromParentToMasterForSite = function (IDXSupplier, IDXParentProductCategory) {
        ngProgress.start();
        var Param = {
            IDXSupplier: IDXSupplier,
            IDXParentCategory: IDXParentProductCategory
        };
        ProductCategoryServices.FillProductCategoryfromParentToMasterForSite(Param).then(function (result) {
            $scope.SubCategories = result.data[0];
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    };
    /* sending IDX of target product to server and getting data from server with post method  */
    $scope.GetProductCategoryFromChildToParentForSiteMapMenu = function (IDXParentProductCategory) {
        var Param = {
            IDXParentCategory: IDXParentProductCategory
        };
        ProductCategoryServices.GetProductCategoryFromChildToParentForSiteMapMenu(Param).then(function (result) {
            $scope.BreadCrumbsData = result.data;
        }).catch(function () {
        }).finally(function () {
        });
    };
    $scope.ToggleCollpase = function (event, IDX) {
        $(event.currentTarget).parent().find('#List' + IDX).slideToggle();
        $(event.currentTarget).parent().find('#icon' + IDX).toggleClass('fa-caret-right fa-sort-down');;
    }
    function ScrollContent() {
        if (document.getElementById("StickyProductCategoryHeader") != undefined) {
            var header = document.getElementById("StickyProductCategoryHeader");
            if (window.pageYOffset > 50) {
                $('#List0').css({ 'margin-top': '150px' })
                header.classList.add("StickyProductCategoryHeader");
                $(".StickyProductCategoryHeader").css({ 'top': window.pageYOffset + 'px' });
                $('.imgProductCategoryHeader').hide();
            } else {
                header.classList.remove("StickyProductCategoryHeader");
                $('#List0').css({ 'margin-top': '0px' })
                $('.imgProductCategoryHeader').show();
            }
        }
    }
    $(document).on('scroll', function () { ScrollContent() });
    $scope.FillProductCategoryfromParentToMasterForSite($routeParams.IDXSupplier, $routeParams.IDXParentProductCategory);
    $scope.GetProductCategoryFromChildToParentForSiteMapMenu($routeParams.IDXParentProductCategory);
}])