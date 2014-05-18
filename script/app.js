// ( function( $ ) {
//     // Init Skrollr
//     var s = skrollr.init({
//         render: function(data) {
//             //Debugging - Log the current scroll position.
//             //console.log(data.curTop);
//         }
//     });
// } )( jQuery );

$(document).ready(function(){

    //Window setting
    var height = $(window).height() - 80;
    var width = $(window).width();
    var scrolled = false;

    var init = function() {
        $(".slide-1").css("height", (height));
        if (height < 500) {
            $(".scroll-container").hide();
        }
        //menu scrolling setting
        $(".menu").attr(("data-" + height), "background-color:rgba(127, 140, 141, 1); color: rgb(255, 255, 255);");
        $(".menu").attr(("data-" + (height + 1)), "background-color:rgba(255, 255, 255, 0.9); color: rgb(48, 48, 48)");

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
