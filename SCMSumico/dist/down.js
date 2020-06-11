myApp.factory('AccessoryProductServices', ['$http','$rootScope', function ($http, $rootScope) {
    return {
        FetchAccessoryProductDataByIDXDefineDetailProduct: function (Param) {
            
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/AccessoryProduct/FillAccessoryProductByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('ApplicationFormServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetApplicationFormType: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ApplicationFormType/GetApplicationFormType/',
                headers: { "Content-Type": "application/json" }
            });
        },
        AddApplicationForm: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ApplicationForm/AddApplicationForm/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('AttachInterfaceCategoryService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        ListFoldersFilesByIDXDefineDetailProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/AttachInterfaceCategory/ListFoldersFilesByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
        , FillOtherImagesOfDefineDetailProductByIDX: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/AttachInterfaceCategory/FillOtherImagesOfDefineDetailProductByIDX/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('BannerService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetBanner: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Banner/GetBanner/',
                headers: { "Content-Type": "application/json" }
            })
        }
    }
}])
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
myApp.factory('CatalogServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchCatalogData: function () {

            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Catalog/FillCatalog/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('CommentService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillCommentByIDXContent: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Comment/FillCommentByIDXContent/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteComment: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Comment/DeleteComment/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddComment: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Comment/AddComment/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }, UpdateComment: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Comment/UpdateComment/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('ContentCategoryService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchContentCategoryData: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/FillContentCategory/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillArticleCategoryData: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/FillArticleCategoryData/',
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteContentCategory: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/DeleteContentCategory/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddContentCategory: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/AddContentCategory/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },  UpdateContentCategory: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategory/UpdateContentCategory/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('ContentCategoryTypeService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillContentCategoryTypeComplete: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategoryType/FillContentCategoryTypeComplete/',
                headers: { "Content-Type": "application/json" }
            });
        },
        FillArticleCategoryComplete: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategoryType/FillArticleCategoryComplete/',
                headers: { "Content-Type": "application/json" }
            });
        },
        FillContentCategoryType: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentCategoryType/FillContentCategoryType/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('ContentModuleRetService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetContentModuleRet: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentModuleRet/GetContentModuleRet/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetContentModuleByIDRet: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentModuleRet/GetContentModuleByIDRet/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetContentModuleByUniqueName: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/ContentModuleRet/GetContentModuleByUniqueName/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
    }
}]);





myApp.factory('ContentService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillContentDataByID: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/FillContentByID/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillArticleByIDX: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/FillContentByIDX/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillTopArticle: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/GetTopArticleJsonData/',
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteContent: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/DeleteContent/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddContent: function (Param) {
            return $http({
                method: 'POST',
                url: $rootScope.ServerUrl + '/api/Content/AddContent/',
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify(Param)
            });
        },
        LikeContent: function (Param) {
            return $http({
                method: 'POST',
                url: $rootScope.ServerUrl + '/api/Content/LikeContent/',
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify(Param)
            });
        },
        UnLikeContent: function (Param) {
            return $http({
                method: 'POST',
                url: $rootScope.ServerUrl + '/api/Content/UnLikeContent/',
                headers: { "Content-Type": "application/json" },
                data: JSON.stringify(Param)
            });
        },
        UpdateContent: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Content/UpdateContent/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('DefineDetailProductServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillDefineDetailProductByIDXProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/DefineDetailProduct/FillDefineDetailProductByIDXProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillDefineDetailProductByIDX: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/DefineDetailProduct/FillDefineDetailProductByIDX/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillRulePropertyProductByIDXDefineDetailProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/DefineDetailProduct/FillRulePropertyProductByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillAllUnderConstractionDefineDetailProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/FillAllUnderConstractionDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetCompareListDetails: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/GetCompareListDetails/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetPropertiesDetailForCompare: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/GetPropertiesDetailForCompare/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetTechnicalPropertiesDetailForCompare: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/GetTechnicalPropertiesDetailForCompare/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        GetDefineDetailProductByGeneratedCode: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl +'/api/DefineDetailProduct/GetDefineDetailProductByGeneratedCode/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('DictionaryDescriptionService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetDictionaryByIDX: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/Dictionary/GetDictionaryByIDX/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}])
myApp.factory('DictionaryServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetAllDictionary: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Dictionary/GetAllDictionary/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('MaterialListItemService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetMaterialListItemByIDXMaterialList: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListItem/GetMaterialListItemByIDXMaterialList/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddMaterialListItem: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListItem/AddMaterialListItem/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        UpdateMaterialListItem: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListItem/UpdateMaterialListItem/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteMaterialListItem: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListItem/DeleteMaterialListItem/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);





myApp.factory('MaterialListPreparationService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        AddMaterialListPreparationByCustomer: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialListPreparation/AddMaterialListPreparationByCustomer/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('MaterialListService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetMaterialListByIDLogUser: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialList/GetMaterialListByIDLogUser/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddMaterialList: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialList/AddMaterialList/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        UpdateMaterialList: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialList/UpdateMaterialList/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        DeleteMaterialList: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/MaterialList/DeleteMaterialList/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);





myApp.factory('NewsLetterService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetListOfNewsLetter: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/NewsLetter/GetListOfNewsLetter/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('ProductCategoryServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchProductCategoryData: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ProductCategory/FillProductCategory/',
                headers: { "Content-Type": "application/json" }
            });
        },
        GetProductCategoryFromChildToParentForSiteMapMenu: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ProductCategory/GetProductCategoryFromChildToParentForSiteMapMenu/',
                headers: { "Content-Type": "application/json" }
            });
        },
        FillProductCategoryfromParentToMasterForSite: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ProductCategory/FillProductCategoryfromParentToMasterForSite/',
                headers: { "Content-Type": "application/json" }
            });
        },
        FillProductCategoryWithMasterProductForSOL: function (Param) {
            return $http({
                method: 'Post',
                data: JSON.stringify(Param),
                url: $rootScope.ServerUrl + '/api/ProductCategory/FillProductCategoryWithMasterProductForSOL/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('QRServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetQRCode: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QR/GetQRCode/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('QuestionAndAnswerService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchQuestionAndAnswerForDefineDetailProductJsonDataData: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionAndAnswer/FillQuestionAndAnswerForDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FetchQuestionAndAnswerForDefineDetailProductJsonDataDataByIDX: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionAndAnswer/FillQuestionAndAnswerForDefineDetailProductByIDX/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
       AddQuestionAndAnswer: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionAndAnswer/AddQuestionAndAnswer/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
       },
       DeleteQuestionAndAnswer: function (Param) {
           return $http({
               method: 'Post',
               url: $rootScope.ServerUrl + '/api/QuestionAndAnswer/DeleteQuestionAndAnswer/',
               data: JSON.stringify(Param),
               headers: { "Content-Type": "application/json" }
           });
       }
    }
}]);
myApp.factory('QuestionCustomerService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetQuestionCustomerForSignUp: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionCustomer/GetQuestionCustomerForSignUp/',
                headers: { "Content-Type": "application/json" }
            });
        },
        GetQuestionCustomerForMaterialItem: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/QuestionCustomer/GetQuestionCustomerForMaterialItem/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
    }
}]);


myApp.factory('RelatedDefineDetailProductServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchRelatedDefineDetailProductDataByIDXDefineDetailProduct: function (Param) {

            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/RelatedDefineDetailProduct/FillRelatedDefineDetailProductDataByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('SearchServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchSearchData: function (Param) {

            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Search/FillSearch/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        FillSearchForSumico: function (Param) {

            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Search/FillSearchForSumico/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('SiteSettingService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetSiteSetting: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/SiteSetting/GetSiteSetting/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('StateService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetIranianState: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/State/GetIranianState/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('SupplierServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FetchSupplierData: function () {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/Supplier/FillSupplier/',
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('TechnicalPropertiesServices', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        FillTechnicalPropertiesByIDXDefineDetailProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/TechnicalProperties/FillTechnicalPropertiesByIDXDefineDetailProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('TreeRulePropertyService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetTreeRulePropertyByIDProduct: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/TreeRuleProperty/GetTreeRulePropertyByIDProduct/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    }
}]);
myApp.factory('UserSiteService', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        GetUserSiteByNationalCode: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/UserSite/GetUserSiteByNationalCode/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        AddUserSiteByEnroll: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/UserSite/AddUserSiteByEnroll/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        LoginUserSite: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/UserSite/LoginUserSite/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
        LoginUserSiteByToken: function (Param) {
            return $http({
                method: 'Post',
                url: $rootScope.ServerUrl + '/api/UserSite/LoginUserSiteByToken/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        },
    }
}]);
myApp.controller('AboutUsController', [function () {
    $('body, html, .MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
}]);
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
myApp.controller('ArticleCategoryController', ['$scope', 'DictionaryServices', 'ContentModuleRetService', 'ngProgress', '$routeParams',
    function ($scope, DictionaryServices, ContentModuleRetService, ngProgress, $routeParams) {

        $('body, html').animate({
            scrollTop: $("body").offset().top
        }, 1000);
        InitailArtcleCategory();
        /* Getting RightArticleCategory Data */
        $scope.GetRightContentCategories = function () {
            var objContentModuleRet = {
                UniqueName: 'RightArticleCategory'
            };
            ContentModuleRetService.GetContentModuleByUniqueName(objContentModuleRet).then(function (result) {
                $scope.RightContentCategories = result.data;
                $scope.changeRightScope();  //
            }).catch(function () {
            }).finally(function () {
            });
        };
        /* Getting LeftArticleCategory Data */
        $scope.GetLeftContentCategories = function () {
            var objContentModuleRet = {
                UniqueName: 'LeftArticleCategory'
            };
            ContentModuleRetService.GetContentModuleByUniqueName(objContentModuleRet).then(function (result) {
                $scope.LeftContentCategories = result.data;
            }).catch(function () {
            }).finally(function () {
                /*  */
                if ($routeParams.IDX == null) {
                    $scope.GetMiddleContentCategories();
                }
                else {
                    /* Clear scopes */
                    $scope.MiddleContentCategories = [];
                    $scope.LazyLoadingMiddle = [];
                    $scope.MiddleContentCategories = $scope.LeftContentCategories.find(obj => {
                        return obj.ContentCategoryIDX == $routeParams.IDX;
                    })
                    $scope.changeMiddleScope();
                }
            });
        };
        /* Getting MiddleArticleCategory Data */
        $scope.GetMiddleContentCategories = function () {
            var objContentModuleRet = {
                UniqueName: 'MiddleArticleCategory'
            };
            //ngProgress.start();
            ContentModuleRetService.GetContentModuleByUniqueName(objContentModuleRet).then(function (result) {
                $scope.MiddleContentCategories = result.data;
                $scope.changeMiddleScope();  //
            }).catch(function () {
            }).finally(function () {
                //ngProgress.stop();
                //ngProgress.complete();
            });
        };

        /* Define initial values for lazyloading */
        var pageLoadingMiddle = 1;
        var middleGlobalIndex = 0;
        var pageLoadingRight = 1;
        var rightGlobalIndex = 0;
        /* Lazyloading middle function. We want to load Items 5 to 5 */
        $scope.changeMiddleScope = function () {
            /* Create empty scopes */
            $scope.LazyLoadingMiddle = [];
            $scope.MiddleTempLazyLoad = [];
            /* If data has loaded first time page loading */
            if ($scope.MiddleContentCategories.length) {  //  
                for (var countCategory = 0; countCategory < $scope.MiddleContentCategories.length; countCategory++) {
                    if ($scope.MiddleContentCategories[countCategory].Content) {  //
                        for (var countContent = 0; countContent < $scope.MiddleContentCategories[countCategory].Content.length; countContent++) {
                            $scope.MiddleTempLazyLoad.push($scope.MiddleContentCategories[countCategory].Content[countContent]);  // Loading data to Temp scope and create a list of data
                            /* Loading first 5 terms of MiddleTempLazyLoad */
                            if ($scope.MiddleTempLazyLoad.length <= 5) {
                                $scope.LazyLoadingMiddle.push($scope.MiddleContentCategories[countCategory].Content[countContent]);  // Load first 5 data to Main scope
                            };
                        };
                    };
                };
            }
            /* If data has loaded form one of the links in left-side */
            else if (!$scope.MiddleContentCategories.length && $scope.MiddleContentCategories.Content) {  //
                for (var countContent = 0; countContent < $scope.MiddleContentCategories.Content.length; countContent++) {
                    $scope.MiddleTempLazyLoad.push($scope.MiddleContentCategories.Content[countContent]);
                    if ($scope.MiddleTempLazyLoad.length <= 5) {
                        $scope.LazyLoadingMiddle.push($scope.MiddleContentCategories.Content[countContent]);
                    };
                };
            }
            else if (!$scope.MiddleContentCategories.length) {  //
                $scope.LazyLoadingMiddle = "Error!"
            };
            /*  */
            if ($scope.MiddleTempLazyLoad.length <= 5) {
                ArticleCategoryHideGifWhenDataIsLowerThanPageLoadingLimit();
            } else {
                ArticleCategoryShowGifWhenDataIsUpperThanPageLoadingLimit();
            };
        };
        /* Lazyloading right function */
        $scope.changeRightScope = function () {
            $scope.LazyLoadingRight = [];
            $scope.RightTempLazyLoad = [];
            if ($scope.RightContentCategories.length) {
                for (var countCategory = 0; countCategory < $scope.RightContentCategories.length; countCategory++) {
                    if ($scope.RightContentCategories[countCategory].Content) {
                        for (var countContent = 0; countContent < $scope.RightContentCategories[countCategory].Content.length; countContent++) {
                            $scope.RightTempLazyLoad.push($scope.RightContentCategories[countCategory].Content[countContent]);
                            if ($scope.RightTempLazyLoad.length <= 5) {
                                $scope.LazyLoadingRight.push($scope.RightContentCategories[countCategory].Content[countContent]);
                            };
                        };
                    };
                };
            };
        };
        /* Display lazyloading when the scroll arrived to bottom in middle ArticleCategory */
        $('.ArticleListContainer, .ArticleContainer').scroll(function () {
            var index = 0;
            if (middleGlobalIndex < ($scope.MiddleTempLazyLoad.length - 5)) {  // 
                if (($(this).scrollTop() + $(this).height()) > ($(this).scrollspy()[0].scrollHeight - 1)) {
                    $('.LazyLoadingMiddleGif').fadeIn(300).fadeOut(300);  // Gif fadeIn and fadeOut
                    //setTimeout(function () {
                    if ($scope.MiddleContentCategories.length) {  // 
                        for (var i = (5 * pageLoadingMiddle); i < ((5 * pageLoadingMiddle) + 5); i++) {
                            if ($scope.MiddleTempLazyLoad[i]) {  //
                                $scope.LazyLoadingMiddle.push($scope.MiddleTempLazyLoad[i]);
                                $scope.$apply();  // apply 
                                index++;
                            };
                        };
                        middleGlobalIndex += index;  //
                    } else if (!$scope.MiddleContentCategories.length) {  // If data has loaded from left side link
                        for (var i = (5 * pageLoadingMiddle); i < ((5 * pageLoadingMiddle) + 5); i++) {
                            if ($scope.MiddleTempLazyLoad[i]) {
                                $scope.LazyLoadingMiddle.push($scope.MiddleTempLazyLoad[i]);
                                $scope.$apply();
                                index++;
                            };
                        };
                        middleGlobalIndex += index;
                    };
                    pageLoadingMiddle++;
                    //}, 1000);
                };
            } else {
                $('.LazyLoadingMiddleGifMobile').hide();  //
            };
        });
        /* Display lazyloading when the scroll arrived to bottom in right ArticleCategory */
        $('.RightSideArticleContainer').scroll(function () {
            var index = 0;
            if (rightGlobalIndex < ($scope.RightTempLazyLoad.length - 5)) {  // If index is greater than maxIndex, refresh and loading stop
                if (($(this).scrollTop() + $(this).height()) > ($(this).scrollspy()[0].scrollHeight - 1)) {
                    if ($scope.RightContentCategories.length) {  // If data has loaded for first time when page is loaded
                        for (var i = (5 * pageLoadingRight); i < ((5 * pageLoadingRight) + 5); i++) {
                            if ($scope.RightTempLazyLoad[i]) {
                                $scope.LazyLoadingRight.push($scope.RightTempLazyLoad[i]);
                                $scope.$apply();
                                index++;
                            };
                        };
                        rightGlobalIndex += index;
                    };
                    pageLoadingRight++;
                };
            };
        });

        /* Fill scopes in middle of page with new data when a link clicks */
        $scope.fillMiddle = function (CurrentCategory) {
            ArticleCategoryFillMiddleAnimationsOnMobile();  // JQuery effects and animations
            /*  */
            $routeParams.IDX = CurrentCategory.ContentCategoryIDX;
            window.location.href = "/#!/ArticleCategory/" + $routeParams.IDX;
        };

        /* Call services */
        $scope.GetRightContentCategories();
        $scope.GetLeftContentCategories();

        /*  */
        var lastY = 0;  // Needed in order to determine direction of scroll.
        $(".ArticleListContainer").on('touchstart', function (event) {
            lastY = event.touches[0].clientY;
        });
        $('.ArticleListContainer').on('touchmove', function (event) {
            var top = event.touches[0].clientY;
            /* Determine scroll position and direction */
            var scrollTop = $(event.currentTarget).scrollTop();
            var direction = (lastY - top) < 0 ? "up" : "down";
            /* FIX IT! */
            if (scrollTop == 0 && direction == "up") {
                event.preventDefault();  // Prevent scrolling up when already at top as this introduces a freeze
            } else if (scrollTop >= (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight) && direction == "down") {
                event.preventDefault();  // Prevent scrolling down when already at bottom as this also introduces a freeze
            };
            lastY = top;
        });

        /*  */
        var lastYY = 0;
        $(".RightSideArticleContainer").on('touchstart', function (event) {
            lastYY = event.touches[0].clientY;
        });
        $('.RightSideArticleContainer').on('touchmove', function (event) {
            var top = event.touches[0].clientY;
            var scrollTop = $(event.currentTarget).scrollTop();
            var direction = (lastYY - top) < 0 ? "up" : "down";
            if (scrollTop == 0 && direction == "up") {
                event.preventDefault();
            } else if (scrollTop >= (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight) && direction == "down") {
                event.preventDefault();
            };
            lastYY = top;
        });
    }]);
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


myApp.controller('CatalogController', ['$scope', 'CatalogServices', function ($scope, CatalogServices) {
    $scope.FillCatalog = function () {
        CatalogServices.FetchCatalogData().then(function (result) {
            $scope.Catalogs = result.data;
        }).catch(function () {

        }).finally(function () {

        });
    };
    $scope.CopyToClipboard = function (ID) {

        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('#LinkOfCatalogIDCatalog' + ID).text()).select();
        document.execCommand("copy");
        $temp.remove();
        AutoClosingSuccessAlert("Url copied in clipboard", 2000)
    }


    $scope.FillCatalog();

}]);


myApp.controller('CompareController', ['$scope', '$rootScope', '$cookies', 'ngProgress', 'DefineDetailFactory', 'DefineDetailProductServices', 'SearchServices', function ($scope, $rootScope, $cookies, ngProgress, DefineDetailFactory, DefineDetailProductServices, SearchServices) {
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $scope.GetCompareListFromCookie = function () {
        if (DetectMobile()) {
            $scope.CountCompareList = [0, 1];
        } else {
            $scope.CountCompareList = [0, 1, 2, 3, 4];
        }
    }

    $scope.GetCompareListDetails = function () {
        ngProgress.start();
        var Param = {
            CompareList: $cookies.get('CompareList') == undefined ? '' : $cookies.get('CompareList')
        };
        DefineDetailProductServices.GetCompareListDetails(Param).then(function (result) {
            $scope.CompareListDetails = result.data;
            if ($cookies.get('CompareList') != undefined) {
                $rootScope.CompareList = $cookies.get('CompareList').split(",");
            }
            else {
                $rootScope.CompareList = undefined;
            }
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    }

    $scope.GetRecentlyViewedListDetails = function () {
        if ($cookies.get('RecentlyViewedList')) {
            var Param = {
                CompareList: $cookies.get('RecentlyViewedList')
            };
            DefineDetailProductServices.GetCompareListDetails(Param).then(function (result) {
                $scope.RecentlyViewedDetails = result.data;
            }).catch(function () {
            }).finally(function () {
            });
        }
    }

    $scope.AddToCompareList = function (IDDefineDetailProduct, ImageClass) {
        DefineDetailFactory.AddToCompareList(IDDefineDetailProduct, ImageClass);
        $scope.GetCompareListDetails();
    }

    $scope.RemoveFromCompareList = function (IDDefineDetailProduct) {
        $scope.CookieCompareList = $cookies.get('CompareList').split(",");
        for (var i = 0; i < $scope.CookieCompareList.length; i++) {
            if ($scope.CookieCompareList[i] == IDDefineDetailProduct) {
                $scope.CookieCompareList.splice(i, 1);
            }
        }
        if ($scope.CookieCompareList == '') {
            $cookies.remove('CompareList');
            location.reload();
        } else {
            $cookies.put('CompareList', $scope.CookieCompareList);
        }
        $scope.GetCompareListDetails();
    }

    $scope.RemoveFromRecentlyViewedList = function (IDDefineDetailProduct, event) {
        $scope.CookieRecentlyViewedList = $cookies.get('RecentlyViewedList').split(",");
        for (var i = 0; i < $scope.CookieRecentlyViewedList.length; i++) {
            if ($scope.CookieRecentlyViewedList[i] == IDDefineDetailProduct) {
                $scope.CookieRecentlyViewedList.splice(i, 1);
            }
        }
        $cookies.put('RecentlyViewedList', $scope.CookieRecentlyViewedList);
        $(event.currentTarget).parent().parent().remove();

    }

    $scope.ShowSearchPartNumberInCompare = function (event) {
        $scope.SearchesPartNumber = [];
        $scope.SearchPartNumbers = '';
        $('.txtSearchPartNumberInCompare').val('');
        $('.SearchPartNumberInCompare').hide();
        $(event.currentTarget).parent().find('.SearchPartNumberInCompare').fadeIn();
        $(event.currentTarget).parent().find('.txtSearchPartNumberInCompare').focus();
    }

    $scope.SearchPartNumber = function (SearchPartNumbers) {
        if (SearchPartNumbers.length > 2) {
            var Param = {
                SearchText: SearchPartNumbers
            }
            SearchServices.FetchSearchData(Param).then(function (result) {
                $scope.SearchesPartNumber = result.data;
            }).catch(function () {

            }).finally(function () {
            });
        }
        else if (SearchPartNumbers.length == 0) {
            $scope.SearchesPartNumber = [];
        }
    }

    $scope.AddToCompareListFromResult = function (IDDefineDetailProduct, event) {
        $scope.AddToCompareList(IDDefineDetailProduct);
        $('.SearchPartNumberInCompare').hide();
        $scope.SearchesPartNumber = [];
        $scope.SearchPartNumbers = '';

    }

    $scope.AddToMaterialList = function (IDDefineDetailProduct) {
        DefineDetailFactory.AddToMaterialList(IDDefineDetailProduct);
    }

    $scope.SendToCompare = function () {
        if ($scope.CompareListDetails.length == 0) {
            AutoClosingErrorAlert("!حداقل یک محصول باید انتخاب شود", 10000)
        }
        else {
            var CompareListIDX = '';
            for (var i = 0; i < $scope.CompareListDetails.length; i++) {
                if (i != 0) {
                    CompareListIDX += '-';
                }
                CompareListIDX += $scope.CompareListDetails[i].IDXDefineDetailProduct;
            }
            window.location.href = '/#!/CompareDetail/' + CompareListIDX;
        }
    }

    $scope.GetCompareListFromCookie();
    $scope.GetCompareListDetails();
    $scope.GetRecentlyViewedListDetails();
}]);

myApp.controller('CompareDetailController', ['$scope', '$cookies', '$routeParams', 'ngProgress', 'DefineDetailProductServices', 'DefineDetailFactory', function ($scope, $cookies, $routeParams, ngProgress, DefineDetailProductServices, DefineDetailFactory) {
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);

    $scope.GetPropertiesDetailForCompare = function () {
        ngProgress.start();
        var Param = {
            CompareList: $routeParams.CompareListIDX
        };
        DefineDetailProductServices.GetPropertiesDetailForCompare(Param).then(function (result) {
            $scope.PropertiesDetails = result.data;
            Init();
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    }

    $scope.GetTechnicalPropertiesDetailForCompare = function () {
        var Param = {
            CompareList: $routeParams.CompareListIDX
        };
        DefineDetailProductServices.GetTechnicalPropertiesDetailForCompare(Param).then(function (result) {
            $scope.TechnicalPropertiesDetails = result.data;    
        }).catch(function () {
        }).finally(function () {
        });
    }

    $scope.AddToMaterialList = function (IDDefineDetailProduct) {
        DefineDetailFactory.AddToMaterialList(IDDefineDetailProduct);
    }

    function ScrollContent() {
        if (document.getElementById("StickyDefineHeader") != undefined) {
            var header = document.getElementById("StickyDefineHeader");
            //if (window.pageYOffset > 1) {
            if (document.getElementById("scrollable-body").scrollTop > 1) {
                //$('#List0').css({ 'margin-top': '150px' });
                //header.classList.add("StickyDefineHeader");
                //$(".StickyDefineHeader").css({ 'top': window.pageYOffset + 'px', 'width': $('.CompareTable').css('width')+ 'px' });
                //$(".StickyDefineHeader").css({ 'top': document.getElementById("scrollable-tbody").pageYOffset + 'px', 'width': $('.CompareTable').css('width') + 'px' });
                $('.CompareItemImage').css({ 'width': '45%' });
                $('.CompareLogo').hide();
                $('.CompareSupplierName').hide();
                $('.btnInCompareHeader').hide();
            } else {
                //header.classList.remove("StickyDefineHeader");
                //$('#List0').css({ 'margin-top': '0px' });
                $('.CompareItemImage').css({ 'width': '90%' });
                $('.CompareLogo').show();
                $('.CompareSupplierName').show();
                $('.btnInCompareHeader').show();
            }
        }
    }

    $(document.getElementById("scrollable-body")).on('scroll', function () { ScrollContent() });
    //$(document).on('scroll', function () { ScrollContent() });

    $scope.GetPropertiesDetailForCompare();

    $scope.GetTechnicalPropertiesDetailForCompare();
    $scope.scrollTo = function (target) { };
   
}]);
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
myApp.controller('DefaultController', ['$scope', 'DefineDetailProductServices', 'SupplierServices', 'BannerService', 'DefineDetailFactory', '$routeParams', '$rootScope', function ($scope, DefineDetailProductServices, SupplierServices, BannerService, DefineDetailFactory, $routeParams, $rootScope) {

    // Static Slider
    $(function () {
        var owl = $("#DefaultPage-SliderBrands");
        owl.owlCarousel({
            itemsCustom: [
                [0, 1]
            ],
            navigation: true,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            center: true
        });
    });

    //---------------Define Functions-------------------  
    $scope.FillAllUnderConstractionDefineDetailProduct = function (IDX) {
        var Param = {
        };
        DefineDetailProductServices.FillAllUnderConstractionDefineDetailProduct(Param).then(function (result) {
            $scope.UnderConstractionDefineDetailProducts = result.data;
        }).catch(function () {
        }).finally(function () {
        });
    };

    // GetBanner Service
    $scope.GetBanner = function () {
        BannerService.GetBanner().then(function (result) {
            $scope.BannerUrls = result.data;

        }).catch(function () {
        }).finally(function () {
        });
    };

    // Supplier Service
    $scope.FillSupplier = function () {
        SupplierServices.FetchSupplierData().then(function (result) {
            $scope.Suppliers = result.data;
            //console.log($rootScope.Suppliers);
        }).catch(function () {
        }).finally(function () {
        });
    };

    $scope.AddToCompareList = function (IDDefineDetailProduct, ImageClass) {
        DefineDetailFactory.AddToCompareList(IDDefineDetailProduct, ImageClass);
    }
    $scope.AddToMaterialList = function (IDDefineDetailProduct) {
        DefineDetailFactory.AddToMaterialList(IDDefineDetailProduct);
    }
    $scope.FillAllUnderConstractionDefineDetailProduct($routeParams.IDX);
    $scope.GetBanner();
    $scope.FillSupplier();
}]);
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
myApp.controller('DefineDetailProductLabController', ['$scope', '$routeParams', 'ngProgress', 'DefineDetailProductServices', 'QRServices', function ($scope, $routeParams, ngProgress, DefineDetailProductServices, QRServices) {
    $scope.SelectedMeter = $routeParams.Meter;
    $scope.GeneratedDescription = $routeParams.Description.replace(/SVG/g, '/').replace(/__/g, ' ');
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $scope.FillDefineDetailProductLab = function (_IDX) {
        ngProgress.start();
        var Param = {
            IDX: _IDX
        };
        DefineDetailProductServices.FillDefineDetailProductByIDX(Param).then(function (result) {
            $scope.DefineDetailLab = result.data[0];
        }).catch(function () {
        }).finally(function () {
            ngProgress.complete();
            ngProgress.stop();
        });
    };
    $scope.FillDefineDetailProductLab($routeParams.IDX);

    $scope.GetQRCode = function () {
        var url = 'http://sumico.ir/#!/DefineDetailProductLab/' + $routeParams.IDX + '/' + $routeParams.Meter + '/' + $routeParams.Description
        var Param = {
            Text: url
        };
        QRServices.GetQRCode(Param).then(function (result) {
            $scope.CurrentUrlQRCode = result.data;
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
        });
    };
    $scope.GetQRCode();

    $scope.downloadCataloge = function () {
        window.location.href = 'http://lab.sumico.ir/DataSheet/?PN=' + $scope.DefineDetailLab.GeneratedCode;

    };

  

}]);
myApp.controller('DictionaryDescriptionController', ['DictionaryDescriptionService', 'QRServices', 'ngProgress', '$scope', '$routeParams', function (DictionaryDescriptionService, QRServices, ngProgress, $scope, $routeParams) {
    // Scrolling up the page when page loaded
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    // Getting data for dictionary description
    $scope.GetDictionaryByIDX = function () {
        var Param = {
            IDX: $routeParams.IDX
        };
        ngProgress.start();
        DictionaryDescriptionService.GetDictionaryByIDX(Param).then(function (result) {
            $scope.DictionaryDesc = result.data[0];
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    };
    // QRCode for the page URL
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
    };

    // Calling services
    $scope.GetDictionaryByIDX($routeParams.IDX);
    $scope.GetQRCode();
}]);
myApp.controller('FooterController', ['$scope', '$rootScope', '$cookies', 'ngProgress',
    function ($scope, $rootScope, $cookies, ngProgress) {
        $scope.OpenMaterialListMenu = function () {
            $('#DarkBody').click();
            $rootScope.Token = $cookies.get('Token');
            if ($rootScope.Token) {
                ToggleSideUserMenu();
                $rootScope.SelectSideMenu("/Main/MaterialList/MaterialList.html", undefined, 'MaterialListMenu');
            } else {
                $('#ModalChekToken').modal('show');
            }
        }
    }]);

myApp.controller('GuaranteeController', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    $('body, html, .MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $scope.ditectToPanelServices = function () {
        window.location.href = 'http://service-sumico.ir';

    };
    GuaranteeScrollItems();
}]);
myApp.controller('IndexController', ['$scope', '$rootScope', '$cookies', 'ngProgress', 'MaterialListService', 'MaterialListItemService', 'UserSiteService', 'SiteSettingService', 'NewsLetterService',
    function ($scope, $rootScope, $cookies, ngProgress, MaterialListService, MaterialListItemService, UserSiteService, SiteSettingService, NewsLetterService) {

        $rootScope.Token = $cookies.get('Token');
        if ($cookies.get('CompareList') != undefined) {
            $rootScope.CompareList = $cookies.get('CompareList').split(",");
        }
        else {
            $rootScope.CompareList = undefined;
        }
        $scope.LoginUserSiteByToken = function () {
            if ($cookies.get('Token') != undefined) {
                var obj = {
                    IDLogUser: $cookies.get('Token')
                }
                UserSiteService.LoginUserSiteByToken(obj).then(function (result) {
                    $rootScope.Login = result.data;

                }).catch(function (result) {
                }).finally(function () {
                });
            }

        };
        $scope.OpenSignInView = function () {
            if ($cookies.get('Token') == undefined) {
                window.location.href = '/#!/SignIn';
                $rootScope.LastUrl = undefined;
            }
            else {
                alert('a');
            }
        }
        $scope.GotoLinkInChekToken = function (link) {
            $('#ModalChekToken').modal('hide');
            window.location.href = link;
            $rootScope.ActiveModal = '#ModalMaterialListCategory';
        }
        $rootScope.AddNewMaterialList = function (_FormMaterialList, _NewMaterialList, _IDParent) {
            if (!_IDParent) {
                $scope.submittedRootList = true;
            }

            if (_FormMaterialList.$valid) {
                if (_NewMaterialList.Title != "" && _NewMaterialList.Title != undefined) {
                    ngProgress.start();
                    _NewMaterialList.IDParent = _IDParent;
                    _NewMaterialList.IDLogUser = $cookies.get('Token');
                    MaterialListService.AddMaterialList(_NewMaterialList).then(function (result) {
                        $rootScope.GetMaterialList($rootScope.CurrentDefineDetail);
                        AutoClosingSuccessAlert('لیست با موفقیت ایجاد شد!', 7000);
                        _NewMaterialList.Title = '';
                    }).catch(function (result) {
                        var ErrorMes = "<ul>";
                        angular.forEach(result.data, function (value, key) {
                            ErrorMes += "<li><p>" + value + "</p></li>";
                        });
                        ErrorMes += "</ul>";
                        AutoClosingErrorAlert(ErrorMes, 7000);
                    }).finally(function () {
                        ngProgress.stop();
                        ngProgress.complete();
                    });
                }
                else {
                    AutoClosingErrorAlert('عنوان را وارد کنید!', 7000);
                }
            }
        }
        $rootScope.AddNewMaterialListItem = function (_MaterialList) {
            if (_MaterialList.Items != undefined && (_MaterialList.Items.some(item => item.IDDefineDetailProduct === $rootScope.CurrentDefineDetail))) {
                AutoClosingErrorAlert('محصول انتخاب شده قبلا به این لیست اضافه شده است!', 7000);
            }
            else {
                ngProgress.start();
                var _NewMaterialListItem = {
                    IDMaterialList: _MaterialList.IDMaterialList,
                    IDDefineDetailProduct: $rootScope.CurrentDefineDetail,
                    Count: 1,
                    IDLogUser: $cookies.get('Token')
                }
                MaterialListItemService.AddMaterialListItem(_NewMaterialListItem).then(function (result) {
                    $rootScope.GetMaterialList($rootScope.CurrentDefineDetail);
                    AutoClosingSuccessAlert('محصول مورد نظر با موفقیت به لیست اضافه شد!', 7000);
                }).catch(function (result) {
                    var ErrorMes = "<ul>";
                    angular.forEach(result.data, function (value, key) {
                        ErrorMes += "<li><p>" + value + "</p></li>";
                    });
                    ErrorMes += "</ul>";
                    AutoClosingErrorAlert(ErrorMes, 7000);
                }).finally(function () {
                    ngProgress.stop();
                    ngProgress.complete();
                });
            }

        }
        $rootScope.GetMaterialList = function (_IDDefineDetailProduct) {
            var _GetMaterialList = {};
            _GetMaterialList.IDLogUser = $cookies.get('Token');
            MaterialListService.GetMaterialListByIDLogUser(_GetMaterialList).then(function (result) {
                $scope.MaterialLists = result.data;
            }).catch(function (result) {

            }).finally(function () {
            });
        }
        $("#ModalMaterialListCategory").on('shown.bs.modal', function () {
            $rootScope.GetMaterialList($rootScope.CurrentDefineDetail);
        });
        $scope.NewSubMaterialList = function (event) {
            $('.NewSubMaterialList').val('');
            if ($(event.currentTarget).find('.fa').hasClass('AddSubList')) {
                $('.NewSubMaterialListContainer').hide();
                $('.NewListButton').find('.fa').removeClass('AddSubList').removeClass('fa-minus-circle').addClass('fa-plus-circle');
            }
            else {
                $('.NewListButton').find('.fa').removeClass('AddSubList').removeClass('fa-minus-circle').addClass('fa-plus-circle');
                $(event.currentTarget).find('.fa').addClass('AddSubList').removeClass('fa-plus-circle').addClass('fa-minus-circle');
                $('.NewSubMaterialListContainer').hide();
                $(event.currentTarget).parent().find('.NewSubMaterialListContainer').show();
            }
        }
        $scope.OpenSideMenu = function () {
            var url = $rootScope.SelectedSideMenuItem;
            $rootScope.SelectedSideMenuItem = '';
            $rootScope.SelectedSideMenuItem = url;
        }
        $scope.GetSiteSetting = function () {
            SiteSettingService.GetSiteSetting().then(function (result) {
                $rootScope.SiteSetting = result.data;
            }).catch(function (result) {
            }).finally(function () {
            });

        };

        if (DetectMobile()) {
            $rootScope.IsMobile = true;
        } else {
            $rootScope.IsMobile = false;
        }



        $scope.LoginUserSiteByToken();
        //$scope.GetSiteSetting();
    }]);



myApp.controller('LabProductController', ['$scope', '$rootScope', 'ngProgress', 'ProductCategoryServices', '$routeParams', 'TreeRulePropertyService', 'DefineDetailProductServices',
    function ($scope, $rootScope, ngProgress, ProductCategoryServices, $routeParams, TreeRulePropertyService, DefineDetailProductServices) {
        $scope.CurrentProductLab = {};

        $scope.FillProductCategoryWithMasterProductForSOL = function (IDXSupplier) {
            ngProgress.start();
            var Param = {
                IDXSupplier: IDXSupplier
            };
            ProductCategoryServices.FillProductCategoryWithMasterProductForSOL(Param).then(function (result) {
                $rootScope.LabProduct = result.data[0].ProductLab;
                $rootScope.Properties = result.data[0].Properties;
            }).catch(function () {
            }).finally(function () {
                ngProgress.complete();
                ngProgress.stop();
            });
        };

        $scope.SelectProductCategory = function (_MasterProduct, _Index) {
            if (_Index !== 0) {
                $rootScope.OtherCategoriesClicked = true; //saiere daste ha click shode
            }
            else {
                $rootScope.OtherCategoriesClicked = false;
            }
            $rootScope.SelectedCategoryIndex = _Index;
            
            if ($rootScope.SelectedMasterForActivationIndex !== undefined) {
                $rootScope.SelectedMasterIndex = $rootScope.SelectedMasterForActivationIndex;
            }
            else {
                $rootScope.SelectedMasterIndex = 0;
                $rootScope.SelectedMasterForActivationIndex = undefined;
            }

          
            $rootScope.SelectedMasterProdcut = _MasterProduct;
            var newID = parseInt($routeParams.IDR) + 1;
            window.location.href = window.location.href.replace('/' + window.location.href.split('/')[window.location.href.split('/').length - 1], '') + '/' + newID;
        };
        $scope.GetPropertyPic = function (_IDX) {
            for (i = 0; i < $rootScope.Properties.length; i++) {
                if ($rootScope.Properties[i].IDX === _IDX) {
                    return $rootScope.Properties[i].PicUrl;
                }
            }
        };
        $scope.GetTreeRulePropertyByIDProduct = function (IDXProduct, _SelectedMasterIndex) {
            $rootScope.SelectedMasterIndex = _SelectedMasterIndex;
            $rootScope.SelectedMasterForActivationIndex = _SelectedMasterIndex;

            ngProgress.start();
            var Param = {
                IDXProduct: IDXProduct
            };
            TreeRulePropertyService.GetTreeRulePropertyByIDProduct(Param).then(function (result) {
                $rootScope.XPartNumber = result.data[0].XPartNumber;
                //false means inner function call it not user.. for generating description
                $scope.GenerateRestOfProperties(JSON.parse(result.data[0].TreeRuleProperty[0].GeneratedTree)[0], 1, 0, false);
                $scope.GenerateHeadOfPart();
            }).catch(function () {
            }).finally(function () {
                ngProgress.complete();
                ngProgress.stop();
            });
        };

        $scope.GenerateRestOfProperties = function (_SelectedItem, _NextIndex, _SelectedIndex, _TypeOfCall) {
            for (i = _NextIndex; i < $rootScope.XPartNumber.length; i++) {
                delete $rootScope.XPartNumber[i].AvailableLists;
                delete $rootScope.XPartNumber[i].SelectedValue;
                delete $rootScope.XPartNumber[i].SelectedName_En;
                delete $rootScope.XPartNumber[i].SelectedItemIndex;

            }
            if ($rootScope.XPartNumber[_NextIndex] !== undefined) {
                $rootScope.XPartNumber[_NextIndex].AvailableLists = _SelectedItem.ChildProperty;
            }
            $rootScope.XPartNumber[_NextIndex - 1].SelectedValue = _SelectedItem.Value;
            $rootScope.XPartNumber[_NextIndex - 1].SelectedName_En = _SelectedItem.Name_En;
            $rootScope.XPartNumber[_NextIndex - 1].SelectedItemIndex = _SelectedIndex;

            if (_NextIndex < $rootScope.XPartNumber.length && $rootScope.XPartNumber[_NextIndex].AvailableLists.length === 1) {
                $scope.GenerateRestOfProperties(_SelectedItem.ChildProperty[0], _NextIndex + 1, 0, false);
            }
            else if (_NextIndex < $rootScope.XPartNumber.length && $rootScope.XPartNumber[_NextIndex].AvailableLists.length === 2) {

                if ($rootScope.XPartNumber[_NextIndex].AvailableLists[0].Value === '-') {
                    $scope.GenerateRestOfProperties(_SelectedItem.ChildProperty[1], _NextIndex + 1, 0, false);
                }
                else if ($rootScope.XPartNumber[_NextIndex].AvailableLists[1].Value === '-') {
                    $scope.GenerateRestOfProperties(_SelectedItem.ChildProperty[0], _NextIndex + 1, 0, false);
                }

            }
            if (_TypeOfCall) {
                $rootScope.XPartNumber[_NextIndex - 1].SelectByUser = true;
                $rootScope.XPartNumber[_NextIndex - 1].SelectedPropertyForActivationIndex = _SelectedIndex;
            }
            else {
                $rootScope.XPartNumber[_NextIndex - 1].SelectByUser = false;
            }

            if ($rootScope.XPartNumber.length === _NextIndex) {
                $scope.GeneratePartNumber();
                $scope.GenerateDescription();

            }

            if ($rootScope.XPartNumber[$rootScope.XPartNumber.length - 1].AvailableLists) {
                $rootScope.LastItemSelecting = true;
            }
            else {
                $rootScope.LastItemSelecting = false;
            }

            if ($rootScope.XPartNumber[_NextIndex + 1] === undefined) {
                $('.MainSection').animate({
                    scrollTop: _NextIndex * 100
                }, 1000);
                $('body, html').animate({
                    scrollTop: _NextIndex * 100
                }, 1500);
            }
            else if (!$rootScope.XPartNumber[_NextIndex + 1].AvailableLists) {
                $('.MainSection').animate({
                    scrollTop: _NextIndex * 100
                }, 1000);
                $('body, html').animate({
                    scrollTop: _NextIndex * 100
                }, 1500);
            }


            var newID = parseInt($routeParams.IDR) + 1;
            window.location.href = window.location.href.replace('/' + window.location.href.split('/')[window.location.href.split('/').length - 1], '') + '/' + newID;

        };

        $scope.GoToDefineDetailProductPage = function () {
            $scope.GenerateDescription();
            if ($rootScope.PartNumberProductLab !== '') {
                var Param = {
                    GeneratedCode: $rootScope.PartNumberProductLab
                };
                DefineDetailProductServices.GetDefineDetailProductByGeneratedCode(Param).then(function (result) {
                    $scope.DefineDetailProduct = result.data[0];
                    window.location.href = '/#!/DefineDetailProductLab/' + $scope.DefineDetailProduct.IDX + '/' + $scope.CurrentProductLab.Meter + '/' + $rootScope.DescriptionProductLab.replace(/\//g, 'SVG').replace(/ /g, '__');
                }).catch(function () {
                }).finally(function () {
                    ngProgress.complete();
                    ngProgress.stop();
                });
            }
        };


        $scope.GenerateDescription = function () {
            $rootScope.DescriptionProductLab = ''
            for (i = 0; i < $rootScope.XPartNumber.length; i++) {
                if ($rootScope.XPartNumber[i].SelectByUser === true) {
                    $rootScope.DescriptionProductLab = $rootScope.DescriptionProductLab + ', ' + $rootScope.XPartNumber[i].SelectedName_En;

                }
            }

        };
        $scope.GeneratePartNumber = function () {
            $rootScope.PartNumberProductLab = '';
            for (i = 0; i < $rootScope.XPartNumber.length; i++) {
                if ($rootScope.XPartNumber[i].SelectedValue !== '-') {
                    $rootScope.PartNumberProductLab += $rootScope.XPartNumber[i].SelectedValue;

                    if (i + 1 < $rootScope.XPartNumber.length) {
                        if ($rootScope.XPartNumber[i].MaterialType !== $rootScope.XPartNumber[i + 1].MaterialType) {
                            $rootScope.PartNumberProductLab += '-';
                        }
                    }

                }

            }
        };

        if (!$rootScope.LabProduct) {
            $scope.FillProductCategoryWithMasterProductForSOL($routeParams.IDXSupplier);
        }

        $scope.GenerateHeadOfPart = function () {
            for (var i = 0; i < $rootScope.XPartNumber.length; i++) {
                for (var j = 0; j < $rootScope.XPartNumber.length; j++) {
                    if ($rootScope.XPartNumber[j].Name_En === $rootScope.XPartNumber[i].Name_En && i < j) {
                        $rootScope.XPartNumber[j].HeadName = 'سر دوم ';
                        $rootScope.XPartNumber[i].HeadName = 'سر اول ';

                    }
                }
            }
        };
    }]);





myApp.controller('LoginController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    window.location = $rootScope.ServerUrl + "Admin/Login.aspx?Client=" + window.location.href.split(':')[1].replace('//', '').split('.')[0];
}])
myApp.controller('MasterProductController', ['$scope', 'DefineDetailProductServices', 'ProductCategoryServices', 'DefineDetailFactory', '$routeParams', '$rootScope', 'ngProgress', function ($scope, DefineDetailProductServices, ProductCategoryServices, DefineDetailFactory, $routeParams, $rootScope, ngProgress) {
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $scope.FillProduct = function (IDXProduct) {
        ngProgress.start();
        $rootScope.ViewClassName = 'page-FadeIn';
        var Param = {
            IDXProduct: IDXProduct
        };
        DefineDetailProductServices.FillDefineDetailProductByIDXProduct(Param).then(function (result) {
            $scope.DefineDetailProducts = result.data;
            $scope.GetProductCategoryFromChildToParentForSiteMapMenu( $scope.DefineDetailProducts[0].IDXProductCategory);
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    };
    /* sending IDX of target product to server and getting data from server with post method  */
    $scope.GetProductCategoryFromChildToParentForSiteMapMenu = function ( IDXProductCategory) {
        var Param = {
            IDXParentCategory: IDXProductCategory
        };
        ProductCategoryServices.GetProductCategoryFromChildToParentForSiteMapMenu(Param).then(function (result) {
            $scope.BreadCrumbsData = result.data;
        }).catch(function () {
        }).finally(function () {
        });
    };

    $scope.AddToCompareList = function (IDDefineDetailProduct, ImgeClass) {
        DefineDetailFactory.AddToCompareList(IDDefineDetailProduct, ImgeClass);
    }
    $scope.AddToMaterialList = function (IDDefineDetailProduct) {
        DefineDetailFactory.AddToMaterialList(IDDefineDetailProduct);
    }
    $scope.FillProduct($routeParams.IDXProduct);
}])
myApp.controller('MaterialListController', ['$scope', '$rootScope', '$cookies', 'ngProgress', 'MaterialListService', function ($scope, $rootScope, $cookies, ngProgress, MaterialListService) {
    $scope.ModifyMode = false;

    $scope.GetMaterialList = function () {
        var IDLogUser = $cookies.get('Token')
        if (IDLogUser == undefined) {
            AutoClosingErrorAlert('شما دسترسی به این بخش ندارید.ابتدا وارد پنل شوید  !', 5000);
            window.location.href = '/#!/SignIn';
        }
        else {
            var Param = {
                IDLogUser: IDLogUser
            };
            MaterialListService.GetMaterialListByIDLogUser(Param).then(function (result) {
                $scope.MaterialLists = result.data;

            }).catch(function () {
            }).finally(function () {
                ngProgress.stop();
                ngProgress.complete();
            });
        }
    }
    $scope.ChangeModifyMode = function () {
        $scope.EditMode = false;
        $scope.DeleteMode = false;
        $scope.ModifyMode = !$scope.ModifyMode;
        if ($scope.ModifyMode) {
            $('#btnChangeModifyMode').val('Close');
            $('#btnChangeModifyMode').css('color', 'orange');

        }
        else {
            $('#btnChangeModifyMode').val('Modify');
            $('#btnChangeModifyMode').css('color', 'white');

        }
        $scope.SelectedItem = undefined;
    }
    $scope.ClickEditButton = function () {
        $scope.DeleteMode = false;
        $('#btnDeleteButton').css('color', 'white');

        $scope.EditMode = !$scope.EditMode;
        if ($scope.EditMode) {
            $('#btnEditButton').css('color', 'orange');
        }
        else {
            $('#btnEditButton').css('color', 'white');
        }
    }
    $scope.ClickDeleteButton = function () {
        $scope.EditMode = false;
        $('#btnEditButton').css('color', 'white');

        $scope.DeleteMode = !$scope.DeleteMode;
        if ($scope.DeleteMode) {
            $('#btnDeleteButton').css('color', 'orange');
        }
        else {
            $('#btnDeleteButton').css('color', 'white');
        }
    }
    $scope.SelectMaterialItem = function (_Item) {

        angular.forEach($scope.MaterialLists, function (item) {
            item.Selected = false;
            angular.forEach(item.SubList, function (su) {
                su.Selected = false;
            });
        });

        _Item.Selected = true;
        $scope.SelectedItem = _Item;

    }
    $scope.DirectToMaterialListItem = function (_Item) {
        if (!$scope.ModifyMode && _Item.SubList == undefined)
        {
            $rootScope.SelectSideMenu("/Main/MaterialListItem/MaterialListItem.html", _Item.IDX)
        }

   
    }
    $scope.UpdateTitleMaterial = function (_Title, _IDMaterialList) {
        var Param = {
            Title: _Title,
            IDMaterialList: _IDMaterialList
        }
        MaterialListService.UpdateMaterialList(Param).then(function (result) {

        }).catch(function () {
            AutoClosingErrorAlert('اشکال در ویرایش عنوان  !', 5000);
        }).finally(function () {
        });

    }
    $scope.DeleteMaterialSelected = function (_Item) {
        if (_Item.SubList != undefined) {
            AutoClosingErrorAlert(' زیر دسته هایی برای این آیتم ثبت شده است!', 5000);
            return;
        }
        var Accept = confirm(" آیا مطمئن هستید؟");
        if (Accept == true) {
            var Param = {
                IDMaterialList: _Item.IDMaterialList
            }
            MaterialListService.DeleteMaterialList(Param).then(function (result) {
                $scope.MaterialLists = $scope.RemoveIDMaterialFromList($scope.MaterialLists, _Item.IDMaterialList, 'SubList');
            }).catch(function () {
                AutoClosingErrorAlert('اشکال در حذف  !', 5000);
            }).finally(function () {
            });
        }
    }
    $scope.RemoveIDMaterialFromList = function (source, IDValue, ChildName) {

        for (key in source) {
            var item = source[key];
            if (item['IDMaterialList'] == IDValue) {
                source.splice(key, 1);
            }
            else {
                if (source[key] != undefined && source[key].hasOwnProperty(ChildName)) {
                    $scope.RemoveIDMaterialFromList(source[key][ChildName], IDValue, ChildName);

                }
            }


        }
        return source;

    }


    $scope.GetMaterialList();
}]);
myApp.controller('MaterialListItemController', ['$scope', '$routeParams', '$rootScope', '$cookies', 'ngProgress', 'QuestionCustomerService', 'MaterialListPreparationService', 'MaterialListItemService', function ($scope, $routeParams, $rootScope, $cookies, ngProgress, QuestionCustomerService, MaterialListPreparationService, MaterialListItemService) {
    $scope.ListOfIDOpionCustomerSelected = [];
    var _IDXMaterlialListSelected = $rootScope.MenuParam;

    $scope.ShowModalCompleteOrder = function () {
        var IDLogUser = $cookies.get('Token');
        if (IDLogUser === undefined) {
            AutoClosingErrorAlert('شما دسترسی به این بخش ندارید.ابتدا وارد پنل شوید  !', 5000);
            window.location.href = '/#!/SignIn';
        }
        else {

            ngProgress.start();
            var Param = {
                IDLogUser: IDLogUser
            };
            QuestionCustomerService.GetQuestionCustomerForMaterialItem(Param).then(function (result) {

                $('#ModalSendOrders').modal('show');
                $scope.QuestionCustomerForMaterialItem = result.data;


            }).catch(function () {
            }).finally(function () {
                ngProgress.stop();
                ngProgress.complete();
            });
        }

    }
    $scope.AddMaterialListPreparationByCustomer = function () {
        var IDLogUser = $cookies.get('Token');
        var Param = {
            IDLogUser: IDLogUser,
            QuestionAnswerByCustomer: JSON.stringify($scope.QuestionCustomerForMaterialItem),
            IDXMaterialList: _IDXMaterlialListSelected
        };
        MaterialListPreparationService.AddMaterialListPreparationByCustomer(Param).then(function (result) {

            $('#ModalSendOrders').modal('hide');
            AutoClosingSuccessAlert('ارسال سفارشات  با موفقیت انجام شد', 7000);

        }).catch(function () {
            AutoClosingErrorAlert('ارسال با موفقیت انجام نشد', 7000);
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    };

    $scope.LinkToMaterialList = function () {
        $rootScope.SelectSideMenu("/Main/MaterialList/MaterialList.html", undefined, 'MaterialListMenu');
    };

    $scope.GetMaterialListItem = function (_IDXMaterialList) {

        var Param = {
            IDX: _IDXMaterialList
        };
        MaterialListItemService.GetMaterialListItemByIDXMaterialList(Param).then(function (result) {
            $scope.MaterialListItems = result.data;
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });

    };

    $scope.DeleteMaterialListItem = function (_Item) {
        var Accept = confirm("آیا مطمئن هستید ؟");
        if (Accept === true) {
            var Param = {
                IDMaterialListItem: _Item.IDMaterialListItem
            };
            MaterialListItemService.DeleteMaterialListItem(Param).then(function (result) {
                $scope.MaterialListItems = $scope.RemoveIDMaterialListItemFromList($scope.MaterialListItems, _Item.IDMaterialListItem);
            }).catch(function () {
            }).finally(function () {
                ngProgress.stop();
                ngProgress.complete();
            });
        }
    };
    $scope.RemoveIDMaterialListItemFromList = function (source, IDValue) {
        for (key in source) {
            var item = source[key];
            if (item['IDMaterialListItem'] === IDValue) {
                source.splice(key, 1);
            }


        }
        return source;

    };
    $scope.GetMaterialListItem(_IDXMaterlialListSelected);
}]);
myApp.controller('NewsCategoryController', ['$scope', 'DictionaryServices', 'ContentModuleRetService', 'ngProgress', '$routeParams',
    function ($scope, DictionaryServices, ContentModuleRetService, ngProgress, $routeParams) {

        $('body, html').animate({
            scrollTop: $("body").offset().top
        }, 1000);
        InitailArtcleCategory();
        /* Getting RightArticleCategory Data */
        $scope.GetRightContentCategories = function () {
            var objContentModuleRet = {
                UniqueName: 'News_Right'
            };
            ContentModuleRetService.GetContentModuleByUniqueName(objContentModuleRet).then(function (result) {
                $scope.RightContentCategories = result.data;
                $scope.changeRightScope();  //
            }).catch(function () {
            }).finally(function () {
            });
        };
        /* Getting LeftArticleCategory Data */
        $scope.GetLeftContentCategories = function () {
            var objContentModuleRet = {
                UniqueName: 'News_Left'
            };
            ContentModuleRetService.GetContentModuleByUniqueName(objContentModuleRet).then(function (result) {
                $scope.LeftContentCategories = result.data;
            }).catch(function () {
            }).finally(function () {
                /*  */
                if ($routeParams.IDX == null) {
                    $scope.GetMiddleContentCategories();
                }
                else {
                    /* Clear scopes */
                    $scope.MiddleContentCategories = [];
                    $scope.LazyLoadingMiddle = [];
                    $scope.MiddleContentCategories = $scope.LeftContentCategories.find(obj => {
                        return obj.ContentCategoryIDX == $routeParams.IDX;
                    })
                    $scope.changeMiddleScope();
                }
            });
        };
        /* Getting MiddleArticleCategory Data */
        $scope.GetMiddleContentCategories = function () {
            var objContentModuleRet = {
                UniqueName: 'News_Middle'
            };
            //ngProgress.start();
            ContentModuleRetService.GetContentModuleByUniqueName(objContentModuleRet).then(function (result) {
                $scope.MiddleContentCategories = result.data;
                $scope.changeMiddleScope();  //
            }).catch(function () {
            }).finally(function () {
                //ngProgress.stop();
                //ngProgress.complete();
            });
        };

        /* Define initial values for lazyloading */
        var pageLoadingMiddle = 1;
        var middleGlobalIndex = 0;
        var pageLoadingRight = 1;
        var rightGlobalIndex = 0;
        /* Lazyloading middle function. We want to load Items 5 to 5 */
        $scope.changeMiddleScope = function () {
            /* Create empty scopes */
            $scope.LazyLoadingMiddle = [];
            $scope.MiddleTempLazyLoad = [];
            /* If data has loaded first time page loading */
            if ($scope.MiddleContentCategories.length) {  //  
                for (var countCategory = 0; countCategory < $scope.MiddleContentCategories.length; countCategory++) {
                    if ($scope.MiddleContentCategories[countCategory].Content) {  //
                        for (var countContent = 0; countContent < $scope.MiddleContentCategories[countCategory].Content.length; countContent++) {
                            $scope.MiddleTempLazyLoad.push($scope.MiddleContentCategories[countCategory].Content[countContent]);  // Loading data to Temp scope and create a list of data
                            /* Loading first 5 terms of MiddleTempLazyLoad */
                            if ($scope.MiddleTempLazyLoad.length <= 5) {
                                $scope.LazyLoadingMiddle.push($scope.MiddleContentCategories[countCategory].Content[countContent]);  // Load first 5 data to Main scope
                            };
                        };
                    };
                };
            }
            /* If data has loaded form one of the links in left-side */
            else if (!$scope.MiddleContentCategories.length && $scope.MiddleContentCategories.Content) {  //
                for (var z = 0; z < $scope.MiddleContentCategories.Content.length; z++) {
                    $scope.MiddleTempLazyLoad.push($scope.MiddleContentCategories.Content[z]);
                    if ($scope.MiddleTempLazyLoad.length <= 5) {
                        $scope.LazyLoadingMiddle.push($scope.MiddleContentCategories.Content[z]);
                    };
                };
            }
            else if (!$scope.MiddleContentCategories.length) {  //
                $scope.LazyLoadingMiddle = "Error!"
            };
            /*  */
            if ($scope.MiddleTempLazyLoad.length <= 5) {
                ArticleCategoryHideGifWhenDataIsLowerThanPageLoadingLimit();
            } else {
                ArticleCategoryShowGifWhenDataIsUpperThanPageLoadingLimit();
            };
        };
        /* Lazyloading right function */
        $scope.changeRightScope = function () {
            $scope.LazyLoadingRight = [];
            $scope.RightTempLazyLoad = [];
            if ($scope.RightContentCategories.length) {
                for (var countCategory = 0; countCategory < $scope.RightContentCategories.length; countCategory++) {
                    if ($scope.RightContentCategories[countCategory].Content) {
                        for (var countContent = 0; countContent < $scope.RightContentCategories[countCategory].Content.length; countContent++) {
                            $scope.RightTempLazyLoad.push($scope.RightContentCategories[countCategory].Content[countContent]);
                            if ($scope.RightTempLazyLoad.length <= 5) {
                                $scope.LazyLoadingRight.push($scope.RightContentCategories[countCategory].Content[countContent]);
                            };
                        };
                    };
                };
            };
        };
        /* Display lazyloading when the scroll arrived to bottom in middle ArticleCategory */
        $('.ArticleListContainer, .ArticleContainer').scroll(function () {
            var index = 0;
            if (middleGlobalIndex < ($scope.MiddleTempLazyLoad.length - 5)) {  // 
                if (($(this).scrollTop() + $(this).height()) > ($(this).scrollspy()[0].scrollHeight - 1)) {
                    $('.LazyLoadingMiddleGif').fadeIn(300).fadeOut(300);  // Gif fadeIn and fadeOut
                    //setTimeout(function () {
                    if ($scope.MiddleContentCategories.length) {  // 
                        for (var i = (5 * pageLoadingMiddle); i < ((5 * pageLoadingMiddle) + 5); i++) {
                            if ($scope.MiddleTempLazyLoad[i]) {  //
                                $scope.LazyLoadingMiddle.push($scope.MiddleTempLazyLoad[i]);
                                $scope.$apply();  // apply 
                                index++;
                            };
                        };
                        middleGlobalIndex += index;  //
                    } else if (!$scope.MiddleContentCategories.length) {  // If data has loaded from left side link
                        for (var i = (5 * pageLoadingMiddle); i < ((5 * pageLoadingMiddle) + 5); i++) {
                            if ($scope.MiddleTempLazyLoad[i]) {
                                $scope.LazyLoadingMiddle.push($scope.MiddleTempLazyLoad[i]);
                                $scope.$apply();
                                index++;
                            };
                        };
                        middleGlobalIndex += index;
                    };
                    pageLoadingMiddle++;
                    //}, 1000);
                };
            } else {
                $('.LazyLoadingMiddleGifMobile').hide();  //
            };
        });
        /* Display lazyloading when the scroll arrived to bottom in right ArticleCategory */
        $('.RightSideArticleContainer').scroll(function () {
            var index = 0;
            if (rightGlobalIndex < ($scope.RightTempLazyLoad.length - 5)) {  // If index is greater than maxIndex, refresh and loading stop
                if (($(this).scrollTop() + $(this).height()) > ($(this).scrollspy()[0].scrollHeight - 1)) {
                    if ($scope.RightContentCategories.length) {  // If data has loaded for first time when page is loaded
                        for (var i = (5 * pageLoadingRight); i < ((5 * pageLoadingRight) + 5); i++) {
                            if ($scope.RightTempLazyLoad[i]) {
                                $scope.LazyLoadingRight.push($scope.RightTempLazyLoad[i]);
                                $scope.$apply();
                                index++;
                            };
                        };
                        rightGlobalIndex += index;
                    };
                    pageLoadingRight++;
                };
            };
        });

        /* Fill scopes in middle of page with new data when a link clicks */
        $scope.fillMiddle = function (CurrentCategory) {
            ArticleCategoryFillMiddleAnimationsOnMobile();  // JQuery effects and animations
            /*  */
            $routeParams.IDX = CurrentCategory.ContentCategoryIDX;
            window.location.href = "/#!/NewsCategory/" + $routeParams.IDX;
        };

        /* Call services */
        $scope.GetRightContentCategories();
        $scope.GetLeftContentCategories();

        /*  */
        var lastY = 0;  // Needed in order to determine direction of scroll.
        $(".ArticleListContainer").on('touchstart', function (event) {
            lastY = event.touches[0].clientY;
        });
        $('.ArticleListContainer').on('touchmove', function (event) {
            var top = event.touches[0].clientY;
            /* Determine scroll position and direction */
            var scrollTop = $(event.currentTarget).scrollTop();
            var direction = (lastY - top) < 0 ? "up" : "down";
            /* FIX IT! */
            if (scrollTop == 0 && direction == "up") {
                event.preventDefault();  // Prevent scrolling up when already at top as this introduces a freeze
            } else if (scrollTop >= (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight) && direction == "down") {
                event.preventDefault();  // Prevent scrolling down when already at bottom as this also introduces a freeze
            };
            lastY = top;
        });

        /*  */
        var lastYY = 0;
        $(".RightSideArticleContainer").on('touchstart', function (event) {
            lastYY = event.touches[0].clientY;
        });
        $('.RightSideArticleContainer').on('touchmove', function (event) {
            var top = event.touches[0].clientY;
            var scrollTop = $(event.currentTarget).scrollTop();
            var direction = (lastYY - top) < 0 ? "up" : "down";
            if (scrollTop == 0 && direction == "up") {
                event.preventDefault();
            } else if (scrollTop >= (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight) && direction == "down") {
                event.preventDefault();
            };
            lastYY = top;
        });
    }]);
myApp.controller('ProductCategoryController', ['$scope', 'ProductCategoryServices', '$routeParams', '$rootScope', 'ngProgress', function ($scope, ProductCategoryServices, $routeParams, $rootScope, ngProgress) {
    $('.MainSection').animate({
        scrollTop: $("body").offset().top
    }, 1000);
    $rootScope.ViewClassName = 'page-FadeIn';
    $scope.IDXSupplier=$routeParams.IDXSupplier;
    $scope.FillProductCategoryfromParentToMasterForSite = function (IDXSupplier, IDXParentProductCategory) {
        ngProgress.start();
        var Param = {
            IDXSupplier: IDXSupplier,
            IDXParentCategory: IDXParentProductCategory
        };
        ProductCategoryServices.FillProductCategoryfromParentToMasterForSite(Param).then(function (result) {
            $scope.SubCategories = result.data[0];
        }).catch(function () {
        }).finally(function () {
            ngProgress.stop();
            ngProgress.complete();
        });
    };
    /* sending IDX of target product to server and getting data from server with post method  */
    $scope.GetProductCategoryFromChildToParentForSiteMapMenu = function (IDXParentProductCategory) {
        var Param = {
            IDXParentCategory: IDXParentProductCategory
        };
        ProductCategoryServices.GetProductCategoryFromChildToParentForSiteMapMenu(Param).then(function (result) {
            $scope.BreadCrumbsData = result.data;
        }).catch(function () {
        }).finally(function () {
        });
    };
    $scope.ToggleCollpase = function (event, IDX) {
        $(event.currentTarget).parent().find('#List' + IDX).slideToggle();
        $(event.currentTarget).parent().find('#icon' + IDX).toggleClass('fa-caret-right fa-sort-down');;
    }
    function ScrollContent() {
        if (document.getElementById("StickyProductCategoryHeader") != undefined) {
            var header = document.getElementById("StickyProductCategoryHeader");
            if (window.pageYOffset > 50) {
                $('#List0').css({ 'margin-top': '150px' })
                header.classList.add("StickyProductCategoryHeader");
                $(".StickyProductCategoryHeader").css({ 'top': window.pageYOffset + 'px' });
                $('.imgProductCategoryHeader').hide();
            } else {
                header.classList.remove("StickyProductCategoryHeader");
                $('#List0').css({ 'margin-top': '0px' })
                $('.imgProductCategoryHeader').show();
            }
        }
    }
    $(document).on('scroll', function () { ScrollContent() });
    $scope.FillProductCategoryfromParentToMasterForSite($routeParams.IDXSupplier, $routeParams.IDXParentProductCategory);
    $scope.GetProductCategoryFromChildToParentForSiteMapMenu($routeParams.IDXParentProductCategory);
}])
myApp.controller('SearchController', ['$scope', 'SearchServices', function ($scope, SearchServices) {
    $scope.Search = function (SearchText) {

        if ($('.txtSearch').val() != "") {
            $('.ClearTextSearch').fadeIn();
        }
        else {
            $('.ClearTextSearch').fadeOut();
        }
        if (SearchText.length > 2) {
            $('.imgLoaderSearch').fadeIn();
            var Param = {
                SearchText: SearchText
            }
            SearchServices.FillSearchForSumico(Param).then(function (result) {
                $scope.Searches = result.data;
            }).catch(function () {

            }).finally(function () {
                $('.imgLoaderSearch').fadeOut();
            });
        }
    };
    $scope.HideMenuBox = function () {
        $scope.ClearTextSearch();
        CloseSearchMenu();
    }
    $scope.ClearTextSearch = function () {
        $scope.Searches = undefined;
        $('#txtIndexSearch').val('');
        $('.imgLoaderSearch').fadeOut();
    }
}]);


myApp.controller('SideUserMenuController', ['$scope', '$rootScope', '$cookies', function ($scope, $rootScope, $cookies) {

    $scope.LogOut = function () {
        $cookies.remove('Token');
        $rootScope.Login = undefined;
        ToggleSideUserMenu();
        window.location.href = '/#!/Default';
    }
    $rootScope.SelectSideMenu = function (Url, ID, MenuID) {
        $rootScope.SelectedSideMenuItem = Url;
        $rootScope.MenuParam = ID;
        $('.ActiveUserSideMenu').removeClass('ActiveUserSideMenu');
        if (DetectMobile()) {
            $('.SideMenuViewContainer').animate({ left: 0 });
        }
        if (MenuID) {
            $('#' + MenuID).addClass('ActiveUserSideMenu');
        }
    }
    $rootScope.BackUserSideMenu = function (Url, ID) {
        $('.ActiveUserSideMenu').removeClass('ActiveUserSideMenu');
        if (DetectMobile()) {
            $('.SideMenuViewContainer').animate({ left: '100%' });
        }
    }
}]);
myApp.controller('SignInController', ['$scope', '$rootScope', '$cookies', 'UserSiteService', function ($scope, $rootScope, $cookies, UserSiteService) {
    $scope.signIn = {};

    $scope.LoginUserSite = function (obj) {
        UserSiteService.LoginUserSite(obj).then(function (result) {
            $rootScope.Login = result.data;
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);
            $cookies.put('Token', $rootScope.Login[0].IDLogUser, { 'expires': expireDate }, { 'path': '/' });
            if ($rootScope.LastUrl) {
                if ($rootScope.ActiveModal != undefined) {
                    $($rootScope.ActiveModal).modal('show');
                    $rootScope.ActiveModal = undefined;
                }
                $('#SignInIcon').hide();
                $('#UserMenuButton').show();
                window.location.href = $rootScope.LastUrl;
            }
        }).catch(function (result) { 
            var ErrorMes = "<ul>";
            angular.forEach(result.data, function (value, key) {
                ErrorMes += "<li><p>" + value + "</p></li>";
            })
            ErrorMes += "</ul>";
            AutoClosingErrorAlert(ErrorMes, 7000);
        }).finally(function () {
        });
    };
}]);
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

myApp.controller('SupplierController', ['$scope', '$rootScope', 'SupplierServices', function ($scope, $rootScope, SupplierServices) {
    $scope.FillSupplier = function () {
        SupplierServices.FetchSupplierData().then(function (result) {
            $rootScope.Suppliers = result.data;
        }).catch(function () {

        }).finally(function () {

        });
    };
    $scope.ResetLabProduct = function (_SupplierName) {
        if (_SupplierName === 'SOL') {
            $rootScope.SelectedCategoryIndex = undefined;
            $rootScope.SelectedMasterProdcut = undefined;
            $rootScope.XPartNumber = undefined;
            $rootScope.LastItemSelecting = undefined;
        }
    };
    $scope.FillSupplier();
}]);


myApp.controller('UnderConstructionController', [function () { }]);

myApp.directive('confirm', ['$parse', function ($parse) {
 return {
    restrict: 'A',
    scope: {
      matchTarget: '=',
    },
    require: 'ngModel',
    link: function link(scope, elem, attrs, ctrl) {
      var validator = function (value) {
        ctrl.$setValidity('match', value === scope.matchTarget);
        return value;
      }
 
      ctrl.$parsers.unshift(validator);
      ctrl.$formatters.push(validator);
      
      // This is to force validator when the original password gets changed
      scope.$watch('matchTarget', function(newval, oldval) {
        validator(ctrl.$viewValue);
      });

    }
  };
}]);
myApp.directive('descriptionpattern', function () {
    return {
        require: 'ngModel',
        link: function (scope, element) {
            $(element).on("input", function () {
                var txt = $(this).val();
                if (txt.includes('<') || txt.includes('>')) {
                    $(this).val(txt.replace('<', '').replace('>', ''));
                }
            });
            $(element).change(function () {
                var str = $(this).val();
                for (var i = 0; i < str.length; i++) {
          
                    if (str.charAt(i).includes('<') || str.charAt(i).includes('>')) {
                        str = str.replace(str.charAt(i), '+');
                    }
                }
                $(this).val(str);


            });
        }
    };
});

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
myApp.directive("lazyloadingscroll", function () {
    //return {
    //    restrict: 'A',
    //    scope: {
    //        datasource: '='
    //    },
    //    controller: function ($scope) {
    //    },
    //    link: function (scope, elm, attr) {
    //            var raw = elm[0];
    //            elm.bind('scroll', function () {
    //                if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight - 5) {
    //                    scope.$apply(attr.whenScrolled);
    //                }
    //        };
    //    }
    //}
});
myApp.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

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




myApp.directive('tablefixedrow', [function () {
    return {
        restrict: 'C',
        //scope: {
        //    scrollableWidth: '@scrollablewidth'
        //},
        link: function () {
            /* adding css class to html elements of table */
            var table = document.getElementById('table-scrollable');
            var head = table.getElementsByTagName('thead')[0];
            var body = document.getElementsByTagName('tbody')[0];
            var th = head.getElementsByTagName('th');
            var thFirstChild = head.getElementsByTagName('th')[0];
            var td = body.getElementsByTagName('td');
            table.classList.add('table-scrollable');
            head.classList.add('table-scrollable-head');
            body.classList.add('table-scrollable-body');
            for (var i = 0; i < th.length; i++) {
                th[i].classList.add('table-scrollable-head-th');
            }
            for (var i = 0; i < td.length; i++) {
                td[i].classList.add('table-scrollable-body-td');
            }
            thFirstChild.classList.add('table-scrollable-head-thfirst');
            for (var i = 0; i < body.childElementCount; i++) {
                var tdFirstChild = body.getElementsByTagName('tr')[i].getElementsByTagName('td')[0];
                tdFirstChild.classList.add('table-scrollable-body-tdfirst');
            }

            /* calculate width of cells and set widest cell's width to another cells width */
            var rowNum = body.childElementCount;
            var colNum = body.getElementsByTagName('tr')[0].getElementsByTagName('td').length;
            var trHead = head.getElementsByTagName('tr');
            var trBody = body.getElementsByTagName('tr');
            var tdWidth;
            var tdHeight;

            // we want to get width of cells in every column and calculate max of them
            for (var i = 0; i < colNum; i++) {
                for (var j = 0; j < rowNum; j++) { // getting width
                    var tdTarget = trBody[j].getElementsByTagName('td')[i];
                    tdWidth = tdTarget.clientWidth;
                }
                if (trHead[0].getElementsByTagName('th')[i].clientWidth > tdWidth) { // getting max width
                    tdWidth = trHead[0].getElementsByTagName('th')[i].clientWidth;
                }
                for (var j = 0; j < rowNum; j++) { // setting max width for all body cells in target column
                    var tdBodyFinalWidth = trBody[j].getElementsByTagName('td')[i];
                    tdBodyFinalWidth.style.minWidth = tdWidth + 'px';
                }
                // setting max width for the head cell in target column
                var tdHeadFinalWidth = trHead[0].getElementsByTagName('th')[i];
                tdHeadFinalWidth.style.minWidth = tdWidth + 'px';
            }

            for (var i = 0; i < rowNum; i++) {
                var firstTdBodyHeight = trBody[i].clientHeight;
                trBody[i].getElementsByTagName('td')[0].style.minHeight = firstTdBodyHeight + 'px';
            }

            /* display horizontal and vertiacl scrolling */
            $(document).ready(function () {
                $('.table-scrollable-body').scroll(function (e) { //detect an scroll event on the tbody
                    /*
                    Setting the thead left value to the negative valule of tbody.
                    scrollLeft will make it track the movement of the tbody element.
                    Setting an elements left value to that of the tbody.
                    scrollLeft left makes it maintain.
                    it's relative position at the left of the table.    
                    */
                    $('.table-scrollable-head').css("left", -$(".table-scrollable-body").scrollLeft()); //fix the thead relative to the body scrolling
                    $('.table-scrollable-head-thfirst').css("left", $(".table-scrollable-body").scrollLeft()); //fix the first cell of the header
                    $('.table-scrollable-body-tdfirst').css("left", $(".table-scrollable-body").scrollLeft()); //fix the first column of tdbody
                })
            })

            /* stying width of table in desktop size with input parameter of the directive */
            //if (document.body.clientWidth > 767) {
            //    document.getElementsByClassName('table-scrollable')[0].style.width = scope.scrollableWidth;
            //    document.getElementsByClassName('table-scrollable-head')[0].style.width = scope.scrollableWidth;
            //    document.getElementsByClassName('table-scrollable-body')[0].style.width = scope.scrollableWidth;
            //}
        }
    }
}])
myApp.directive("tooltip", function () {
    return {
        restrict: 'A',
        link: function (scope, elem) {
            elem.tooltip();

        }
    }
})
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
myApp.factory('DefineDetailFactory', ['$rootScope', '$cookies', function ($rootScope, $cookies) {
    var CompareList = [];
    var RecentlyViewedList = [];
    var CountCompareItems;
    return {
        AddToCompareList: function (IDDefineDetailProduct, ImageClass) {
            if (DetectMobile()) {
                CountCompareItems = 2;
            }
            else {
                CountCompareItems = 5;
            }
            if ($cookies.get('CompareList') == undefined || !$cookies.get('CompareList').includes(IDDefineDetailProduct)) {
                if ($cookies.get('CompareList') != undefined) {
                    CompareList = $cookies.get('CompareList').split(",");
                }
                if (CompareList.length < CountCompareItems) {
                    CompareList.push(IDDefineDetailProduct);
                    $cookies.put('CompareList', CompareList);
                    $rootScope.CompareList = $cookies.get('CompareList').split(",");
                    $('.ComareCount').animate({ 'background-color': '#ff0000' }).animate({ 'background-color': '#ffb500' });

                    if (ImageClass != undefined) {
                        var canvas = document.createElement("canvas");
                        context = canvas.getContext('2d');
                        base_image = new Image();
                        base_image.src = $('.' + ImageClass).attr('src');

                        $('#CompareImageDefineMovable').css({
                            'top': $('.' + ImageClass).offset().top + 'px',
                            'left': $('.' + ImageClass).offset().left + 'px',
                            "background-image": "url('" + base_image.src + "')",
                            'display': 'inline-block',
                            'background-size': 'contain',
                            'width': '80px',
                            'height': '60px'
                        });
                        $('#CompareImageDefineMovable').rotate({
                            angle: 0,
                            animateTo: 360
                        });
                        var offsetTopComapre;
                        if (DetectMobile()) {
                            offsetTopComapre = 0;
                        }
                        else {
                            offsetTopComapre = 50;
                        }
                        $('#CompareImageDefineMovable').animate({
                            'top': $('.imgCompareTopButton').offset().top - window.pageYOffset + 'px', 'left': $('.imgCompareTopButton').offset().left - offsetTopComapre + 'px', 'width': '0', 'height': '0'
                        }, 1000);
                    }
                }
                else {
                    AutoClosingErrorAlert('You can not add more than ' + CountCompareItems + ' item to compare list', 5000);
                }
            }
        },
        AddToRecentlyViewedList: function (IDDefineDetailProduct) {

            if ($cookies.get('RecentlyViewedList') == undefined || !$cookies.get('RecentlyViewedList').includes(IDDefineDetailProduct)) {
                if ($cookies.get('RecentlyViewedList') != undefined) {
                    RecentlyViewedList = $cookies.get('RecentlyViewedList').split(",");
                }
                RecentlyViewedList.push(IDDefineDetailProduct);
                $cookies.put('RecentlyViewedList', RecentlyViewedList);
            }
        },
        AddToMaterialList(IDDefineDetailProduct) {
            $rootScope.CurrentDefineDetail = IDDefineDetailProduct;
            if ($cookies.get('Token') == undefined) {
                $('#ModalChekToken').modal('show');
            }
            else {
                $('#ModalMaterialListCategory').modal('show', );
            }
        }
    }
}]);
