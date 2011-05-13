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
		
	var offsetX = -235;
	
	$('a.hover').live({
		mouseenter:
		function(e){
			this.t = this.title;
			this.title = "";	
			var c = (this.t != "") ? "<br/>" + this.t : "";
			var imglink = $(this).attr('href');

			imageHeight = $(this).children("img").attr("height");

			$('<p id="largeImage"><img src="' + imglink + '" />'+ c +'</p>').css({'top':  e.pageY - (imageHeight*1.8 + 50), 'left': e.pageX + offsetX}).appendTo('body');

		},
		mouseleave:
		function() {
			this.title = this.t;
			$('#largeImage').remove();
		}
	});

	$('a.hover').live("mousemove", function(e){
		$('#largeImage').css({'top':  e.pageY - (imageHeight*1.8 + 50), 'left': e.pageX + offsetX});
	});

	$('dl a.hover').live("click", function(e){
		e.preventDefault();
	});


});