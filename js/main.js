$(document).ready(function () {
    $(".snackbar").hide();
    $(".hotdog").hover(function () {
            setTimeout(function () {
                $(".snackbar").slideDown();
             }, 5000); 
        }, function () {
            setTimeout(function () {
                $(".snackbar").slideUp();
            }, 1500); 
        }
    );
});