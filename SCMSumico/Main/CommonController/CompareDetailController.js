myApp.controller('CompareDetailController', ['$scope', '$cookies', '$routeParams', 'ngProgress', 'DefineDetailProductServices', 'DefineDetailFactory', function ($scope, $cookies, $routeParams, ngProgress, DefineDetailProductServices, DefineDetailFactory) {
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);

    $scope.GetPropertiesDetailForCompare = function () {
        ngProgress.start();
        var Param = {
            CompareList: $routeParams.CompareListIDX
        };
        DefineDetailProductServices.GetPropertiesDetailForCompare(Param).then(function (result) {
            $scope.PropertiesDetails = result.data;
            Init();
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    }

    $scope.GetTechnicalPropertiesDetailForCompare = function () {
        var Param = {
            CompareList: $routeParams.CompareListIDX
        };
        DefineDetailProductServices.GetTechnicalPropertiesDetailForCompare(Param).then(function (result) {
            $scope.TechnicalPropertiesDetails = result.data;    
        }).catch(function () {
        }).finally(function () {
        });
    }

    $scope.AddToMaterialList = function (IDDefineDetailProduct) {
        DefineDetailFactory.AddToMaterialList(IDDefineDetailProduct);
    }

    function ScrollContent() {
        if (document.getElementById("StickyDefineHeader") != undefined) {
            var header = document.getElementById("StickyDefineHeader");
            //if (window.pageYOffset > 1) {
            if (document.getElementById("scrollable-body").scrollTop > 1) {
                //$('#List0').css({ 'margin-top': '150px' });
                //header.classList.add("StickyDefineHeader");
                //$(".StickyDefineHeader").css({ 'top': window.pageYOffset + 'px', 'width': $('.CompareTable').css('width')+ 'px' });
                //$(".StickyDefineHeader").css({ 'top': document.getElementById("scrollable-tbody").pageYOffset + 'px', 'width': $('.CompareTable').css('width') + 'px' });
                $('.CompareItemImage').css({ 'width': '45%' });
                $('.CompareLogo').hide();
                $('.CompareSupplierName').hide();
                $('.btnInCompareHeader').hide();
            } else {
                //header.classList.remove("StickyDefineHeader");
                //$('#List0').css({ 'margin-top': '0px' });
                $('.CompareItemImage').css({ 'width': '90%' });
                $('.CompareLogo').show();
                $('.CompareSupplierName').show();
                $('.btnInCompareHeader').show();
            }
        }
    }

    $(document.getElementById("scrollable-body")).on('scroll', function () { ScrollContent() });
    //$(document).on('scroll', function () { ScrollContent() });

    $scope.GetPropertiesDetailForCompare();

    $scope.GetTechnicalPropertiesDetailForCompare();
    $scope.scrollTo = function (target) { };
   
}]);