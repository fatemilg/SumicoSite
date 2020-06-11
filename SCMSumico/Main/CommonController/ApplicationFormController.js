myApp.controller('ApplicationFormController', ['$scope', 'ngProgress', 'CaptchaService', 'ApplicationFormServices', function ($scope, ngProgress, CaptchaService, ApplicationFormServices) {
    $('body, html').animate({
        scrollTop: $("body").offset().top
    }, 1000);

    $scope.ApplicationForm = {};
    $scope.MobileFormat = /^(\+98|0)?9\d{9}$/g;

    $scope.InitialSignUpPage = function () {
        $scope.MessageError = "";
    };
    $scope.GetCaptcha = function () {
        CaptchaService.GetCaptcha().then(function (result) {
            $scope.Captcha = result.data;
            $('#ApplicationFormImgCaptcha').attr('src', $scope.Captcha.ImageData);

        }).catch(function () {
        }).finally(function () {
        });
    };
    $scope.AddApplicationForm = function (_ApplicationForm) {
        $scope.submitted = true;
        if ($scope.ApplicationForm.CaptchaApplication !== "" && $scope.ApplicationForm.CaptchaApplication !== undefined) {
            if ($scope.ApplicationForm.CaptchaApplication.toLowerCase() === $scope.Captcha.CaptchaText.toLowerCase()) {
                ngProgress.start();
                ApplicationFormServices.AddApplicationForm(_ApplicationForm).then(function (result) {
                    if (result.data !== undefined) {
                        window.location.href = "/#!/Default";
                        AutoClosingSuccessAlert('مشخصات شما با موفقیت ثبت شد!', 4000);
                    }
                    else {
                        AutoClosingErrorAlert('اشکال در ثبت اطلاعات.مجدد تلاش کنید!', 7000);
                    }
                }).catch(function (result) {
                    var ErrorMes = "<ul>";
                    angular.forEach(result.data, function (value, key) {
                        ErrorMes += "<li><p>" + value + "</p></li>";
                    })
                    ErrorMes += "</ul>";
                    AutoClosingErrorAlert(ErrorMes, 7000);

                }).finally(function () {
                    ngProgress.stop();
                    ngProgress.complete();
                });
            }
            else {
                AutoClosingErrorAlert('کد امنیتی را صحیح وارد کنید!', 7000);
            }
        }
        else {
            AutoClosingErrorAlert('کد امنیتی را وارد کنید!', 7000);
        }

    };
    $scope.GetApplicationFormType = function () {
        ApplicationFormServices.GetApplicationFormType().then(function (result) {
            $scope.ApplicationFormTypes = result.data;
            $scope.ApplicationForm.IDApplicationFormType = $scope.ApplicationFormTypes[0].IDApplicationFormType;
        }).catch(function () {
        }).finally(function () {

        });
    };


    $scope.GetApplicationFormType();
    $scope.InitialSignUpPage();
    $scope.GetCaptcha();
}]);