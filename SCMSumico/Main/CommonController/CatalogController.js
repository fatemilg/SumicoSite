
myApp.controller('CatalogController', ['$scope', 'CatalogServices', function ($scope, CatalogServices) {
    $scope.FillCatalog = function () {
        CatalogServices.FetchCatalogData().then(function (result) {
            $scope.Catalogs = result.data;
        }).catch(function () {

        }).finally(function () {

        });
    };
    $scope.CopyToClipboard = function (ID) {

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#LinkOfCatalogIDCatalog' + ID).text()).select();
        document.execCommand("copy");
        $temp.remove();
        AutoClosingSuccessAlert("Url copied in clipboard", 2000)
    }


    $scope.FillCatalog();

}]);

