var Width = $(window).width();
var Height = $(window).height();
var MarginTopSpace = 0;
var MarginlLeftSpace = 0;
var StartXTouched = 0;
var StartYTouched = 0;

// Calculating height of the div for fixing in the page and scrolling-y
function Init() {

    $('.MainSection').css({ minHeight: Height });
    $('#scrollable-body').css({ height: Height - 300 });

    $('.Bakward').hide();
    if (Width > 767) {
        MarginTopSpace = 0;
        MarginlLeftSpace = Width / 10;
    }
    else {
        $('.PopoverProductMenu').animate({ top: Height + 100, "z-index": "49999" });
        $('#MovableContainer').css({ width: Width });
        MarginTopSpace = 100;
        MarginlLeftSpace = 0;

    }
}
function ToggleSideMenu() {
    var LeftOfMenu = $('.SideContentBox').position().left;
    if (LeftOfMenu != 0) {
        $(".SideNavButton").rotate({
            angle: 0,
            animateTo: 90
        })
        $('#mul').show();
        $('#eq').hide();
        $('.SideContentBox').animate({ left: 0 });
    }
    else {
        $(".SideNavButton").rotate({
            angle: 90,
            animateTo: 0
        })
        $('#mul').hide();
        $('#eq').show();
        $('.SideContentBox').animate({ left: Width });
    }
}
function ToggleProductMenu(btn) {
    $('#DarkBody').click();
    Height = $(window).height();
    var TopOfMenu = $('.PopoverProductMenu').position().top;
    var CountOfBrands = DetectMobile() ? $('.SupplierItemInMenu').length : 3;
    if (TopOfMenu != Height - ((CountOfBrands * 60) + 43)) {
        $('.PopoverProductMenu').animate({ top: Height - ((CountOfBrands * 60) + 43) });
        $('.ContactMenu').animate({ top: Height + 50 });
        $('#DarkBody').fadeIn();
        $('.ViewContainer').removeClass('NoBlur').addClass('Blur');
        if (DetectMobile()) {
            $('.ContactMenuIconIMG').css('content', 'url(/images/SumicoContactIcon.png)');
            $(btn).find('img').css('content', 'url(/images/SumicoProductsIcon.png)');
        }
        else {
            $(btn).find('img').css('content', 'url(/images/SumicoProductsIcon.png)');
            $('.ContactMenuIconIMG').css('content', 'url(/images/SumicoContactIcon.png)');
        }
    }
    else {
        $('.PopoverProductMenu').animate({ top: Height + 50 });
        $('#DarkBody').fadeOut();
        $('.ViewContainer').removeClass('Blur').addClass('NoBlur');
        if (DetectMobile()) {
            $(btn).find('img').css('content', 'url(/images/SumicoProductsIcon.png)');
        }
        else {
            $(btn).find('img').css('content', 'url(/images/SumicoProductsIcon.png)');
        }
    }
}
function HidePopoverProductMenu() {
    $('#DarkBody').click();
}
// Open Search Menu
function OpenSearchMenu() {
    $('#DarkBody').click();
    if (DetectMobile()) {
        $('.SearchBox').animate({ right: 0 });
        $('.SearchTextBox').animate({ width: '72%' });
    }
    else {
        $('.SearchBox').fadeIn();
        $('.SearchTextBox').animate({ width: '88%' });
    }
    $('.Bakward').fadeIn();
    $('.LogoInHeader').hide();
    $('.CatalogMenuButton').hide();
    $('.btnCatalogMenu').hide();
    $(document).addClass('NoScroll');
    $('.SearchControllerInMaster').css({ marginRight: '0', width: '100%' });
    $('#txtIndexSearch').removeAttr("onclick");
    $('#txtIndexSearch').addClass("CursorText");
}
// Close Search Menu
function CloseSearchMenu() {
    if (DetectMobile()) {
        $('.SearchBox').animate({ right: '-100%' });
        $('.CatalogMenuButton').fadeIn();
        $('.LogoInHeader').fadeIn();
        $('.txtSearch').val('');
        $('.imgLoaderSearch').hide();
        $('.ClearTextSearch').hide();
        $('.SearchTextBox').animate({ width: '35px' });
    }
    else {
        $('.ClearTextSearch').hide();
        $('.SearchBox').fadeOut();
        $('.SearchTextBox').animate({ width: '35px' });
    }
    $('.Bakward').hide();
    $('.LogoInHeader').show();
    $('.CatalogMenuButton').show();
    $('.btnCatalogMenu').show();
    $(document).removeClass('NoScroll');
    $('.SearchControllerInMaster').css({ marginRight: 'auto', width: '10%' });
    $('#txtIndexSearch').attr("onclick", 'OpenSearchMenu()');
    $('#txtIndexSearch').removeClass("CursorText");
}
function ToggleContactMenu(btn) {
    $('#DarkBody').click();

    Height = $(window).height();
    var TopOfMenu = $('.ContactMenu').position().top;
    if (TopOfMenu != Height - 353) {
        $('.ContactMenu').animate({ top: Height - 353 });
        $('.PopoverProductMenu').animate({ top: Height + 50 });
        $('#DarkBody').fadeIn();
        $('.ViewContainer').removeClass('NoBlur').addClass('Blur');
        if (DetectMobile()) {
            $(btn).find('img').css('content', 'url(/images/SumicoContactIcon.png)');
            $('.ProductMenuIconIMG').css('content', 'url(/images/SumicoProductsIcon.png)');
        }
        else {
            $('.ProductMenuIconIMG').css('content', 'url(/images/SumicoProductsIcon.png)');
            $(btn).find('img').css('content', 'url(/images/SumicoContactIcon.png)');
        }
    }
    else {
        $('.ContactMenu').animate({ top: Height + 50 });
        $('#DarkBody').fadeOut();
        $('.ViewContainer').removeClass('Blur').addClass('NoBlur');
        if (DetectMobile()) {
            $(btn).find('img').css('content', 'url(/images/SumicoContactIcon.png)')
        }
        else {
            $(btn).find('img').css('content', 'url(/images/SumicoContactIcon.png)');
        }
    }
}
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function GoBack() {
    window.history.back();
}
function OpenCatalogMenu() {
    $('#CatalogeMenuContainer').show();
    if (DetectMobile()) {
        $('#CatalogeMenuContainer').animate({ top: 0 }, { queue: true, duration: 800 });
    }
    else {
        $('#DarkBody').click();
        $('#CatalogeMenuContainer').css({ 'top': '0', 'display': 'none' });
        $('#CatalogeMenuContainer').fadeIn();
        $('#DarkBody').fadeIn();
        $('.ViewContainer').removeClass('NoBlur').addClass('Blur');
    }
    $(document).addClass('NoScroll');
}
function CloseCatalogMenu() {
    if (DetectMobile()) {
        $('#CatalogeMenuContainer').animate({ top: '200%' }, { queue: true, duration: 800 });
    }
    else {
        $('#CatalogeMenuContainer').fadeOut();
        $('#DarkBody').fadeOut();
        $('.ViewContainer').removeClass('Blur').addClass('NoBlur');
    }

}
function ToggleSideUserMenu() {
    if (DetectMobile()) {
        if ($('#UserMenuIcon').hasClass('EqIcon')) {
            $('.SideUserMenu').animate({ "right": "0" }, "slow");
            $('html').addClass('NoScroll');
        }
        else if ($('#UserMenuIcon').hasClass('MulIcon')) {
            $('.SideUserMenu').animate({ "right": "-100%" }, "slow");
            $('html').removeClass('NoScroll');
        }
    }
    else {
        if ($('#UserMenuIcon').hasClass('EqIcon')) {
            $('html').addClass('NoScroll');
            $('.SideUserMenu').animate({ "width": "90%" }, "slow");
            $('.SideUserMenuContainer').show();
            $('.SideMenuViewContainer').fadeIn(2000);

        }
        else if ($('#UserMenuIcon').hasClass('MulIcon')) {
            $('html').removeClass('NoScroll');
            $('.SideUserMenu').animate({ "width": "0" }, "slow");
            $('.SideUserMenuContainer').fadeOut('slow');
            $('.SideMenuViewContainer').hide();

        }
    }

    if ($('#UserMenuIcon').hasClass('EqIcon')) {
        $('#UserMenuIcon').css('content', 'url(/images/mul.png)');
        $('#UserMenuIcon').addClass('MulIcon');
        $('#UserMenuIcon').removeClass('EqIcon');

    }
    else if ($('#UserMenuIcon').hasClass('MulIcon')) {
        $('#UserMenuIcon').css('content', 'url(/images/eq.png)');
        $('#UserMenuIcon').addClass('EqIcon');
        $('#UserMenuIcon').removeClass('MulIcon');

    }

}
function ClickDarkBody() {
    $('#DarkBody').click();
}
/* ArticleCategory Page */
/*----------------------*/
function InitailArtcleCategory() {
    /* Calculating height of the div for fixing in the page and scrolling-y */
    if (DetectMobile()) {
        $('.RightSideArticleContainer').css({ maxHeight: Height - 300 });
        $('.LeftSideArticleList-BodyScrolling').css({ maxHeight: Height - 400 });
        $('.ArticleListContainer').css({ height: Height - 130 });
        $('.ArticleContainer').css({ height: Height - 82 });
    } else {
        $('.ArticleContainer').css({ height: Height - 75 });  // Set White page fit
        $('.ArticleListContainer').css({ maxHeight: Height - 155 });
        $('.RightSideArticleContainer').css({ maxHeight: Height - 235 });
        $('.LeftSideArticleList-BodyScrolling').css({ maxHeight: Height - 400 });
    }
}
function ArticleCategoryFillMiddleAnimationsOnMobile() {
    if (DetectMobile()) {
        $('#LeftButton').css('content', 'url(/images/eq.png)');
        $('#LeftButton').addClass('EqIcon');
        $('#LeftButton').removeClass('MulIcon');
        $('.LeftSideArticleList').css({ left: '-415px' });
        $('.LeftSideArticleList').css({ height: Height - 149 });
        $('.MainSection').removeClass('NoScroll');
    } else if ($('.ArticleContainer').css('height') < Height + 'px') {  // Set height of the div fit with the page in desktop size
        $('.ArticleContainer').css({ height: Height });
    }
}
function ArticleCategoryHideGifWhenDataIsLowerThanPageLoadingLimit() {
    $('.LazyLoadingMiddleGifMobile').hide();
}
function ArticleCategoryShowGifWhenDataIsUpperThanPageLoadingLimit() {
    $('.LazyLoadingMiddleGifMobile').show();
}
function LeftButton() {
    Height = $(window).height();
    /* Toggle left icon */
    if ($('#LeftButton').hasClass('EqIcon')) {
        /* Remove EqIcon and add MulIcon class for displaying mul.png image */
        $('#LeftButton').css('content', 'url(/images/mul.png)');
        $('#LeftButton').addClass('MulIcon').removeClass('EqIcon');
        /* Back other button to primitive situation */
        $('.ArticleMenuBar-DailySentence-img').css({ 'transform': 'rotate(180deg)' });
        $('#RightButton').css('content', 'url(/images/eq.png)');
        $('#RightButton').addClass('EqIcon').removeClass('MulIcon');
    }
    else if ($('#LeftButton').hasClass('MulIcon')) {
        /* Remove MulIcon and add EqIcon class for displaying eq.png image */
        $('#LeftButton').css('content', 'url(/images/eq.png)');
        $('#LeftButton').addClass('EqIcon').removeClass('MulIcon');
    }
    /* Toggle left menu */
    if ($('.LeftSideArticleList').css("left") == '-415px') {
        /* Stop toggling other menus */
        setTimeout(function () {
            $('.RightSideArticleList').css({ display: 'none' });
        }, 499);
        $('.RightSideArticleList').css({ right: '-415px' });
        $('.MobileMenu-DicTitle').fadeOut("fast");
        $('.MobileMenu-DicAbastract').fadeOut("fast");
        $('.MobileMenu-DicDesc').fadeOut("fast");;
        $('.DictionaryContainer-MobileMenu').css({ height: '0px' });
        $('.MobileMenu-MulCloseButton').fadeOut("fast");
        /* Opening left menu */
        $('.LeftSideArticleList').css({ left: 0 });
        $('.MainSection').addClass('NoScroll');
        HinderClickingWhenMenuIsOpen();  // Disable clicking and scrolling other parts of the middle content
    } else {
        /* Closing left menu */
        $('.LeftSideArticleList').css({
            left: '-415px',
            height: Height - 149
        });
        $('.MainSection').removeClass('NoScroll');
        HinderClickingWhenMenuIsClose();  // Enable clicking and scrolling other parts of the middle content
    }
}
function RightButton() {
    Height = $(window).height();
    /* Toggle right icon */
    if ($('#RightButton').hasClass('EqIcon')) {
        /* Remove EqIcon and add MulIcon class for displaying mul.png image */
        $('#RightButton').css('content', 'url(/images/mul.png)');
        $('#RightButton').addClass('MulIcon').removeClass('EqIcon');
        /* Back other button to primitive situation */
        $('.ArticleMenuBar-DailySentence-img').css({ 'transform': 'rotate(180deg)' });
        $('#LeftButton').css('content', 'url(/images/eq.png)');
        $('#LeftButton').addClass('EqIcon').removeClass('MulIcon');
    }
    else if ($('#RightButton').hasClass('MulIcon')) {
        /*Remove MulIcon and add EqIcon class for displaying eq.png image */
        $('#RightButton').css('content', 'url(/images/eq.png)');
        $('#RightButton').addClass('EqIcon').removeClass('MulIcon');
    }
    /* Toggle right menu */
    if ($('.RightSideArticleList').css("right") == '-415px') {
        /* Stop toggling other menus */
        $('.LeftSideArticleList').css({ left: '-415px' });
        $('.MobileMenu-DicTitle').css({ display: 'none' });
        $('.MobileMenu-DicAbastract').fadeOut("fast");
        $('.MobileMenu-DicDesc').fadeOut("fast");
        $('.DictionaryContainer-MobileMenu').css({ height: '0px' });
        $('.MobileMenu-MulCloseButton').fadeOut("fast");
        /* Opening right menu */
        $('.RightSideArticleList').fadeIn("fast");
        $('.RightSideArticleList').css({ right: 0 });
        $('.MainSection').addClass('NoScroll');
        HinderClickingWhenMenuIsOpen();  // Disable clicking and scrolling other parts of the middle content

    } else {
        /* Closing right menu */
        $('.RightSideArticleList').css({ right: '-415px' });
        setTimeout(function () {
            $('.RightSideArticleList').css({ display: 'none' });
        }, 499);
        $('.RightSideArticleList').css({ height: Height - 149 });
        $('.MainSection').removeClass('NoScroll');
        HinderClickingWhenMenuIsClose();  // Enable clicking and scrolling other parts of the middle content
    }
}
function DictionaryButton() {
    Height = $(window).height();
    /* toggle dictionary menu */
    if ($('.DictionaryContainer-MobileMenu').css("height") == '0px') {
        /* Stop toggling other menus */
        $('.LeftSideArticleList').css({ left: '-415px' });
        setTimeout(function () {
            $('.RightSideArticleList').css({ display: 'none' });
        }, 499);
        $('.RightSideArticleList').css({ right: '-415px' });
        /* Back other menu buttons to default */
        $('#RightButton').css('content', 'url(/images/eq.png)');
        $('#RightButton').addClass('EqIcon');
        $('#RightButton').removeClass('MulIcon');
        $('#LeftButton').css('content', 'url(/images/eq.png)');
        $('#LeftButton').addClass('EqIcon');
        $('#LeftButton').removeClass('MulIcon');
        /* Opening dictionary menu and toggling the button */
        $('.MainSection').addClass('NoScroll');
        $('.ArticleMenuBar-DailySentence-img').css({ 'transform': 'rotate(0deg)' });
        $('.MobileMenu-DicTitle').fadeIn("slow");
        $('.MobileMenu-DicAbastract').fadeIn("slow");
        $('.DictionaryContainer-MobileMenu').css({ height: '150px' });
        $('.MainSection').addClass('NoScroll');
        HinderClickingWhenMenuIsOpen();  // Disable clicking and scrolling other parts of the middle content
    } else {
        /* Closing dictionary menu and toggling the button */
        $('.ArticleMenuBar-DailySentence-img').css({ 'transform': 'rotate(180deg)' });
        $('.MobileMenu-DicTitle').fadeOut("fast");
        $('.MobileMenu-DicAbastract').fadeOut("fast");
        $('.MobileMenu-DicDesc').fadeOut("fast");
        $('.MobileMenu-MulCloseButton').fadeOut("fast");
        $('.DictionaryContainer-MobileMenu').css({
            height: '0px'
        });
        $('.MainSection').removeClass('NoScroll');
        HinderClickingWhenMenuIsClose();  // Enable clicking and scrolling other parts of the middle content
        //$('.DictionaryContainer-MobileMenu').css({ top: '-150px' });
    }
}
function ArticleCategoryDictionaryDescMobileButton() {
    Height = $(window).height();
    /* Opening dictionry menu */
    $('.DictionaryContainer-MobileMenu').css({ height: '100vh' });
    $('.MainSection').addClass('NoScroll');
    $('.MobileMenu-DicDesc').fadeIn("slow");
    $('.MobileMenu-MulCloseButton').fadeIn("slow");
    $('.MobileMenu-DicDesc').css({ height: Height - 350 });
}
function MobileMenuMulCloseButton() {
    /* Closing dictionary menu and toggling the arrow button on the top */
    $('.ArticleMenuBar-DailySentence-img').css({ 'transform': 'rotate(180deg)' });
    $('.MobileMenu-DicTitle').fadeOut("fast");
    $('.MobileMenu-DicAbastract').fadeOut("fast");
    $('.MobileMenu-DicDesc').fadeOut("fast");
    $('.MobileMenu-MulCloseButton').fadeOut("fast");
    $('.DictionaryContainer-MobileMenu').css({
        height: '0px'
    });
    HinderClickingWhenMenuIsClose();
    $('.MainSection').removeClass('NoScroll');
}
function HinderClickingWhenMenuIsOpen() {
    $('.ArticleContainer-HinderClicking').show();
}
function HinderClickingWhenMenuIsClose() {
    $('.ArticleContainer-HinderClicking').css({ display: 'none' });
}
function ArticleCategoryCloseAllMenus() {
    /* For left menu */
    $('.LeftSideArticleList').css({
        left: '-415px',
        height: Height - 149
    });
    /* Back to default left menu button */
    $('#LeftButton').css('content', 'url(/images/eq.png)');
    $('#LeftButton').addClass('EqIcon').removeClass('MulIcon');
    /* For right menu */
    $('.RightSideArticleList').css({ right: '-415px' });
    setTimeout(function () {
        $('.RightSideArticleList').css({ display: 'none' });
    }, 499);
    /* Back to default right menu button */
    $('#RightButton').css('content', 'url(/images/eq.png)');
    $('#RightButton').addClass('EqIcon').removeClass('MulIcon');
    /* For dictionary menu */
    $('.ArticleMenuBar-DailySentence-img').css({ 'transform': 'rotate(180deg)' });
    $('.MobileMenu-DicTitle').fadeOut("fast");
    $('.MobileMenu-DicAbastract').fadeOut("fast");
    $('.MobileMenu-DicDesc').fadeOut("fast");
    $('.DictionaryContainer-MobileMenu').css({
        height: '0px'
    });
    HinderClickingWhenMenuIsClose();  // Enable clicking other parts of the middle content
}
//
function GuaranteeScrollItems() {
    var prevClick = [];
    var i = 0;
    ToggleItem = function (event) {
        var getIndex = $(event.currentTarget).parent().index();
        // storing two last clicks in prevClick array
        if (i == 0) {
            prevClick[0] = event.currentTarget;
            i = 1;
        } else {
            prevClick[1] = event.currentTarget;
            i = 0;
        }
        // if two clicks are same, just slideUp and empty the array
        if (prevClick[0] == prevClick[1]) {
            $(".guarantee-toggling-element").slideUp();
            $(".guarantee-toggling-icon").removeClass("fa-minus");  // toggling icons of the title 
            prevClick = [];
        } else {
            $(".guarantee-toggling-element").slideUp();  // close all titles
            $(".guarantee-toggling-icon").removeClass("fa-minus");  // toggling icons of the title
            if (DetectMobile()) {  // scrolling the page to set the clicked title in top of the page
                $(".MainSection").animate({
                    scrollTop: 65 * getIndex
                }, 500);
            } else {
                $("html, body").animate({
                    scrollTop: 83 * getIndex
                }, 500);
            }
            $(event.currentTarget).siblings().slideDown();  // open clicked title
            $(event.currentTarget).children().toggleClass("fa-minus"); // toggling icons of the title
        }
    }
}


