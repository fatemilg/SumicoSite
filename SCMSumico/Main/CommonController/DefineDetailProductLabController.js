myApp.controller('DefineDetailProductLabController', ['$scope', '$routeParams', 'ngProgress', 'DefineDetailProductServices', 'QRServices', function ($scope, $routeParams, ngProgress, DefineDetailProductServices, QRServices) {
    $scope.SelectedMeter = $routeParams.Meter;
    $scope.GeneratedDescription = $routeParams.Description.replace(/SVG/g, '/').replace(/__/g, ' ');
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $scope.FillDefineDetailProductLab = function (_IDX) {
        ngProgress.start();
        var Param = {
            IDX: _IDX
        };
        DefineDetailProductServices.FillDefineDetailProductByIDX(Param).then(function (result) {
            $scope.DefineDetailLab = result.data[0];
        }).catch(function () {
        }).finally(function () {
            ngProgress.complete();
            ngProgress.stop();
        });
    };
    $scope.FillDefineDetailProductLab($routeParams.IDX);

    $scope.GetQRCode = function () {
        var url = 'http://sumico.ir/#!/DefineDetailProductLab/' + $routeParams.IDX + '/' + $routeParams.Meter + '/' + $routeParams.Description
        var Param = {
            Text: url
        };
        QRServices.GetQRCode(Param).then(function (result) {
            $scope.CurrentUrlQRCode = result.data;
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
        });
    };
    $scope.GetQRCode();

    $scope.downloadCataloge = function () {
        window.location.href = 'http://lab.sumico.ir/DataSheet/?PN=' + $scope.DefineDetailLab.GeneratedCode;

    };

  

}]);