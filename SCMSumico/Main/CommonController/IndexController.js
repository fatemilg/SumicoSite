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


