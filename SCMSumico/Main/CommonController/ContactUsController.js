myApp.controller('ContactUsController', ['$scope',
    function ($scope) {
        $('.TabBtn').on({
            click: function () {
                $('.TabContainer').hide();
                $('.Container' + $(this).attr("id")).fadeIn();
                $('.TabBtn').css("color", "#ccc");
                $(this).css("color", "#ffb500");
            }
        });
}]);