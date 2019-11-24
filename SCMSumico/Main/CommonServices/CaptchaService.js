myApp.factory('CaptchaService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetCaptcha: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Captcha/GetCaptcha/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);