$('#DarkBody').on({
    click: function () {
        Width = $(window).width();
        Height = $(window).height();
        $('#MovableContainer').animate({ "margin-top": "0px", right: 0, position: 'inherit' });
        $('#CatalogeMenuContainer').fadeOut();
        $('.FooterMenu').animate({ "margin-bottom": "0" });
        $('.ContactMenu').animate({ top: Height + 50 });
        $('.PopoverProductMenu').animate({ top: Height + 50 });
        $('#DarkBody').fadeOut();
        $('#DarkBody').animate({ "margin-bottom": "0px" })
        $('.ProductMenuIconIMG').animate({ marginTop: '0px' });
        $('.ContactMenuIconIMG').animate({ marginTop: '0px' });
        $('#OpenCatalogMenu').show();
        $('.ViewContainer').removeClass('Blur').addClass('NoBlur');
        $('html').removeClass('NoScroll');
        //----------- Side Menu ---------------


        $('#UserMenuIcon').css('content', 'url(/images/eq.png)');
        $('#UserMenuIcon').addClass('EqIcon');
        $('#UserMenuIcon').removeClass('MulIcon');
        CloseSearchMenu();
        if (DetectMobile()) {
            $('.ContactMenuIconIMG').css('content', 'url(/images/SumicoContactIcon.png)');
            $('.ProductMenuIconIMG').css('content', 'url(/images/SumicoProductsIcon.png)');
            $('.SideUserMenu').animate({ "right": "-100%" }, "slow");
        }
        else {
            $('.SideUserMenu').animate({ "width": "0" }, "slow");
            $('.SideMenuViewContainer').hide();

            $('.SideUserMenuContainer').fadeOut('slow');
            $('.ContactMenuIconIMG').css('content', 'url(/images/SumicoContactIcon.png)');
            $('.ProductMenuIconIMG').css('content', 'url(/images/SumicoProductsIcon.png)');

        }
    }
});
$('.tree-toggle.nav-header').click(function () {
    $(this).find('.Plus').rotate({
        angle: 0,
        animateTo: 180
    });
    $(this).find('.Plus').toggleClass('show hide');

    $(this).find('.Mul').rotate({
        angle: 0,
        animateTo: 180
    });
    $(this).find('.Mul').toggleClass('show hide');
});
$('a').click(function () {
    $(this).fadeOut(100, function () {
        $(this).fadeIn(100);
    });
});
$('.tree-toggle').click(function () {
    $(this).parent().children('ul.tree').slideToggle(150);
});
$(function () {
    $('.tree-toggle').parent().children('ul.tree').toggle();
})
$(window).resize(function () {
    Width = $(window).width();
    Height = $(window).height();

    if (DetectMobile()) {
        $('#MovableContainer').css({ width: Width })
    } else {
        $('#MovableContainer').css({ width: '90%', right: '10%' })
        $('#DarkBody').click();
    };
    $('#MovableContainer').animate({ "margin-top": "0px", right: 0, position: 'inherit' });
    $('.FooterMenu').animate({ "margin-bottom": "0" });


    $('#scrollable-body').css({ height: 49 + 'vh' });
});

Init();