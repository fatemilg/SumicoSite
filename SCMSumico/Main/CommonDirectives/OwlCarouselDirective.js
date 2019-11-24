myApp.directive("owlCarousel", function () {
    return {
        restrict: 'A',
        link: function (scope) {
            scope.initCarousel = function (element) {
                var defaultOptions = {
                };
                var customOptions = scope.$eval($(element).attr('data-options'));
                for (var key in customOptions) {
                    if (key == "SelectedSort" && customOptions[key]) {
                        defaultOptions[key] = customOptions[key];
                    }
                    defaultOptions[key] = customOptions[key];
                }
                defaultOptions["navigationText"] = ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"];
                $(element).owlCarousel(defaultOptions);
                if (defaultOptions["SelectedSort"]) {
                    $(element).trigger('owl.jumpTo', defaultOptions["SelectedSort"]);
                }
            };
        }
    };
})
    .directive('owlCarouselItem', [function () {
        return {
            restrict: 'A',
            transclude: false,
            link: function (scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }]);



