$(document).ready(function() {
	var soundButton = 	'<img class="soundOn" src="jn-files/soundOn.png" />\
						<img class="soundOff" src="jn-files/soundOff.png" />';

	if(!!document.createElement('audio').canPlayType) {
		$(soundButton).insertBefore('#keyboard');
		$(soundButton).insertBefore('#commentForm label:first').addClass('right');
	}
/*			
	$('#toggleKeyboard').click(function() {
		$('#keyboard').hide();
		$(this).show();
	});
*/
	$('.soundOn').click(function(){
		$('.soundOn').hide();
		$('.soundOff').show();
	});
	$('.soundOff').click(function(){
		$('.soundOff').hide();
		$('.soundOn').show();
	});
	
	/* VALIDATE FORM */
	
	$("#commentForm").validate( {
		rules: {
		  name: {
			required: true,
		  },
		  email: {
			required: true,
			email: true
		  },
		  website: {
			url: true
		  }
		},
		success: function(label) {
		  label.text('OK!').addClass('valid');
		}
  	});

	/* FORM EASING */
	
	$('#commentForm h4').toggle(function() {
		$('#commentForm').animate({'right':'+=410px'}, 2000, 'easeOutElastic');
		$('.soundOn').hide();
		$('.soundOff').show();		
	}, function() {
		$('#commentForm').animate({'right':'-=410px'}, 1500, 'swing');
		$('.soundOff').hide();
		$('.soundOn').show();		
	});
	

});