myApp.controller('DictionaryDescriptionController', ['DictionaryDescriptionService', 'QRServices', 'ngProgress', '$scope', '$routeParams', function (DictionaryDescriptionService, QRServices, ngProgress, $scope, $routeParams) {
    // Scrolling up the page when page loaded
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    // Getting data for dictionary description
    $scope.GetDictionaryByIDX = function () {
        var Param = {
            IDX: $routeParams.IDX
        };
        ngProgress.start();
        DictionaryDescriptionService.GetDictionaryByIDX(Param).then(function (result) {
            $scope.DictionaryDesc = result.data[0];
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    };
    // QRCode for the page URL
    $scope.GetQRCode = function () {
        var Param = {
            Text: window.location.href
        };
        QRServices.GetQRCode(Param).then(function (result) {
            $scope.CurrentUrlQRCode = result.data;
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    };

    // Calling services
    $scope.GetDictionaryByIDX($routeParams.IDX);
    $scope.GetQRCode();
}]);