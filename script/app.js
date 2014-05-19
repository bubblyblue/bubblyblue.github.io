
$(document).ready(function(){

    //Window setting
    var height = $(window).height() - 80;
    var width = $(window).width();
    var scrolled = false;

    var init = function() {
        $(".slide-1").css("height", height);
        $(".slide-1").css("width", width);
        if (height < 500) {
            $(".scroll-container").hide();
        }
        //slide-1
        $(".slide-1").attr(("data-" + (height + 400)), "opacity:1");
        $(".slide-1").attr(("data-" + (height + 401)), "opacity:0");
        //slide-2
        $(".slide-2").css("margin-top", height+ "px");
        //menu scrolling setting
        $(".menu").attr(("data-" + height), "background-color:rgba(255, 192, 0, 1); color: rgb(0, 0, 0);");
        $(".menu").attr(("data-" + (height + 1)), "background-color:rgba(255, 255, 255, 0.9); color: rgb(48, 48, 48)");
        //Experience container
        $(".experience-container-right").css("left", (width - 800) + "px");
        var expList = $(".all-experience-container").find(".experience-container");
        for (var i = 0; i < expList.length; i++) {
            $(expList[i]).attr("data--50-bottom", "left:" + ($(expList[i]).css("left")));
            $(expList[i]).attr("data--200-bottom", "left:" + (width - 800) / 2 + "px");
        }
        //Slide-4
        $(".slide-4").css("height", height);
        $(".slide-4").css("width", width);
        $(".fix-position").css("height", height);
        $(".fix-position").css("width", width);
        $(".contact-header").css("padding-top", (height * 0.3 - parseInt($(".contact-header").css("height"), 10) / 2) + "px");



        var s = skrollr.init();
    }


    var first = $("div#first");
    var runAnima = function() {
        first.delay(200).fadeTo(600, 0.3);
        first.next().delay(400).fadeTo(600, 0.3);
        first.next().next().delay(600).fadeTo(600, 0.3);
        first.next().next().next().delay(800).fadeTo(600, 0.3);
        first.delay(600).fadeTo(600, 1);
        first.next().delay(700).fadeTo(600, 1);
        first.next().next().delay(800).fadeTo(600, 1);
        first.next().next().next().delay(900).fadeTo(600, 1);
        setTimeout(runAnima, 4000);
    }

    init();
    runAnima();

    $(window).scroll(function() {
        //scrolled = true;
    })

    $(".logo").click(function() {
        console.log("height is " + height);
    })
});
