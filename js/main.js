$(document).ready(function(){
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#wrap').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.7);
	$('.bg2').parallax("50%", 0.2);
	$('.bg3').parallax("50%", 0.5);
	$('.bg4').parallax("50%", -0.1);
	$('.bg5').parallax("50%", -0.5);
	
	setTimeout(function () {
		$('#diamond-blue').addClass('fadeIn');

		var totalHeight=0;

		$('section').each(function () {
			var height = ($(this).height()+parseInt($(this).css('margin-top'))+parseInt($(this).css('margin-bottom')));
			totalHeight += height;
		});

		$('#wrap').css('height', ''+totalHeight+'');
		$('.bg').css('height', ''+totalHeight+'');
		$('.bg2').css('height', ''+totalHeight+'');
		$('.bg3').css('height', ''+totalHeight+'');
		$('.bg4').css('height', ''+totalHeight+'');
		$('.bg5').css('height', ''+totalHeight+'');

	}, 250);

	

	$(window).resize(function () {

		var totalHeight=0;
		
		$('section').each(function () {
			var height = ($(this).height()+parseInt($(this).css('margin-top'))+parseInt($(this).css('margin-bottom')));
			totalHeight += height;
		});

		$('#wrap').css('height', ''+totalHeight+'');
		$('.bg').css('height', ''+totalHeight+'');
		$('.bg2').css('height', ''+totalHeight+'');
		$('.bg3').css('height', ''+totalHeight+'');
		$('.bg4').css('height', ''+totalHeight+'');
		$('.bg5').css('height', ''+totalHeight+'');

	});

});