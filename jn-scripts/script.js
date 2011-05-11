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

	$('#tabs ul a').click(function(e) {
		var url = $(this).attr('href') + ' #single-tab';
		$('#tab-content').load(url);
		$('#tabs ul a').removeClass("active");
		$(this).addClass("active");
		e.preventDefault();
	});


	/* MAC TABS IMAGES */
		
	var offsetX = -500;
	var offsetY = -335;
	
	$('img.hover').live({
		mouseenter:
		function(e){
			var imglink = $(this).attr('src');
			$('<img id="largeImage" src="' + imglink + '" />').css({'top':  e.pageY + offsetY, 'left': e.pageX + offsetX}).appendTo('body');
		},
		mouseleave:
		function() {
			$('#largeImage').remove();
		}
	});

	$('img.hover').live("mousemove", function(e){
		$('#largeImage').css({'top':  e.pageY + offsetY, 'left': e.pageX + offsetX});
	});



});