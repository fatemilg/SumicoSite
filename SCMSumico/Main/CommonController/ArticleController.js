myApp.controller('ArticleController', ['$scope', 'ContentService', 'CaptchaService', 'CommentService', 'QRServices', 'DictionaryServices', '$routeParams', '$sce', '$cookies', '$cookieStore', '$compile', 'ngProgress', function ($scope, ContentService, CaptchaService, CommentService, QRServices, DictionaryServices, $routeParams, $sce, $cookies, $cookieStore, $compile, ngProgress) {

    $scope.FillArticle = function () {
        var Param = {
            IDX: $routeParams.IDX
        };
        ngProgress.start();
        ContentService.FillArticleByIDX(Param).then(function (result) {
            $scope.Article = result.data[0];
            $scope.Article.Description_Fa = $sce.trustAsHtml(result.data[0].Description_Fa);
            $scope.CheckLiked($scope.Article.IDContent);
            //
            $scope.$watch($scope.Article, function () {
                $compile(document.querySelector('.ArticlePage').innerHTML)($scope);
            });
        }).catch(function () {
        }).finally(function () {
        });
    };
    $scope.LikeContent = function (IDContent) {
        var LikeStatus = $cookies.get(IDContent);
        if (LikeStatus == 'Like') {
            LikeStatus = 'UnLike';
        }
        else {
            LikeStatus = 'Like';
        }
        var Param = {
            IDContent: IDContent,
            LikeStatus: LikeStatus
        };
        ContentService.LikeContent(Param).then(function (result) {
            if (result.data == 'Like') {
                $cookies.put(IDContent, 'Like');
                $('#HeartIcon').attr('src', '/images/full color.png');
                $scope.Article.LikeCount++;
            }
            else if (result.data == 'UnLike') {
                $cookies.remove(IDContent);
                $('#HeartIcon').attr('src', '/images/heart outline.png');
                $scope.Article.LikeCount--;
            }
        }).catch(function () {
        }).finally(function () {
        });
    };
    $scope.GetCaptcha = function () {
        CaptchaService.GetCaptcha().then(function (result) {
            $scope.Captcha = result.data
            $('#imgCaptcha').attr('src', $scope.Captcha.ImageData);
        }).catch(function () {
        }).finally(function () {
        });
    };
    $scope.GoToComment = function () {
        document.getElementById('FormComment').scrollIntoView();
        document.getElementById("txtContatctFName").focus();
    }
    $scope.CheckLiked = function (IDContent) {
        var LikeStatus = $cookies.get(IDContent);
        if (LikeStatus == 'Like') {
            $('#HeartIcon').attr('src', '/images/full color.png');
        }
        else {
            $('#HeartIcon').attr('src', '/images/heart outline.png');
        }
    }
    $scope.AddComment = function () {
        if ($scope.CurrentComment.CaptchaText.toLowerCase() == $scope.Captcha.CaptchaText.toLowerCase()) {
            $scope.CurrentComment.IDXContent = $routeParams.IDX;
            CommentService.AddComment($scope.CurrentComment).then(function (result) {
                $scope.FillCommentByIDXContent($routeParams.IDX);
                $scope.GetCaptcha();
                $scope.CurrentComment = {};
                document.getElementById('CommentForm').scrollIntoView();
            }).catch(function () {
            }).finally(function () {
            });
        }
        else {
            alert('خطا در ثبت نظر');
        }
    }
    $scope.FillCommentByIDXContent = function (IDX) {
        var Param = {
            IDX: IDX
        }
        CommentService.FillCommentByIDXContent(Param).then(function (result) {
            $scope.Comments = result.data;
        }).catch(function () {
        }).finally(function () {
        });
    }
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
    }
   

    $scope.FillCommentByIDXContent($routeParams.IDX);
    $scope.FillArticle();
    $scope.GetCaptcha();
    $scope.GetQRCode();
}]);
