$(document).ready(function(){

	
	


	$(window).on('load', function() {
		var totalHeight=$(".body-container").height();
		console.log(totalHeight,2);
		$('#wrap, .bg, .bg2, .bg3, .bg4, .bg5').height(totalHeight);
	})
	


	$('#wrap').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.7);
	$('.bg2').parallax("50%", 0.2);
	$('.bg3').parallax("50%", 0.5);
	$('.bg4').parallax("50%", -0.1);
	$('.bg5').parallax("50%", -0.5);

	
	
	// $('#wrap, .bg, .bg2, .bg3, .bg4, .bg5').height(totalHeight);
	$(window).on('scroll', function(){
		var sticky = $('#nav').offset().top;
		var mlbHeight = $('#mlbHeader').height();	
		if(window.pageYOffset >= mlbHeight) {
			$('#nav').addClass('sticky')
		}
		if(window.pageYOffset < mlbHeight) {
			$('#nav').removeClass('sticky')
		} 
	})

	$(window).resize(function () {
		var totalHeight=$(".body-container").height();
		// console.log(totalHeight)		
		$('#wrap, .bg, .bg2, .bg3, .bg4, .bg5').height(totalHeight);
		

		// $('#wrap').css('height', ''+totalHeight+'');
		// $('.bg').css('height', ''+totalHeight+'');
		// $('.bg2').css('height', ''+totalHeight+'');
		// $('.bg3').css('height', ''+totalHeight+'');
		// $('.bg4').css('height', ''+totalHeight+'');
		// $('.bg5').css('height', ''+totalHeight+'');

	}).resize();

	// $(window).trigger('resize');

});