myApp.controller('DefineDetailProductController', ['$scope', '$sce', 'DefineDetailProductServices', 'TechnicalPropertiesServices', 'QuestionAndAnswerService', 'DefineDetailFactory',
     'AttachInterfaceCategoryService', 'AccessoryProductServices', 'RelatedDefineDetailProductServices', 'QRServices', '$routeParams', '$rootScope', 'ngProgress', function ($scope, $sce, DefineDetailProductServices, TechnicalPropertiesServices, QuestionAndAnswerService, DefineDetailFactory,
         AttachInterfaceCategoryService, AccessoryProductServices, RelatedDefineDetailProductServices, QRServices, $routeParams, $rootScope, ngProgress) {
        $scope.MasterImage = [{
            IDAttachCrmInterface: NewGuid(),
            IDRet: NewGuid(),
            IDUser: NewGuid(),
            IDAttachCrm: NewGuid(),
            IDAttachSite: NewGuid(),
            Order: 0,
            Createdate: new Date(),
            FileName: '',
            Title: '',
            Description: '',
            FileType: '',
            Url: '',
            CategoryName_En: '',
            CategoryName_Fa: '',
            FullName: ''
         }];
        $('#chkLangSituation').bootstrapToggle('on');
        $('.MainSection').animate({
            scrollTop: $("body").offset().top
        }, 1000);
        $('#chkLangSituation').bootstrapToggle('on');
        $scope.Meter = $routeParams.Meter;
        //---------------Define Functions-------------------  
        $scope.FillDefineDetailProductByIDX = function (IDX) {
            ngProgress.start();
            $rootScope.ViewClassName = 'page-FadeIn';
            var Param = {
                IDX: IDX
            };
            DefineDetailProductServices.FillDefineDetailProductByIDX(Param).then(function (result) {
                $scope.DefineDetailProducts = result.data[0];
                $scope.MasterImage[0].Url = $scope.DefineDetailProducts.PicUrl;
                $scope.FillOtherImagesOfDefineDetailProductByIDX($routeParams.IDX);
                $scope.AddToRecentlyViewedList($scope.DefineDetailProducts.IDDefineDetailProduct);

            }).catch(function () {
            }).finally(function () {
                ngProgress.stop();
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
            });
        }

        $scope.FillTechnicalPropertiesByIDXDefineDetailProduct = function (IDX) {
            var Param = {
                IDX: IDX
            };
            TechnicalPropertiesServices.FillTechnicalPropertiesByIDXDefineDetailProduct(Param).then(function (result) {
                $scope.TechnicalProperties = result.data;
            }).catch(function () {
            }).finally(function () {
                ngProgress.complete();
            });
        }

        $scope.FillRulePropertyProductByIDXDefineDetailProduct = function (IDXDefineDetailProduct) {
            var Param = {
                IDXDefineDetailProduct: IDXDefineDetailProduct
            };
            DefineDetailProductServices.FillRulePropertyProductByIDXDefineDetailProduct(Param).then(function (result) {
                $scope.RulePropertyProducts = result.data;
            }).catch(function () {
            }).finally(function () {
                ngProgress.complete();
            });
        }

        $scope.ListFoldersFilesByIDXDefineDetailProduct = function (IDXDefineDetailProduct) {
            var Param = {
                IDXDefineDetailProduct: IDXDefineDetailProduct
            };
            AttachInterfaceCategoryService.ListFoldersFilesByIDXDefineDetailProduct(Param).then(function (result) {
                $scope.FoldersFiles = result.data;
            }).catch(function () {
            }).finally(function () {
                ngProgress.complete();
            });
        }

        $scope.FillOtherImagesOfDefineDetailProductByIDX = function (IDXDefineDetailProduct) {
            var Param = {
                IDXDefineDetailProduct: IDXDefineDetailProduct
            };
            AttachInterfaceCategoryService.FillOtherImagesOfDefineDetailProductByIDX(Param).then(function (result) {
                $scope.OtherImages = $scope.MasterImage;
                $scope.OtherImages = $scope.OtherImages.concat(result.data);
            }).catch(function () {
            }).finally(function () {
                ngProgress.complete();
            });
        }

        $scope.FillAccessoryProductByIDXDefineDetailProduct = function (IDXDefineDetailProduct) {
            var Param = {
                IDXDefineDetailProduct: IDXDefineDetailProduct
            };
            AccessoryProductServices.FetchAccessoryProductDataByIDXDefineDetailProduct(Param).then(function (result) {
                $scope.AccessoryProducts = result.data;
            }).catch(function () {
            }).finally(function () {
                ngProgress.complete();
            });
        }

        $scope.FillRelatedDefineDetailProductByIDXDefineDetailProduct = function (IDXDefineDetailProduct) {
            var Param = {
                IDXDefineDetailProduct: IDXDefineDetailProduct
            };
            RelatedDefineDetailProductServices.FetchRelatedDefineDetailProductDataByIDXDefineDetailProduct(Param).then(function (result) {
                $scope.RelatedDefineDetailProducts = result.data;
            }).catch(function () {
            }).finally(function () {
                ngProgress.complete();
            });
        }

        $scope.OpenModalImageSlidShow = function (index) {
            $('#ModalImageSlidShow').modal('show');
            $('#OtherBigImages').trigger('owl.jumpTo', index);

        }

        $scope.FillQuestionAndAnswer = function (IDX) {
            var Param = {
                IDX: IDX
            };
            QuestionAndAnswerService.FetchQuestionAndAnswerForDefineDetailProductJsonDataDataByIDX(Param).then(function (result) {
                $scope.QuestionAndAnswers = result.data;
                for (var i = 0; i < $scope.QuestionAndAnswers.length; i++) {
                    $scope.QuestionAndAnswers[i].Answer = $sce.trustAsHtml(result.data[i].Answer);
                }
            }).catch(function () {
            }).finally(function () {
                ngProgress.complete();
            });
        }

        $scope.AddToCompareList = function (IDDefineDetailProduct, ImageClass) {
            DefineDetailFactory.AddToCompareList(IDDefineDetailProduct, ImageClass);
        }

        $scope.AddToRecentlyViewedList = function (IDDefineDetailProduct) {
            DefineDetailFactory.AddToRecentlyViewedList(IDDefineDetailProduct);
        }

        $scope.ToggleIcon = function (event) {
            var icon = $(event.currentTarget).children('#Question').find('.ico')
            var angle = icon.css("transform");
            if (angle == 'matrix(1, 0, 0, 1, 0, 0)') {
                $(event.currentTarget).children('#Question').find('.ico').rotate({
                    angle: 0,
                    animateTo: 45
                });
            }
            else {
                $(event.currentTarget).children('#Question').find('.ico').rotate({
                    angle: 45,
                    animateTo: 0
                });
            }
            //$(event.currentTarget).children('#Question').find('.ico').toggleClass('show hide')
        }

        $scope.ChangeDescriptionLang = function () {
            $('.DefineDescriptionEN').toggle();
            $('.DefineDescriptionFa').toggle();
            $('.ShortDescription').toggle();
            $('.ShortDescription_Fa').toggle();
            $('.ShortTechnicalDescription').toggle();
            $('.ShortTechnicalDescription_Fa').toggle();
        }

        $scope.AddToMaterialList = function (IDDefineDetailProduct) {
            DefineDetailFactory.AddToMaterialList(IDDefineDetailProduct);
        }

        //---------------Call Functions-------------------
        $scope.FillDefineDetailProductByIDX($routeParams.IDX);
        $scope.FillTechnicalPropertiesByIDXDefineDetailProduct($routeParams.IDX);
        $scope.FillRulePropertyProductByIDXDefineDetailProduct($routeParams.IDX);
        $scope.ListFoldersFilesByIDXDefineDetailProduct($routeParams.IDX);
        
        $scope.FillAccessoryProductByIDXDefineDetailProduct($routeParams.IDX);
        $scope.FillRelatedDefineDetailProductByIDXDefineDetailProduct($routeParams.IDX);
        $scope.FillQuestionAndAnswer($routeParams.IDX);
        $scope.GetQRCode();
    }])