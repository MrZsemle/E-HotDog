$(document).ready(function () {
    var click = 0;
    var i = 1;
    var ac
    var dark

    $(".snackbar").show();
    /*$(".hotdog").hover(function () {
            setTimeout(function () {
                    $(".snackbar").slideDown();
                    var credit = "Yes";
                    $(".credit").text("Credits: " + credit + " (10 sec)");
                
             }, 10000); 
        }, function () {
            setTimeout(function () {
                $(".snackbar").slideUp();
                var credit = "No"
                $(".credit").text("Credits: " + credit + " (10 sec)");
            }, 1500); 
        }
    );*/
    $(".material-icons").click(function (e) { 
            $(".snackbar").slideUp();
        });


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

    $('.hotdog').on('mousedown touchstart', function () {
        timeoutId = setTimeout(1000);
        var click = i++;
        console.log(click);
        $(".click").text("Click: " + click);
        $(this).removeClass("acr");
        $(this).addClass("ac");
        var ac = "Yes";
        $(".stat").text("Pressed: " + ac);
        
    }).on('mouseup mouseleave touchend', function () {
        clearTimeout(timeoutId);
        $(this).removeClass("ac");
        $(this).addClass("acr");
        var ac = "No";
        $(".stat").text("Pressed: " + ac);
        
    });

    $("html").on("contextmenu", function (e) {
        return false;
    });

    $("html").on("keydown", function (e) {
        if (event.which == "123") {
            return false;
        }
    });

    
    $("html").on("keydown", function () {
        if (event.which == "68") {  
            $("body, html").toggleClass("dark");
            $(".stats").toggleClass("statsdark");
            $(".copyright").toggleClass("copyrd");
        }
    });
    
    $("html").on("keydown", function () {
        if (event.which == "84") {
            $(".hotdog").on("touchstart mousedown", function () {
                $(".hotdog").draggable();
            }).on("mouseup mouseleave touchend", function() {
            })
        }
    });
});