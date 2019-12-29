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