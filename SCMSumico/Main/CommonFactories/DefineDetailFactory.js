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
