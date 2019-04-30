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

    $(".hotdog").hover(function () {
        $(this).removeClass("ar");
        $(this).addClass("a");
            
        }, function () {
            $(this).removeClass("a");
            $(this).addClass("ar");
            $(this).removeClass("acr");
        }
    );

    $('.hotdog').on('mousedown', function () {
        timeoutId = setTimeout(1000);
        var click = i++;
        console.log(click);
        $(".click").text("Click: "+click);
        $(this).removeClass("acr");
        $(this).addClass("ac");
        
    }).on('mouseup mouseleave', function () {
        clearTimeout(timeoutId);
        $(this).removeClass("ac");
        $(this).addClass("acr");
    });
});