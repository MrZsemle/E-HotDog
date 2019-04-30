$(document).ready(function () {
    var click = 0;
    var i = 1;
    var ac
    var credit

    $(".snackbar").hide();
    $(".hotdog").hover(function () {
            setTimeout(function () {
                $(".snackbar").slideDown();
                var credit = "Yes";
                $(".credit").text("Credits: " + credit+" (5 sec)");
             }, 5000); 
        }, function () {
            setTimeout(function () {
                $(".snackbar").slideUp();
                var credit = "No"
                $(".credit").text("Credits: " + credit + " (5 sec)");
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
        var ac = "Yes";
        $(".stat").text("Pressed: " + ac);
        
    }).on('mouseup mouseleave', function () {
        clearTimeout(timeoutId);
        $(this).removeClass("ac");
        $(this).addClass("acr");
        var ac = "No";
        $(".stat").text("Pressed: " + ac);
        
    });

    $(".hotdog").click(function (e) { 
        
    });
});




