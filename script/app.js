// ( function( $ ) {
//     // Init Skrollr
//     var s = skrollr.init({
//         render: function(data) {
//             //Debugging - Log the current scroll position.
//             //console.log(data.curTop);
//         }
//     });
// } )( jQuery );
var s = skrollr.init();

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
  		if(!scrolled) {
  			setTimeout(runAnima, 4000);
  		}
	}

	init();
	runAnima();

    $(window).scroll(function() {
        scrolled = true;
    })

  	$(".logo").click(function() {
  		console.log("height is " + height);
  	})
});