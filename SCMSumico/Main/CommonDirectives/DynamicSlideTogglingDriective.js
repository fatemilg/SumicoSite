myApp.directive('dynamicslidetogglingdirective', [function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.bind('click', function () {
                // check to open or close an item
                if ($(element).parent().siblings('div').css("display") == "none") {
                    // close all
                    $(".Article-Dictionary-Description").slideUp();
                    $(".Article-Dictionary-Icon").removeClass("fa-minus");
                    // open the target element
                    $(element).parent().siblings('div').slideDown();
                    $(element).children('span').addClass("fa-minus");
                } else {
                    // close all
                    $(".Article-Dictionary-Description").slideUp();
                    $(".Article-Dictionary-Icon").removeClass("fa-minus");
                }
            })
        }
    }
}])