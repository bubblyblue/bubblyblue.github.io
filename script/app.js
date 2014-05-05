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
	$(".slide-1").css("height", (height));
	$(".viewport-container").css("height", ($(document).height()));

	//first page
	$(".rectangle").css("left", ((1 - 50/width) * 50 + "%"));
	$(".triangle").css("left", ((1 - 100/width) * 50 + "%"));

  	$(".logo").click(function() {
  		console.log("height is " + height);
  	})
});