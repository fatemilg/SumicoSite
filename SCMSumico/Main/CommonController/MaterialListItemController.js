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