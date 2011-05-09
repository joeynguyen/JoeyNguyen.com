$(document).ready(function() {
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

		/* ABOUT link */
		var	gg = $('#about > a > span'),
			hh = gg.not('.' + p).first(),
			ii = hh.text(),
			jj = gg.last();

		yy == ii ? hh.addClass(p) : gg.removeClass(p);
		if ($(jj).hasClass("pressed")) {
			setTimeout(function() {
				$(location).attr('href','about.html');
			}, 200);
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

		/* prevent first letters in other links from highlighting */
		if ($(vv).hasClass("pressed")) {
			$(gg).removeClass("pressed");
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

		/* ABOUT link */
		var g = $('#about > a > span'),
			h = g.not('.' + p).first(),
			i = h.text().charCodeAt(0),
			j = g.last();

		e.which == i ? h.addClass(p) : g.removeClass(p);
		if ($(j).hasClass("pressed")) {
			setTimeout(function() {
				$(location).attr('href','about.html');
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

		/* prevent first letters in other links from highlighting */
		if ($(v).hasClass("pressed")) {
			$(g).removeClass("pressed");
		}
	});

	/* Animates pressed key's block */
	function animateLetter(letter){
		if($('.soundOn').is(":visible")){
		z.play();}
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