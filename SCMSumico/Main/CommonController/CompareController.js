myApp.controller('CompareController', ['$scope', '$rootScope', '$cookies', 'ngProgress', 'DefineDetailFactory', 'DefineDetailProductServices', 'SearchServices', function ($scope, $rootScope, $cookies, ngProgress, DefineDetailFactory, DefineDetailProductServices, SearchServices) {
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $scope.GetCompareListFromCookie = function () {
        if (DetectMobile()) {
            $scope.CountCompareList = [0, 1];
        } else {
            $scope.CountCompareList = [0, 1, 2, 3, 4];
        }
    }

    $scope.GetCompareListDetails = function () {
        ngProgress.start();
        var Param = {
            CompareList: $cookies.get('CompareList') == undefined ? '' : $cookies.get('CompareList')
        };
        DefineDetailProductServices.GetCompareListDetails(Param).then(function (result) {
            $scope.CompareListDetails = result.data;
            if ($cookies.get('CompareList') != undefined) {
                $rootScope.CompareList = $cookies.get('CompareList').split(",");
            }
            else {
                $rootScope.CompareList = undefined;
            }
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    }

    $scope.GetRecentlyViewedListDetails = function () {
        if ($cookies.get('RecentlyViewedList')) {
            var Param = {
                CompareList: $cookies.get('RecentlyViewedList')
            };
            DefineDetailProductServices.GetCompareListDetails(Param).then(function (result) {
                $scope.RecentlyViewedDetails = result.data;
            }).catch(function () {
            }).finally(function () {
            });
        }
    }

    $scope.AddToCompareList = function (IDDefineDetailProduct, ImageClass) {
        DefineDetailFactory.AddToCompareList(IDDefineDetailProduct, ImageClass);
        $scope.GetCompareListDetails();
    }

    $scope.RemoveFromCompareList = function (IDDefineDetailProduct) {
        $scope.CookieCompareList = $cookies.get('CompareList').split(",");
        for (var i = 0; i < $scope.CookieCompareList.length; i++) {
            if ($scope.CookieCompareList[i] == IDDefineDetailProduct) {
                $scope.CookieCompareList.splice(i, 1);
            }
        }
        if ($scope.CookieCompareList == '') {
            $cookies.remove('CompareList');
            location.reload();
        } else {
            $cookies.put('CompareList', $scope.CookieCompareList);
        }
        $scope.GetCompareListDetails();
    }

    $scope.RemoveFromRecentlyViewedList = function (IDDefineDetailProduct, event) {
        $scope.CookieRecentlyViewedList = $cookies.get('RecentlyViewedList').split(",");
        for (var i = 0; i < $scope.CookieRecentlyViewedList.length; i++) {
            if ($scope.CookieRecentlyViewedList[i] == IDDefineDetailProduct) {
                $scope.CookieRecentlyViewedList.splice(i, 1);
            }
        }
        $cookies.put('RecentlyViewedList', $scope.CookieRecentlyViewedList);
        $(event.currentTarget).parent().parent().remove();

    }

    $scope.ShowSearchPartNumberInCompare = function (event) {
        $scope.SearchesPartNumber = [];
        $scope.SearchPartNumbers = '';
        $('.txtSearchPartNumberInCompare').val('');
        $('.SearchPartNumberInCompare').hide();
        $(event.currentTarget).parent().find('.SearchPartNumberInCompare').fadeIn();
        $(event.currentTarget).parent().find('.txtSearchPartNumberInCompare').focus();
    }

    $scope.SearchPartNumber = function (SearchPartNumbers) {
        if (SearchPartNumbers.length > 2) {
            var Param = {
                SearchText: SearchPartNumbers
            }
            SearchServices.FetchSearchData(Param).then(function (result) {
                $scope.SearchesPartNumber = result.data;
            }).catch(function () {

            }).finally(function () {
            });
        }
        else if (SearchPartNumbers.length == 0) {
            $scope.SearchesPartNumber = [];
        }
    }

    $scope.AddToCompareListFromResult = function (IDDefineDetailProduct, event) {
        $scope.AddToCompareList(IDDefineDetailProduct);
        $('.SearchPartNumberInCompare').hide();
        $scope.SearchesPartNumber = [];
        $scope.SearchPartNumbers = '';

    }

    $scope.AddToMaterialList = function (IDDefineDetailProduct) {
        DefineDetailFactory.AddToMaterialList(IDDefineDetailProduct);
    }

    $scope.SendToCompare = function () {
        if ($scope.CompareListDetails.length == 0) {
            AutoClosingErrorAlert("!حداقل یک محصول باید انتخاب شود", 10000)
        }
        else {
            var CompareListIDX = '';
            for (var i = 0; i < $scope.CompareListDetails.length; i++) {
                if (i != 0) {
                    CompareListIDX += '-';
                }
                CompareListIDX += $scope.CompareListDetails[i].IDXDefineDetailProduct;
            }
            window.location.href = '/#!/CompareDetail/' + CompareListIDX;
        }
    }

    $scope.GetCompareListFromCookie();
    $scope.GetCompareListDetails();
    $scope.GetRecentlyViewedListDetails();
}]);
