$(document).ready(function() {
	var soundButton = 	'<img class="soundOn" src="jn-files/soundOn.png" />\
						<img class="soundOff" src="jn-files/soundOff.png" />';

	if(!!document.createElement('audio').canPlayType) {
		$(soundButton).insertBefore('#keyboard');
		$(soundButton).insertBefore('#commentForm label:first').addClass('right');
	}

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

	/* AJAX TAB LOADING */

	$('#tabs ul a').click(function(e) {
		var url = $(this).attr('href') + ' #single-tab';
		$('#tab-content').load(url);
		$('#tabs ul a').removeClass("active");
		$(this).addClass("active");
		e.preventDefault();
	});


	/* MAC TABS IMAGES HOVER */

	$('dl a.hover').live({
		mouseenter:
		function(e){
			this.t = this.title;
			this.title = "";
			var c = (this.t != "") ? "<br/>" + this.t : "";
			var imglink = $(this).attr('href');
			var imgPos = $(this).closest('.images').prev('.terms').children("dt");

			$('<p id="largeImage"><img src="' + imglink + '" />'+ c +'</p>').fadeIn(600).appendTo(imgPos);
		},
		mouseleave:
		function() {
			this.title = this.t;
			$('#largeImage').remove();
		}
	});
	
	$('dl a.hover').live("click", function(e){
		e.preventDefault();
	});

	/* LIGHTBOX - YOUTUBE VIDEOS */

	$(".yt").live('click', function() {
		url = this.href;
		$.fn.colorbox({href: url, iframe:true, innerWidth:595, innerHeight:371});
		return false;
	});

});