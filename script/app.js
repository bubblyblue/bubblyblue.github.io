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
	$(".slide-1").css("height", (height));
	$(".viewport-container").css("height", ($(document).height()));

	//first page
	// $(".name-container").css("line-height", (height * 0.6 + "px"));

  	$(".logo").click(function() {
  		console.log("height is " + height);
  	})
});