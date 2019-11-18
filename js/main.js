$(document).ready(function () {
    let click = 0;
    let i = 1;
    let ac
    let dark
    let draggable;

    $(".snackbar").show();
    /*$(".hotdog").hover(function () {
            setTimeout(function () {
                    $(".snackbar").slideDown();
                    let credit = "Yes";
                    $(".credit").text("Credits: " + credit + " (10 sec)");
                
             }, 10000); 
        }, function () {
            setTimeout(function () {
                $(".snackbar").slideUp();
                let credit = "No"
                $(".credit").text("Credits: " + credit + " (10 sec)");
            }, 1500); 
        }
    );*/
    $(".close").click(function (e) { 
            $(".snackbar").animate({bottom: "-10%", opacity: "0"}, 'easeInOutExpo');
        });


    let timeoutId = 0;

    $(".hotdog").hover(function () {
        $(this).removeClass("ar");
        $(this).addClass("a");
            
        }, function () {
            $(this).removeClass("a");
            $(this).addClass("ar");
            // $(this).removeClass("acr");
        }
    );

    $('.hotdog').on('mousedown touchstart', function () {
        timeoutId = setTimeout(1000);
        click = i++;
        console.log(click);
        $(".click").text("Click: " + click);
        $(this).removeClass("acr");
        $(this).addClass("ac");
        ac = true;
        $(".stat").text("Pressed: " + ac);
        
    }).on('mouseup mouseleave touchend', function () {
        clearTimeout(timeoutId);
        $(this).removeClass("ac");
        $(this).addClass("acr");
        ac = false;
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
                draggable = true;
                $(".drag").text("Draggable: " + draggable);
            }).on("mouseup mouseleave touchend", function() {
            })
        }
    });

    $("html").on("keydown", function () {
        if (event.which == "82") {
            $(".hotdog").draggable({disabled: true})
            draggable = false;
            $(".drag").text("Draggable: " + draggable);
            $(".hotdog").animate({left: "", bottom: "", top: "", right: ""}, 'easeInOutExpo');
        }
    });

    let elem = document.documentElement;

    $(".fullscreen").click(function (e) { 
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { 
            elem.mozRequestFullScreen();
        }  
    });
});