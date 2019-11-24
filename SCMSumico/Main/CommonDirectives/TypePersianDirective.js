myApp.directive("typepersiandirective", function () {
    return {
        restrict: 'A',
        link: function (scope, elem) {
            //$(elem).keyup(function (e) {
            //    if (just_persian(e.key) === false)
            //        e.preventDefault();
            //});
            //function just_persian(str) {
            //    var p = /^[\u0600-\u06FF\s]+$/;
            //    if (!p.test(str)) {
            //        return false
            //    }
            //    return true;
            //}

        }
    }
})