myApp.controller('SearchController', ['$scope', 'SearchServices', function ($scope, SearchServices) {
    $scope.Search = function (SearchText) {

        if ($('.txtSearch').val() != "") {
            $('.ClearTextSearch').fadeIn();
        }
        else {
            $('.ClearTextSearch').fadeOut();
        }
        if (SearchText.length > 2) {
            $('.imgLoaderSearch').fadeIn();
            var Param = {
                SearchText: SearchText
            }
            SearchServices.FillSearchForSumico(Param).then(function (result) {
                $scope.Searches = result.data;
            }).catch(function () {

            }).finally(function () {
                $('.imgLoaderSearch').fadeOut();
            });
        }
    };
    $scope.HideMenuBox = function () {
        $scope.ClearTextSearch();
        CloseSearchMenu();
    }
    $scope.ClearTextSearch = function () {
        $scope.Searches = undefined;
        $('#txtIndexSearch').val('');
        $('.imgLoaderSearch').fadeOut();
    }
}]);

