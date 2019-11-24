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