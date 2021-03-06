﻿function AutoClosingSuccessAlert(text, Delay) {
    $('.alert_placeholders').html('<div class="alert_placeholders_Content"><div class="alert alert-success fade in">' +
        '<button data-dismiss="alert" class="close close-sm closeAbsolute" type="button">' +
        '<i class="fa fa-times"></i>' +
        '</button><strong class="TitleOfAlert"> ' + text + '</strong></div></div>');
    $(".alert_placeholders").fadeTo(Delay, 500).fadeOut(500, function () {
        $(".alert_placeholders").fadeOut(500);
    });
}

function AutoClosingErrorAlert(text, Delay) {
    $('.alert_placeholders').html('<div class="alert_placeholders_Content"><div class="alert alert-danger fade in">' +
        '<button data-dismiss="alert" class="close close-sm closeAbsolute" type="button">' +
        '<i class="fa fa-times"></i>' +
        '</button><strong class="TitleOfAlert"> ' + text + '</strong></div></div>');
    $(".alert_placeholders").fadeTo(Delay, 500).fadeOut(500, function () {
        $(".alert_placeholders").fadeOut(500);
    });
}

function AutoClosingWarningAlert(text, Delay) {
    $('.alert_placeholders').html('<div class="alert_placeholders_Content"><div class="alert alert-warning fade in">' +
        '<button data-dismiss="alert" class="close close-sm closeAbsolute" type="button">' +
        '<i class="fa fa-times"></i>' +
        '</button><strong class="TitleOfAlert"> ' + text + '</strong></div></div>');
    $(".alert_placeholders").fadeTo(Delay, 500).fadeOut(500, function () {
        $(".alert_placeholders").fadeOut(500);
    });
}