//Routing
var myApp = angular.module('myApp', ['ngRoute', 'angular-page-loader', 'ngSanitize', 'ngCookies', 'ngProgress', 'angular-iran-national-id'])
myApp.config(function ($routeProvider, $locationProvider, $httpProvider, $cookiesProvider) {
    //$httpProvider.defaults.withCredentials = true;
    $routeProvider
        .when('/Default',
            {
                templateUrl: '/Main/Default/Default.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'Default');
                    }]
                }
            })
        .when('/HR', {
            templateUrl: '/Main/ApplicationForm/ApplicationForm.html',
            controller: "ApplicationFormController",
            resolve: {
                init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                    AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'ApplicationForm');
                }]
            }
        })
        .when('/Login', {
            templateUrl: '/Main/Login/Login.html',
            controller: "LoginController",
            resolve: {
                init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                    AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'Login');
                }]
            }
        })
        .when('/ProductCategory/:IDXSupplier/:IDXParentProductCategory',
            {
                templateUrl: '/Main/ProductCategory/ProductCategory.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'ProductCategory', $route.current.params.IDXSupplier);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/ProductCategory/:IDXSupplier/:IDXParentProductCategory/:Description',//SEO
            {
                templateUrl: '/Main/ProductCategory/ProductCategory.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'ProductCategory', $route.current.params.IDXSupplier);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/MasterProduct/:IDXProduct',
            {
                templateUrl: '/Main/MasterProduct/MasterProduct.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'MasterProduct', $route.current.params.IDXProduct);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/MasterProduct/:IDXProduct/:Description',//SEO
            {
                templateUrl: '/Main/MasterProduct/MasterProduct.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'MasterProduct', $route.current.params.IDXProduct);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/DefineDetailProduct/:IDX',
            {
                templateUrl: '/Main/DefineDetailProduct/DefineDetailProduct.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'DefineDetailProduct', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/DefineDetailProduct/:IDX/:Meter',
            {
                templateUrl: '/Main/DefineDetailProduct/DefineDetailProduct.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'DefineDetailProduct', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/DefineDetailProduct/:IDX/:Meter/:Description',//SEO
            {
                templateUrl: '/Main/DefineDetailProduct/DefineDetailProduct.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'DefineDetailProduct', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/DefineDetailProductLab/:IDX/:Meter/:Description',//SEO
            {
                templateUrl: '/Main/DefineDetailProductLab/DefineDetailProductLab.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'DefineDetailProductLab', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/ArticleCategory',
            {
                templateUrl: '/Main/ArticleCategory/ArticleCategory.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'ArticleCategory');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/ArticleCategory/:IDX',
            {
                templateUrl: '/Main/ArticleCategory/ArticleCategory.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'ArticleCategory', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/Article/:IDX',
            {
                templateUrl: '/Main/Article/Article.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'Article', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/Article/:IDX/:Description',//SEO
            {
                templateUrl: '/Main/Article/Article.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'Article', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/NewsCategory',
            {
                templateUrl: '/Main/NewsCategory/NewsCategory.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'NewsCategory');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/NewsCategory/:IDX',
            {
                templateUrl: '/Main/NewsCategory/NewsCategory.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'NewsCategory', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        //.when('/SignIn',
        //{
        //    templateUrl: '/Main/SignIn/SignIn.html?v=9.7',
        //    resolve: {
        //init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
        //    AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'Article', $route.current.params.IDX);
        //    $rootScope.LastUrl.push(window.location.href);
        //}]
        //}
        //})
        .when('/SignUp',
            {
                templateUrl: '/Main/SignUp/SignUp.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'SignUp');
                    }]
                }
            })
        .when('/Compare',
            {
                templateUrl: '/Main/Compare/Compare.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'Compare');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/CompareDetail/:CompareListIDX',
            {
                templateUrl: '/Main/CompareDetail/CompareDetail.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'CompareDetail');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/LabProduct/:IDXSupplier/:IDR',
            {
                templateUrl: '/Main/LabProduct/LabProduct.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'LabProduct', $route.current.params.IDXSupplier);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/Guarantee',
            {
                templateUrl: 'Main/Guarantee/GuaranteeDescription.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'Guarantee');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/UnderConstruction',
            {
                templateUrl: 'Main/UnderConstruction/UnderConstruction.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'UnderConstruction');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/AboutUs',
            {
                templateUrl: 'Main/AboutUs/AboutUs.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'AboutUs');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/DictionaryDescription/:IDX',
            {
                templateUrl: 'Main/DictionaryDescription/DictionaryDescription.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'DictionaryDescription', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/AboutUsCategory',
            {
                templateUrl: 'Main/AboutUsCategory/AboutUsCategory.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'AboutUsCategory');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/AboutUsNewsAndEvents',
            {
                templateUrl: 'Main/AboutUsNewsAndEvents/AboutUsNewsAndEvents.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'AboutUsNewsAndEvents');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/AboutUsNewsLetter',
            {
                templateUrl: 'Main/AboutUsNewsLetter/AboutUsNewsLetter.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'AboutUsNewsLetter');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/Incident/:IDX',
            {
                templateUrl: 'Main/Incident/Incident.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'Incident', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/IncidentCategory',
            {
                templateUrl: 'Main/IncidentCategory/IncidentCategory.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'IncidentCategory');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/TrainingMain',
            {
                templateUrl: 'Main/TrainingMain/TrainingMain.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'TrainingMain');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/TrainingCoursesHeld',
            {
                templateUrl: 'Main/TrainingCoursesHeld/TrainingCoursesHeld.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'TrainingCoursesHeld');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/TrainingCoursesHeld/:IDX',
            {
                templateUrl: 'Main/TrainingCoursesHeld/TrainingCoursesHeld.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'TrainingCoursesHeld', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/TrainingCourses',
            {
                templateUrl: 'Main/TrainingCourses/TrainingCourses.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'TrainingCourses');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/TrainingCourses/:IDX',
            {
                templateUrl: 'Main/TrainingCourses/TrainingCourses.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'TrainingCourses', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/TrainingParticipantCV/:IDX',
            {
                templateUrl: 'Main/TrainingParticipantCV/TrainingParticipantCV.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'TrainingParticipantCV', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/TrainingCoursesCompanyCategory',
            {
                templateUrl: 'Main/TrainingCoursesCompanyCategory/TrainingCoursesCompanyCategory.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'TrainingCoursesCompanyCategory');
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/TrainingCoursesCompanyDetail/:IDX',
            {
                templateUrl: 'Main/TrainingCoursesCompanyDetail/TrainingCoursesCompanyDetail.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'TrainingCoursesCompanyDetail', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .when('/Form/:IDX',
            {
                templateUrl: 'Main/Form/Form.html?v=9.7',
                resolve: {
                    init: ['$route', '$cookies', '$rootScope', 'SiteVisitService', function ($route, $cookies, $rootScope, SiteVisitService) {
                        AddSiteVisit(SiteVisitService, $cookies, $rootScope, 'Form', $route.current.params.IDX);
                        $rootScope.LastUrl.push(window.location.href);
                    }]
                }
            })
        .otherwise({
            redirectTo: '/Default'
        });
});
myApp.run(function ($rootScope) {
    if (window.location.href.split(':')[1].replace('//', '') === 'localhost') {
        $rootScope.ServerUrl = 'http://Sumico.ir/';
        //192.168.10.15:2015/
        //http://+localhost:2018/
        //ttp://Sumico.ir/
    }
    else {
        $rootScope.ServerUrl = 'http://Sumico.ir/';
    }
    $rootScope.LastUrl = [];
});


myApp.factory('SiteVisitService', function ($http) {
    return {
        AddSiteVisit: function (Param, ServerUrl) {
            return $http({
                method: 'Post',
                url: ServerUrl + '/api/SiteVisit/AddSiteVisit/',
                data: JSON.stringify(Param),
                headers: { "Content-Type": "application/json" }
            });
        }
    };
});
function AddSiteVisit(SiteVisitService, $cookies, $rootScope, _TableName, _IDRet) {
    $.getJSON('https://ipapi.co/json/', function (data) {
        ClientInfo = data;
        var Param = {
            IDRet: _IDRet,
            TableName: _TableName,
            IP: ClientInfo.ip,
            BrowserName: GetBrowserName(),
            OS: GetOSName()
        }
        var url = window.location.href;
        var IsVisited = $cookies.get(url);
        if (IsVisited != 'T') {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + (6 * 60 * 60 * 1000));
            $cookies.put(window.location.href, 'T', { 'expires': expireDate });
            SiteVisitService.AddSiteVisit(Param, $rootScope.ServerUrl).then(function (result) {
            }).catch(function (result) {
            }).finally(function () {
            });
        }
    });
}

function GetBrowserName() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        //return 'IE ' + (tem[1] || '');
        return { name: 'IE ', version: (tem[1] || '') };
    }

    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/);
        //if (tem != null) return 'Opera ' + tem[1];
        if (tem != null) { return { name: 'Opera', version: tem[1] }; }
    }

    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];

    if ((tem = ua.match(/version\/(\d+)/i)) != null) {
        M.splice(1, 1, tem[1]);
    }
    var BrowserName = M.join(' Version # ')
    return M.join(' ');
}

function GetOSName() {
    var OSName = "Unknown";
    if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) OSName = "Windows 10";
    if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName = "Windows 8.1";
    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName = "Windows 8";
    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName = "Windows 7";
    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName = "Windows Vista";
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName = "Windows XP";
    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName = "Windows 2000";
    if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac/iOS";
    if (window.navigator.userAgent.indexOf("X11") != -1) OSName = "UNIX";
    if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
    return OSName;
}