$(document).ready(function(){
	
	var slctdM = $('select[name="BIRTHDATE[month]"]');
	var slctdY = $('select[name="BIRTHDATE[year]"]');
	var slctdD = $('select[name="BIRTHDATE[day]"]');

	// Populate Years between now 1918
	var start_year = new Date().getFullYear();
	for (var i = start_year; i > start_year - 101; i--) {
		$(slctdY).append('<option value="' + i + '">' + i + '</option>');
	}

	function htmlEntities(str) {
	    var entities = {
	    	'&'	: '&amp;',
	    	'& ': "&",
	    	'<' : '&lt;',
	    	'>'	: '&gt;',
	    	'\"': '&quot;',
	    	'\'': '&apos;' 
	    }

	    return str.split('').map(function(char) {
	    	return entities[char] || char;
	    }).join('')
	}

	$('input[type=text]').on('keyup', function(e){
		var newValue = htmlEntities(e.target.value)
		console.log(newValue);

	})

	// Populate Days while paying attention to month change
	function daysInMonth(month,year) {
	  return new Date(year, month, 0).getDate();
	}

	
	// Default days
	if(slctdM.val() ==""){
		for (var i = 1; i <= 31; i++) {
			$(slctdD).append('<option value="' + i + '">' + i + '</option>');
		}
	}


	// Input change listener
	slctdM.on('change', function(){
		var dys = daysInMonth(slctdM.val(), slctdY.val());

		$(slctdD).html('<option value="">Day</option>');

		for (var i = 1; i <= dys; i++) {
			$(slctdD).append('<option value="' + i + '">' + i + '</option>');
		}
	})
	
});