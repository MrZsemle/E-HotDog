$(document).ready(function () {
    var click = 0;
    var i = 1;
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
    var timeoutId = 0;

    $('.hotdog').on('mousedown', function () {
        timeoutId = setTimeout(1000);
        var click = i++;
        console.log(click);
        $(".click").text("Click: "+click);
        
    }).on('mouseup mouseleave', function () {
        clearTimeout(timeoutId);
    });
});