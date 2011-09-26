$(document).ready(function() {

	$('#js-yes').removeClass('hide');
	$('#js-no').remove();

/* VALIDATE FORM */
	$("#commentForm").validate( {
		rules: {
		  name: {
			required: true,
			minlength: 2
		  },
		  email: {
			required: true,
			email: true
		  },
		  website: {
			url: true
		  },
		  message: {
			minlength: 10
		  }
		},
		success: function(label) {
		  label.text('OK!').addClass('valid');
		}
  	});

/* FORM EASING */
	$('#commentForm a').toggle(function() {
		$('#commentForm').animate({'right':'0'}, 2000, 'easeOutElastic');
		$('.soundOn').hide();
		$('.soundOff').show();		
	}, function() {
		$('#commentForm').animate({'right':'-=410px'}, 1500, 'swing');
		$('.soundOff').hide();
		$('.soundOn').show();		
	});

	$('#commentForm').removeClass('slideOut');

/* AJAX TAB LOADING */
	$('#tabs ul a').click(function(e) {
		var url = $(this).attr('href') + ' #single-tab';
		$('#tab-content').load(url);
		$('#tabs ul a').removeClass("active");
		$(this).addClass("active");
		e.preventDefault();
	});

/* MAC TABS IMAGES HOVER */
	$('a.hover').live({
		mouseenter:
		function(e){
			this.t = this.title;
			this.title = "";
			var c = (this.t != "") ? "<br/>" + this.t : "";
			var imglink = $(this).attr('href');
			var imgPos = $(this).closest('.images').prev('.terms').children("dl").children("dt");

			$('<p id="largeImage"><img src="' + imglink + '" />'+ c +'</p>').fadeIn(600).appendTo(imgPos);
		},
		mouseleave:
		function() {
			this.title = this.t;
			$('#largeImage').remove();
		}
	});
/*
	$('a.hover').live("click", function(e){
		e.preventDefault();
	});
*/
/* LIGHTBOX - YOUTUBE VIDEOS */
	$(".yt").live('click', function() {
		url = this.href;
		$.fn.colorbox({href: url, iframe:true, innerWidth:595, innerHeight:371});
		return false;
	});

/* KEYBOARD */
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
	
	var z = document.getElementById('keyPressSound'),
		p = 'pressed';

	$("td.key").click(function(e){
		if($('.soundOn').is(":visible")){
		z.play();}

		var xx = $(e.target),
    		yy = xx.text();

		/* HOME link */
		var	aa = $('#home > a > span'),
			bb = aa.not('.' + p).first(),
			cc = bb.text(),
			dd = aa.last();

		yy == cc ? bb.addClass(p) : aa.removeClass(p);
		if ($(dd).hasClass("pressed")) {
			setTimeout(function() {
				$(location).attr('href','/'); /* loads new page once all letters in the word have been highlighted */
			}, 200); /* adds slight pause so the last letter can play the keyboard click sound before loading next page */
		}

		/* PLAY link */
		var	mm = $('#play > a > span'),
			nn = mm.not('.' + p).first(),
			oo = nn.text(),
			qq = mm.last(),
			vv = mm.first();

		yy == oo ? nn.addClass(p) : mm.removeClass(p);
		if ($(qq).hasClass("pressed")) {
			setTimeout(function() {
				$(location).attr('href','play.html');
			}, 200);
		}

		/* RESOURCES link */
		var rr = $('#resources > a > span'),
			ss = rr.not('.' + p).first(),
			tt = ss.text(),
			uu = rr.last();
			ww = rr.first();

		yy == tt ? ss.addClass(p) : rr.removeClass(p);
		if ($(uu).hasClass("pressed")) {
			setTimeout(function() {
				$(location).attr('href','resources.html');
			}, 200);
		}

	});

	$(document).keypress(function(e) {
		/* HOME link */
		var a = $('#home > a > span'),
			b = a.not('.' + p).first(),
			c = b.text().charCodeAt(0),
			d = a.last();

		e.which == c ? b.addClass(p) : a.removeClass(p);
		if ($(d).hasClass("pressed")) {
			setTimeout(function() {
				$(location).attr('href','/');
			}, 200);
		}

		/* PLAY link */
		var m = $('#play > a > span'),
			n = m.not('.' + p).first(),
			o = n.text().charCodeAt(0),
			q = m.last(),
			v = m.first();	

		e.which == o ? n.addClass(p) : m.removeClass(p);
		if ($(q).hasClass("pressed")) {
			setTimeout(function() {
				$(location).attr('href','play.html');
			}, 200);
		}

		/* RESOURCES link */
		var r = $('#resources > a > span'),
			s = r.not('.' + p).first(),
			t = s.text().charCodeAt(0),
			u = r.last();
			w = r.first();

		e.which == t ? s.addClass(p) : r.removeClass(p);
		if ($(u).hasClass("pressed")) {
			setTimeout(function() {
				$(location).attr('href','resources.html');
			}, 200);
		}

	});

	/* Animates pressed key's block */
	function animateLetter(letter){
		if($('.soundOn').is(":visible")){
		z.play();
		}
		$("#letter-" + letter).addClass('blue');
		setTimeout(function() {
			$("#letter-" + letter).removeClass('blue');
		}, 100);
	}

	$(document).keypress(function(e) {
		if (e.which >= 97 && e.which <= 122){
			animateLetter(String.fromCharCode(e.which));
		}
	});
});


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/


jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	}
});