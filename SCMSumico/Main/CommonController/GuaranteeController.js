myApp.controller('GuaranteeController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    $('body, html, .MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $scope.ditectToPanelServices = function () {
        window.location.href = 'http://service-sumico.ir';

    };
    GuaranteeScrollItems();
}]);