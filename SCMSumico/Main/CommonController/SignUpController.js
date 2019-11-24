myApp.controller('SignUpController', ['$scope', 'ngProgress', 'UserSiteService', 'CaptchaService', 'QuestionCustomerService', function ($scope, ngProgress, UserSiteService, CaptchaService, QuestionCustomerService) {
    $scope.newUser = {};

    $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    $scope.MobileFormat = /^(\+98|0)?9\d{9}$/g;

    $scope.GetUserSiteByNationalCode = function (_NationalCode) {
        ngProgress.start();
        var Param = {
            NationalCode: _NationalCode
        };
        UserSiteService.GetUserSiteByNationalCode(Param).then(function (result) {
            $scope.UserSiteByNationalCode = result.data;
            if ($scope.UserSiteByNationalCode.length == 0) {
                $scope.InitialSignUpPage();
                $scope.MessageError = "شخصی با این کد ملی یافت نشد.جهت ثبت نام فرم زیر کامل کنید!";
                $scope.ShowNewUser = true;
                $scope.GetCaptcha();
                $scope.GetQuestionCustomerForSignUp();
            }
            else {
                $scope.InitialSignUpPage();
                $scope.MessageError = "شما قبلا  ثبت نام کرده اید.اگر رمز عبور را فراموش کرده اید پست الکترونیک را وارد کرده و ارسال رمز عبور را کلیک کنید!";
                $scope.ShowOldUser = true;
                $scope.GetCaptcha();
            }
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    }

    $scope.MeliCodeChange = function () {
        $scope.InitialSignUpPage();
    }
    $scope.InitialSignUpPage = function () {
        $scope.MessageError = "";
        $scope.ShowOldUser = false;
        $scope.ShowNewUser = false;
    }
    $scope.InitialSignUpPage();




    $scope.GetCaptcha = function () {
        CaptchaService.GetCaptcha().then(function (result) {
            $scope.Captcha = result.data
            $('#oldUserImgCaptcha').attr('src', $scope.Captcha.ImageData);
            $('#newUserImgCaptcha').attr('src', $scope.Captcha.ImageData);

        }).catch(function () {
        }).finally(function () {
        });
    };
    $scope.EnrollNewUser = function (_FormSignUpNewUser, _newUser) {
        $scope.submitted = true;
        if (_FormSignUpNewUser.$valid) {
            if ($scope.newUser.newUserCaptchaEnroll != "" && $scope.newUser.newUserCaptchaEnroll != undefined) {
                if ($scope.newUser.newUserCaptchaEnroll.toLowerCase() == $scope.Captcha.CaptchaText.toLowerCase()) {
                    ngProgress.start();
                    $scope.QuestionCustomer = [];
                    for (var i = 0; i < $scope.QuestionCustomerForSignUp.length; i++) {
                        $scope.QuestionCustomer.push({ 'IDOptionCustomer':$scope.QuestionCustomerForSignUp[i].IDOptionCustomer })
                    }
                    _newUser.QuestionCustomer = JSON.stringify($scope.QuestionCustomer);
                    UserSiteService.AddUserSiteByEnroll(_newUser).then(function (result) {
                        if (result.data != undefined) {
                            window.location.href = "/#!/SignIn";
                            AutoClosingSuccessAlert('مشخصات کاربری شما با موفقیت ثبت شد!', 7000);
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
        }


    }

    $scope.GetQuestionCustomerForSignUp = function () {
        QuestionCustomerService.GetQuestionCustomerForSignUp().then(function (result) {
            $scope.QuestionCustomerForSignUp = result.data;
        }).catch(function (result) {

        }).finally(function () {

        });
    }


}]);