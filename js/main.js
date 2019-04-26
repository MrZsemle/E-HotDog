$(document).ready(function () {
    $(".snackbar").hide();
    $(".hotdogcop").hover(function () {
            $(".snackbar").slideDown();
        }, function () {
            $(".snackbar").slideUp();
        }
    );

});