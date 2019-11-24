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




