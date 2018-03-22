/*! -------------------------------------------------------------------------------------------
 JAVASCRIPT main engine!

 * @Version:    1.0 - 2015
 * @author:     Burocratik (alexandre gomes - @alexrgomes)
 * @email:      alex@burocratik.com, hello@burocratik.com
 * @website:    http://www.burocratik.com
 * @preserve
 --------------------------------------------------------------------------------------------*/
function loadPages(e, t) {
	var a = $(".page-main.page-current"),
		o = $(".page-main.page-next"),
		n = $(".nav-lang");
	return $("html,body").addClass("fixed-all"), $_body.removeClass("js-no-ajax"), $_body.addClass("js-loading-page"), iniHeaderAnimations("close"), whenScrolling(!1), "open-nav" == t ? (a.find(".page-toload").remove(), void a.load(e + " .page-toload", function(t, o, n) {
		if (!$(this).html()) return window.location = e, !1;
		$(".page-main.page-current .preload").imagesLoaded(function(e, t, a) {
			$(this).imagesLoaded().always(function() {
				$(".page-main.page-current .header .block-bg-cover").addClass("go"), $(".page-main.page-current .header .anim-zoom").addClass("go")
			})
		}), $_btn_nav_main.click(), onStartPageWhenRefresh(!1), a.attr("style", "")
	})) : "default" == t ? void o.load(e + " .page-toload", function(t, n, s) {
		if (!$(this).html()) return window.location = e, !1;
		o.css("transform-origin", "center center"), a.velocity({
			scale: [".8", "1"],
			opacity: [".4", "1"]
		}, {
			duration: 1200,
			delay: 100,
			easing: [.76, 0, .175, 1],
			complete: function() {
				clearPagesAfterloading(0)
			}
		}), o.velocity({
			translateY: ["0", "110%"],
			scale: ["1", "2"]
		}, {
			duration: 1100,
			easing: [.76, 0, .175, 1]
		}), $(".page-main.page-current .preload").imagesLoaded(function(e, t, a) {
			$(this).imagesLoaded().always(function() {
				$(".page-main.page-current .header .block-bg-cover").addClass("go"), $(".page-main.page-current .header .anim-zoom").addClass("go")
			})
		})
	}) : void 0
}

function clearPagesAfterloading(e) {
	var t = $(".page-main.page-current"),
		a = $(".page-main.page-next");
	$.doTimeout(e, function() {
		t.remove(), a.removeClass("page-next"), a.addClass("page-current").attr("role", "main").removeAttr("aria-hidden");
		var e = $(".page-main.page-current");
		e.after('<main class="page-main page-next" aria-hidden="true"></main>'), onStartPageWhenRefresh(!1), e.attr("style", ""), window.scrollTo(0, 0), $("html,body").scrollTop(0), $(".page-main.page-current .preload").imagesLoaded(function(e, t, a) {
			$(this).imagesLoaded().always(function() {
				$(".page-main.page-current .header .block-bg-cover").addClass("go"), $(".page-main.page-current .header .anim-zoom").addClass("go")
			})
		})
	})
}

function onStartPageWhenRefresh(e) {
	e ? (window.scrollTo(0, 0), $("html,body").scrollTop(0), $("html,body").addClass("fixed-all"), $_loadingPage.addClass("js-loading-page"), $_body.removeClass("js-byrefresh"), $_toPreload.imagesLoaded(function(e, t, a) {
		$(this).imagesLoaded().always(function() {
			if ($(".page-current .home").length && $_body.addClass("home"), $("html,body").animate({
					scrollTop: 0
				}, 100), $_html.hasClass("no-object-fit")) {
				var e = $(".page-current .element-cover");
				resizeLikeCover(e)
			}
			$(".page-main.page-current .header .block-bg-cover").addClass("go"), $(".page-main.page-current .header .anim-zoom").addClass("go"), $_loadingPage.velocity({
				opacity: 0
			}, 600, function() {
				$("html,body").removeClass("fixed-all"), $_loadingPage.removeClass("js-loading-page").hide(), onStartPage()
			})
		})
	})) : onStartPage()
}

function onStartPage() {
	var e, t, a, o, n, s, i, r, l, d, c, u;
	_global_allowNavigate = !0, $("html,body").removeClass("fixed-all"), $_body.removeClass("js-loading-page"), t = !!$(".page-current .home").length, homePage(t), o = !!$(".page-current .news").length, newsPage(o), i = !!$(".page-current .single-news").length, singlenewsPage(i), n = !!$(".page-current .carrers").length, carrersPage(n), r = !!$(".page-current .single-carrers").length, singlecarrersPage(r), c = !!$(".page-current > .sectors").length, sectorsPage(c), d = !!$(".page-current .single-sectors").length, singlesectorsPage(d), l = !!$(".page-current .about").length, aboutPage(l), s = !!$(".page-current .contacts").length, contactsPage(s), u = !!$(".page-current .page-404").length, errorPage(u), e = !!$(".page-current #clock").length, clockAnalog(e), mainNavigation_activeLinks($(".page-current .page-toload").attr("data-url"));
	var h = window.location.hash;
	if ("" != h) {
		var p = $("" + h);
		$.doTimeout(100, function() {
			goTo(p, 1e3, [.7, 0, .3, 1], 0)
		})
	}
	if (slideshow_slick(), whenScrolling(!0), openPopUp(), iniHeaderAnimations("open"), initHeaderDropdown(), $_html.hasClass("no-object-fit")) {
		var f = $(".page-current .element-cover");
		resizeLikeCover(f)
	}
}

function homePage(e) {
	function t() {
		if (r.parent().hasClass("on") && !$_body.hasClass("js-loading-page")) {
			verge.scrollY() > _globalViewportH ? r[0].pause() : r[0].play()
		}
	}

	function a() {
		if (!i.hasClass("muted"))
			if ($_body.hasClass("open-nav")) var e = 1,
				t = setInterval(function() {
					e -= .1, e <= .2 && clearInterval(t), r[0].volume = e
				}, 20);
			else var e = .2,
				t = setInterval(function() {
					e += .1, e >= .9 && clearInterval(t), r[0].volume = e
				}, 20)
	}

	function o() {
		var e = $(".block-home-contact .list-cities"),
			t = $(".block-home-contact .list-cities li"),
			a = 0;
		t.each(function() {
			var e = $(this);
			a += e.width()
		});
		var o = Math.round(a / 2),
			s = _globalViewportW - a,
			i = Math.round((s - 300) / 2);
		if (e.attr("style", ""), s >= 0) return void e.css({
			width: "100%",
			left: 0
		});
		e.css("margin-left", -o);
		var r = i / _globalHalfViewportW,
			l = -i;
		e.mouseenter(function() {
			n(!0, e, r, l)
		}).mouseleave(function() {
			n(!1)
		})
	}

	function n(e, t, a, o) {
		if (!e) return !1;
		t.on("mousemove.movGrad", function(e) {
			var n = e.pageX;
			relativeX = n * a + o, window.requestAnimationFrame(function() {
				s(t, relativeX)
			})
		})
	}

	function s(e, t) {
		e.velocity({
			translateX: t
		}, {
			duration: 600,
			queue: !1,
			delay: 30,
			easing: [.18, .81, .12, 1]
		})
	}
	if (!e) return $_body.removeClass("home"), $(document).off("navClicked.home"), $_window.off(".home"), !1;
	$_window.on("scroll.home", t), $_window.on("resize.home", $.debounce(600, o)), $_body.addClass("home");
	var i = $(".js-mute-video"),
		r = $(".home video");
	$_html.hasClass("mobile") || $_html.hasClass("ie10") || (r[0].volume = 0, r[0].muted = !1);
	var l = new ScrollMagic.Controller,
		d = new ScrollMagic.Scene({
			triggerElement: ".js-anim-parallax",
			triggerHook: "onEnter",
			duration: "60%"
		}).setTween(".js-anim-parallax", {
			y: 0,
			ease: Linear.easeNone
		}).addTo(l);
	$(".slideshow-header").buro_slideshows({
		slidetype: "headerHome",
		autoplay: !0,
		autoplay_time: 6e3,
		autoplay_type: "translateX",
		autoplay_uniqueName: "home-slide-header",
		destroy: !1
	}), $(".slideshow-home-news").buro_slideshows({
		slidetype: "slideDownUpFade",
		autoplay: !0,
		autoplay_time: 7e3,
		autoplay_type: "translateX",
		autoplay_uniqueName: "slideshow-home-news",
		destroy: !1
	}), $(".slideshow-blockquotes").buro_slideshows({
		slidetype: "slideDownUpFade",
		slide_height: !0,
		autoplay: !1,
		autoplay_time: 7e3,
		autoplay_type: !1,
		autoplay_uniqueName: "slideshow-home-quotes",
		destroy: !1
	}), $(".block-home-contact").buro_slideshows({
		slidetype: "moveUpScaleDown",
		autoplay: !1,
		destroy: !1
	}), $(".slideshow-txtLoop-slide").buro_slideshows({
		slidetype: "justLoopCSS",
		autoplay: !0,
		autoplay_time: 2500,
		autoplay_uniqueName: "slideshow-txtLoop",
		autoplay_onlyLoop: !0,
		min_width: !0,
		min_height: !1,
		destroy: !1
	}), $_html.hasClass("mobile") || $_html.hasClass("ie10") || i.on("click", function(e) {
		if (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), $this = $(this), r[0].muted = !1, $this.toggleClass("muted unmuted"), $this.hasClass("muted")) var t = 1,
			a = setInterval(function() {
				t -= .1, t <= .1 && clearInterval(a), r[0].volume = t
			}, 20);
		else var t = 0,
			a = setInterval(function() {
				t += .1, t >= .9 && clearInterval(a), r[0].volume = t
			}, 20);
		return !1
	}), $_html.hasClass("mobile") || $_html.hasClass("ie10") || $(document).on("navClicked.home", a), o()
}

function newsPage(e) {
	if (!e) return !1;
	var t = $(".js-search"),
		a = t.find("input"),
		o = $(".js-search-results"),
		n = $(".filters-header"),
		s = $(".list-entries"),
		i = $(".list-entrier"),
		r = $(".list-entries-content"),
		l = $(".list-entries-wrapper"),
		d = $(".filters-content ul li"),
		c = $(".filters-content ul a"),
		u = $(".list-filters"),
		h = $(".filters-header h4"),
		p = $(".js-load-more"),
		f = $(".tag-cloud a"),
		m = !0,
		v = window.location.hostname,
		g = $(".slideshow-txtLoop-slide"),
		w = new ScrollMagic.Controller,
		_ = new ScrollMagic.Scene({
			triggerElement: ".list-filters",
			triggerHook: "onCenter"
		}).setPin(".list-filters").addTo(w).offset(u.height() / 2);
	$_html.hasClass("mobile") || (scene_search = new ScrollMagic.Scene({
		triggerElement: ".js-search",
		triggerHook: "onLeave"
	}).setPin(".js-search").addTo(w).offset(-10)), h.css("width", "auto");
	var y = h.width(),
		C = u.height();
	h.css("width", "60px"), h.css("top", C / 2 - 15 + "px"), r.children().length > 0 ? $(".list-no-results").removeClass("active") : $(".list-no-results").addClass("active"), g.buro_slideshows({
		slidetype: "justLoopCSS",
		autoplay: !0,
		autoplay_time: 2500,
		autoplay_uniqueName: "slideshow-txtLoop",
		autoplay_onlyLoop: !0,
		min_width: !0,
		min_height: !1,
		destroy: !1
	}), $(document).on("click", ".js-entrie-event", function() {
		event.preventDefault(), event.stopPropagation(), event.stopImmediatePropagation();
		var e = $(this).next(".entrie-left").find("h4 a.js-entrie-link").attr("href");
		$_body.hasClass("mobile") ? document.location = e : $(this).next(".entrie-left").find("h4 a.js-entrie-link")[0].click()
	}), p.on("click", function(e) {
		e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault();
		var t = $(".filters-content ul li.active"),
			a = $(this).attr("href");
		$.get(a, function(e) {
			var a = $("<div>" + e + "</div>"),
				o = a.find(".js-load-more");
			$(".list-entries-content").append(a.find(".list-entries-content > *").velocity({
				opacity: [1, 0]
			}, {
				duration: 200,
				easing: "ease"
			})), t.each(function() {
				var e = $(this);
				$(".tag-cloud a").each(function() {
					$(this).attr("data-target") == e.attr("data-tag") && $(this).addClass("active")
				})
			}), o.length > 0 ? ($(".js-load-more").show(), $(".js-load-more").attr("href", o.attr("href"))) : $(".js-load-more").hide()
		})
	}), c.on("click", function(e) {
		e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault();
		var t = $(this),
			a = t.parent("li"),
			o = [],
			n = $(this).attr("href"),
			s = n.split("?")[0];
		a.toggleClass("active");
		var i = $(".filters-content ul li.active"),
			d = $(".tag-cloud a");
		m = !i.length, i.each(function() {
			var e = $(this);
			e.attr("data-tag") && o.push(e.attr("data-tag"))
		}), m || o.length > 0 && (o = o.join("+"), s += "?tags=" + o), history.pushState({}, {}, s), l.velocity({
			opacity: [0, 1]
		}, {
			duration: 200,
			easing: "ease"
		}), l.load(s + " .list-entries-wrapper > *", function() {
			i.each(function() {
				var e = $(this);
				$(".tag-cloud a").each(function() {
					$(this).attr("data-target") == e.attr("data-tag") && $(this).addClass("active")
				})
			}), r.children().length > 0 ? $(".list-no-results").removeClass("active") : $(".list-no-results").addClass("active"), l.velocity({
				opacity: [1, 0]
			}, {
				duration: 200,
				easing: "ease"
			})
		})
	}), d.on("click", function() {
		$(this).find("a").click()
	}), $(document).on("click", ".tag-cloud a", function() {
		event.stopImmediatePropagation(), event.stopPropagation(), event.preventDefault();
		var e = $(this).attr("data-target");
		$(".filters-content ul li").each(function() {
			var t = $(this);
			t.attr("data-tag") == e && t.find("a").click()
		})
	}), n.on("click", function() {
		var e = $(this);
		e.parent(".list-filters").toggleClass("active"), e.parent(".list-filters").removeClass("hover"), s.toggleClass("obfuscated")
	}), u.mouseenter(function() {
		$(this).addClass("hover")
	}).mouseleave(function() {
		$(this).removeClass("hover")
	}), a.on("blur", function() {
		"" == a.attr("value") && $(".list-entries-content").removeClass("obfuscated")
	}), a.on("focus", function() {
		$(".list-entries-content").addClass("obfuscated")
	}), a.on("keyup", function(e) {
		"" != a.attr("value") ? $.ajax({
			data: t.serialize(),
			type: "post",
			dataType: "json",
			url: "http://" + v + "/wp-admin/admin-ajax.php",
			success: function(e) {
				if (e.found) {
					o.html("");
					var t = jQuery.parseJSON(e.responses);
					o.html(t).fadeIn(), r.hide()
				} else o.fadeOut().html(""), r.show()
			},
			error: function(e) {
				o.fadeOut().html(""), r.show()
			}
		}) : (o.fadeOut().html(""), r.show())
	}), u.on("clickoutside", function(e) {
		return e.stopImmediatePropagation(), $(this).hasClass("active") && n.click(), !1
	})
}

function singlenewsPage(e) {
	if (!e) return !1;
	$(document).on("click", ".js-entrie-event", function() {
		$(this).next(".entrie-left").find("h4 a.js-entrie-link")[0].click()
	})
}

function carrersPage(e) {
	if (!e) return !1;
	var t = $(".filters-content ul li"),
		a = $(".filters-content ul a"),
		o = $(".academy-list .js-load-more"),
		n = $(".jobs-list .js-load-more"),
		s = $(".offers-academy > li"),
		i = $(".filters-header"),
		r = $(".list-filters"),
		l = $(".list-entries"),
		d = $(".jobs-list"),
		c = $(".academy-list"),
		u = $(".footer-like.carrers").find("h3"),
		h = $(".slideshow-txtLoop-slide"),
		p = $(".slideshow-txtLoop-slide-footer"),
		f = $(".filters-header h4"),
		m = new ScrollMagic.Controller,
		v = new ScrollMagic.Scene({
			triggerElement: ".list-filters",
			triggerHook: "onCenter"
		}).setPin(".list-filters").addTo(m).offset(r.height() / 2);
	h.buro_slideshows({
		slidetype: "justLoopCSS",
		autoplay: !0,
		autoplay_time: 2500,
		autoplay_uniqueName: "slideshow-txtLoop",
		autoplay_onlyLoop: !0,
		min_width: !0,
		min_height: !1,
		destroy: !1
	}), p.buro_slideshows({
		slidetype: "justLoopCSS",
		autoplay: !0,
		autoplay_time: 3e3,
		autoplay_uniqueName: "slideshow-txtLoop-footer",
		autoplay_onlyLoop: !0,
		min_width: !1,
		min_height: !0,
		destroy: !1
	}), f.css("width", "auto");
	var g = f.width(),
		w = r.height();
	if (f.css("width", "60px"), f.css("top", w / 2 - 30 + "px"), d.find(".jobs-list-content").children().length > 0 ? $(".list-no-results").removeClass("active") : $(".list-no-results").addClass("active"), o.on("click", function(e) {
			e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), url = $(this).attr("href"), $.get(url, function(e) {
				var t = $("<div>" + e + "</div>"),
					a = t.find(".prev-posts-link a");
				$(t.find(".academy-list > *")).insertBefore($(".academy-list .js-load-more").parent("p")), a.length > 0 ? ($(".academy-list .js-load-more").show(), $(".academy-list .js-load-more").attr("href", a.attr("href"))) : $(".academy-list .js-load-more").hide()
			})
		}), n.on("click", function(e) {
			e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), url = $(this).attr("href"), $.get(url, function(e) {
				var t = $("<div>" + e + "</div>"),
					a = t.find(".jobs-list .js-load-more"),
					o = 200;
				t.find(".jobs-list-content article").each(function() {
					$this = $(this), $this.addClass("js-new-entrie"), $(".jobs-list-content").append($this), $.doTimeout(o, function() {
						$(".js-new-entrie").addClass("on")
					}), o += 200
				}), a.length > 0 ? ($(".jobs-list .js-load-more").show(), $(".jobs-list .js-load-more").attr("href", a.attr("href"))) : $(".jobs-list .js-load-more").hide()
			})
		}), a.on("click", function(e) {
			e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault();
			var t = $(this),
				a = t.parent("li"),
				o = [],
				n = [],
				s = [],
				i = t.attr("href"),
				r = i.split("?")[0];
			a.toggleClass("active");
			var l = $(".filters-content ul li.active");
			l.length ? show_all = !1 : show_all = !0, l.each(function() {
				var e = $(this);
				e.attr("data-location") && o.push(e.attr("data-location")), e.attr("data-type") && n.push(e.attr("data-type")), e.attr("data-sector") && s.push(e.attr("data-sector"))
			}), show_all || (o.length > 0 ? (o = o.join("+"), r += "?location=" + o, n.length > 0 && (n = n.join("+"), r += "&type=" + n), s.length > 0 && (s = s.join("+"), r += "&sector=" + s)) : n.length > 0 ? (n = n.join("+"), r += "?type=" + n, o.length > 0 && (o = o.join("+"), r += "&location=" + o), s.length > 0 && (s = s.join("+"), r += "&sector=" + s)) : s.length > 0 && (s = s.join("+"), r += "?sector=" + s, o.length > 0 && (o = o.join("+"), r += "&location=" + o), n.length > 0 && (n = n.join("+"), r += "&type=" + n))), history.pushState({}, {}, r), d.velocity({
				opacity: [0, 1]
			}, {
				duration: 200,
				easing: "ease"
			}), d.load(r + " .jobs-list > *", function() {
				d.find(".jobs-list-content").children().length > 0 ? $(".list-no-results").removeClass("active") : $(".list-no-results").addClass("active"), d.velocity({
					opacity: [1, 0]
				}, {
					duration: 200,
					easing: "ease"
				})
			})
		}), t.on("click", function() {
			$(this).find("a").click()
		}), s.on("click", function() {
			var e = $(this),
				t = $(".list-entries > div");
			e.parent("ul").hasClass("js-animating") || (e.parent("ul").addClass("js-animating"), "academy-list" == e.attr("data-target") ? (d.addClass("prepare-anim-out"), c.removeClass("prepare-anim-out"), $.doTimeout(300, function() {
				d.addClass("anim-out").removeClass("active"), c.removeClass("out").addClass("anim-in")
			}), $.doTimeout(600, function() {
				d.removeClass("anim-out").addClass("out"), c.removeClass("anim-in").addClass("active"), e.parent("ul").removeClass("js-animating")
			})) : (d.removeClass("prepare-anim-out"), c.addClass("prepare-anim-out"), $.doTimeout(300, function() {
				c.addClass("anim-out").removeClass("active"), d.removeClass("out").addClass("anim-in")
			}), $.doTimeout(600, function() {
				c.removeClass("anim-out").addClass("out"), d.removeClass("anim-in").addClass("active"), e.parent("ul").removeClass("js-animating")
			})), s.removeClass("active"), e.addClass("active"), "academy-list" == e.attr("data-target") ? r.addClass("anim-out") : r.removeClass("anim-out"))
		}), i.on("click", function() {
			var e = $(this);
			e.parent(".list-filters").toggleClass("active"), e.parent(".list-filters").removeClass("hover"), l.toggleClass("obfuscated")
		}), r.mouseenter(function() {
			$(this).addClass("hover")
		}).mouseleave(function() {
			$(this).removeClass("hover")
		}), $(document).on("click", ".header-entrie", function(e) {
			e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
			var t = $(this),
				a = t.find(".entrie-right");
			t.find(".entrie-right").hasClass("open-content") ? (t.parents(".list-entrie").removeClass("active"), a.removeClass("open-content"), t.find(".entrie-left").removeClass("open-content"), t.siblings(".content-editor").velocity("slideUp", {
				delay: 0,
				duration: 200
			})) : (t.parents(".list-entrie").addClass("active"), a.addClass("open-content"), t.find(".entrie-left").addClass("open-content"), t.siblings(".content-editor").velocity("scroll", {
				duration: 150,
				easing: "spring"
			}).velocity("slideDown", {
				delay: 0,
				duration: 200
			}))
		}), r.on("clickoutside", function(e) {
			return e.stopImmediatePropagation(), $(this).hasClass("active") && i.click(), !1
		}), !$_body.hasClass("mobile")) {
		$(".js-notes-lft").css("transform", "translateY(110px)"), $(".js-notes-rgt").css("transform", "translateY(-100px)");
		var _ = new ScrollMagic.Controller,
			y = new ScrollMagic.Scene({
				triggerElement: ".js-notes-lft",
				triggerHook: "onEnter",
				duration: "150%"
			}).setTween(".js-notes-lft", {
				y: -65,
				ease: Linear.easeNone
			}).addTo(_),
			C = new ScrollMagic.Controller,
			b = new ScrollMagic.Scene({
				triggerElement: ".js-notes-rgt",
				triggerHook: "onEnter",
				duration: "90%"
			}).setTween(".js-notes-rgt", {
				y: 80,
				ease: Linear.easeNone
			}).addTo(C)
	}
}

function singlecarrersPage(e) {
	if (!e) return !1;
	var t = $(".js-carrer-form"),
		a = $(".js-carrer-form input"),
		o = $(".submit"),
		n = $(".carrer-file-name"),
		s = $(".offers-academy > li"),
		i = $(".list-entries > div"),
		r = $(".carrer-availability-label"),
		l = r.text(),
		d = $(".carrer-form p select "),
		c = window.location.hostname,
		u = document.querySelector("div.morph-svg-carrers"),
		h = u.querySelector("svg"),
		p = $(".morph-svg-carrers path").attr("d"),
		f = $(".morph-svg-carrers").attr("data-morph-end"),
		m = Snap(h),
		v = m.select("path");
	d.on("change click", function() {
		var e = $(this);
		r.text($(".carrer-form p select option[value='" + e.attr("value") + "']").text()).css({
			color: "#62e81e"
		})
	}), $jsUpload = $(".js-upload"), $file = $("input[type=file]"), $jsUpload.on("click", function() {
		$file.click()
	}), $file.change(function(e) {
		var t = $(document).find('input[type="file"]'),
			a = t[0].files[0];
		n.html(a.name), $file.addClass("js-added"), $file.parent(".input-border").find(".add-file").attr("style", "")
	}), a.blur(function() {
		var e = $(this),
			t = this.defaultValue;
		e.hasClass("required") && (check(e, t, 0), e.hasClass("erro") ? e.parent().addClass("erro") : e.parent().removeClass("erro"))
	}), a.focus(function() {
		var e = $(this);
		e.removeClass("erro"), e.parent().removeClass("erro")
	});
	var g = Snap("#loading-progress"),
		w = g.circle(39, 39, 38),
		_ = g.circle(39, 39, 38);
	w.attr({
		fill: "none",
		stroke: "rgba(98,232,30,1)",
		strokeWidth: 2,
		strokeLinecap: "round",
		strokeDasharray: 6.28 * 38,
		strokeDashoffset: 6.28 * 38,
		transform: "rotate(-45deg)",
		class: "loading-timer"
	}), _.attr({
		fill: "none",
		stroke: "rgba(98,232,30,.2)",
		strokeWidth: 2,
		strokeLinecap: "round",
		transform: "rotate(-45deg)",
		class: "loading-timer-bg"
	}), o.on("click", function(e) {
		if (!validateForm(t) || t.hasClass("sending") || t.hasClass("sent")) return e.preventDefault(), !1;
		if (TweenMax.to($("#loading-progress .loading-timer-bg"), 1, {
				opacity: 1,
				ease: Expo.easeOut
			}), TweenMax.to($("#loading-progress").find(".loading-timer"), 2, {
				strokeDashoffset: 40,
				ease: Expo.easeOut
			}), $(".btn-submit").css({
				"pointer-events": "none"
			}), e.preventDefault(), t.addClass("sending"), !t.hasClass("sent")) {
			var a = new FormData,
				o = $(document).find('input[type="file"]'),
				n = o[0].files[0];
			a.append("carrer-language", t.find('input[name="carrer-language"]').attr("value")), a.append("carrer-proposal", t.find('input[name="carrer-proposal"]').attr("value")), a.append("carrer-proposal-name", t.find('input[name="carrer-proposal-name"]').attr("value")), a.append("carrer-name", t.find('input[name="carrer-name"]').attr("value")), a.append("carrer-surname", t.find('input[name="carrer-surname"]').attr("value")), a.append("carrer-email", t.find('input[name="carrer-email"]').attr("value")), a.append("carrer-availability", t.find("#carrer-availability :selected").text()), a.append("carrer-mobile", t.find('input[name="carrer-mobile"]').attr("value")), a.append("carrer-salary", t.find('input[name="carrer-salary"]').attr("value")), a.append("carrer-found", t.find('input[name="carrer-found"]').attr("value")), a.append("carrer-linkedin", t.find('input[name="carrer-linkedin"]').attr("value")), a.append("carrer-jobs_location", t.find('input[name="carrer-jobs_location"]').attr("value")), a.append("carrer-jobs_contract", t.find('input[name="carrer-jobs_contract"]').attr("value")), a.append("carrer-jobs_sector", t.find('input[name="carrer-jobs_sector"]').attr("value")), a.append("file", n), a.append("_wp_http_referer", t.find('input[name="_wp_http_referer"]').attr("value")), a.append("carrer_nonce", t.find('input[name="carrer_nonce"]').attr("value")), a.append("action", "initCarrer"), $.ajax({
				type: "POST",
				url: "http://" + c + "/wp-admin/admin-ajax.php",
				data: a,
				contentType: !1,
				processData: !1,
				success: function(e) {
					console.log(e);
					var a = $(".news-carrers-pagename a").attr("href");
					a = $(".header").attr("data-backUrl"), TweenMax.to($("#loading-progress").find("circle"), 2, {
						strokeDashoffset: 0,
						ease: Expo.easeOut
					}), $(".page-toload .header .block-content h3").text($(".header").attr("data-successTitle")), $(".page-toload .header .block-content").append($("<p class='width-normal'><a class='back-carrers' href='" + a + "'>" + $(".header").attr("data-successBtn") + "</a></p>")), $(".page-toload .header .block-content .carrer-meta").hide(), goTo($(".page-current"), 1e3, [.7, 0, .3, 1], 0), t.addClass("sent").removeClass("sending"), v.stop().animate({
						path: f
					}, 250, mina.easeout), $.doTimeout(1e3, function() {
						$.doTimeout(1500, function() {})
					})
				},
				error: function(e) {
					t.addClass("unsent").removeClass("sending")
				}
			})
		}
	}), s.on("click", function() {
		s.removeClass("active"), $(this).addClass("active"), i.removeClass("active"), $("." + $(this).attr("data-target")).addClass("active")
	}), $(document).on("click", ".header-entrie", function() {
		event.preventDefault(), event.stopPropagation(), event.stopImmediatePropagation();
		var e = $(this),
			t = e.find(".entrie-right");
		e.find(".entrie-right").hasClass("open-content") ? (e.parents(".list-entrie").removeClass("active"), t.removeClass("open-content"), e.find(".entrie-left").removeClass("open-content"), e.siblings(".content-editor").velocity("slideUp", {
			delay: 0,
			duration: 200
		})) : (e.parents(".list-entrie").addClass("active"), t.addClass("open-content"), e.find(".entrie-left").addClass("open-content"), e.siblings(".content-editor").velocity("scroll", {
			duration: 150,
			easing: "spring"
		}).velocity("slideDown", {
			delay: 0,
			duration: 200
		}))
	})
}

function sectorsPage(e) {
	function t(e) {
		$_html.hasClass("firefox") || (_global_intervalSectors = setInterval(function() {
			d || (d = 0), c || (c = 0), "desktop" == e && (d += (u - .2 * d) / 3.5, c += (h - .2 * c) / 3.5, r.css("transform", "rotateX(" + c.toFixed(2) + "deg) rotateY(" + -d.toFixed(2) + "deg)")), "mobile" == e && (d += (u - .2 * d) / 20, c += (h - .2 * c) / 20, d < -10 && (d = -10), c < -10 && (c = -10), d > 10 && (d = 10), c > 10 && (c = 10), 0 == window.orientation || 180 == window.orientation ? r.css("transform", "rotateX(" + c.toFixed(2) + "deg) rotateY(" + d.toFixed(2) + "deg)") : r.css("transform", "rotateX(" + d.toFixed(2) + "deg) rotateY(" + c.toFixed(2) + "deg)"))
		}, 10))
	}

	function a(e) {
		u = e.pageX - $(window).width() / 2, h = e.pageY - $(window).height() / 2, u /= 800, h /= 800
	}

	function o(e) {
		u = e.accelerationIncludingGravity.x, h = e.accelerationIncludingGravity.y
	}

	function n(e) {}

	function s(e) {
		if (!e) return window.removeEventListener("devicemotion", o, !1), void window.removeEventListener("deviceorientation", n, !1);
		window.DeviceMotionEvent && window.addEventListener("devicemotion", o, !1), window.DeviceOrientationEvent && window.addEventListener("deviceorientation", n, !1)
	}
	if (!e) return clearInterval(_global_intervalSectors), s(!1), !1;
	$(".sectors-list").on("mousemove", $.debounce(10, a));
	var i = $(".js-sector-pictogram"),
		r = $(".sector-container"),
		l = $(".sectors-list"),
		d = 0,
		c = 0,
		u = 0,
		h = 0;
	t((i.attr("data-type"), "desktop"))
}

function singlesectorsPage(e) {
	function t() {
		console.log(document[D])
	}

	function a() {
		if ($_html.hasClass("chrome") || $_html.hasClass("firefox"))
			if ($_body.hasClass("open-nav")) {
				var e = 5e3,
					t = setInterval(function() {
						e -= 100, e <= 100 && clearInterval(t), T.frequency.value = e
					}, 15);
				S.disconnect(j), j.disconnect(P.destination), S.connect(T), T.connect(P.destination)
			} else var e = 100,
				t = setInterval(function() {
					e += 100, e >= 5e3 && (S.connect(j), j.connect(P.destination), S.disconnect(T), T.disconnect(P.destination), clearInterval(t)), T.frequency.value = e
				}, 15)
	}

	function o() {
		if (x) {
			if (!$_html.hasClass("chrome") && !$_html.hasClass("firefox")) return;
			S = P.createMediaElementSource(x), j = P.createStereoPanner(), T = P.createBiquadFilter(), T.type = "string" == typeof T.type ? "lowpass" : 0, T.frequency.value = 150, s(), S.connect(j), j.connect(P.destination)
		}
	}

	function n(e) {
		$("#soundfx").get(0) && ($_html.hasClass("chrome") || $_html.hasClass("firefox")) && (E = e.pageX - $(window).width() / 2, E = E / $(window).width() * 2, j.pan.value = E.toFixed(2))
	}

	function s() {
		var e = verge.scrollY(),
			t = $("#soundfx").get(0);
		if (t) {
			if (t.volume = 1, a < .001 || e > _globalWindowHeight) return t.volume = 0, void t.pause();
			t.play();
			var a = (1 - verge.scrollY() / (.9 * _globalWindowHeight)).toFixed(3);
			a <= 0 && (a = 0), t.volume = a > 1 ? 1 : a
		}
	}

	function i(e) {
		x && n(e)
	}

	function r() {
		x && s(), f.hasClass("on") || verge.inY(f, -450) && (f.hasClass("bars-chart") ? initBarsChart() : initPieChart()), $_body.hasClass("hide-info") && !y.hasClass("wrapped") && $(".dropdown-menu").removeClass("on active")
	}

	function l() {
		_global_intervalSector = setInterval(function() {
			I || (I = 0), M || (M = 0), I += (E - .2 * I) / 20, M += (V - .2 * M) / 20, I < -10 && (I = -10), M < -10 && (M = -10), I > 10 && (I = 10), M > 10 && (M = 10), 0 == window.orientation || 180 == window.orientation ? g.css("transform", "rotateX(" + M.toFixed(2) + "deg) rotateY(" + I.toFixed(2) + "deg)") : g.css("transform", "rotateX(" + I.toFixed(2) + "deg) rotateY(" + M.toFixed(2) + "deg)")
		}, 10)
	}

	function d(e) {
		E = e.accelerationIncludingGravity.x, V = e.accelerationIncludingGravity.y
	}

	function c(e) {}

	function u(e) {
		if (!e) return window.removeEventListener("devicemotion", d, !1), void window.removeEventListener("deviceorientation", c, !1);
		window.DeviceMotionEvent && window.addEventListener("devicemotion", d, !1), window.DeviceOrientationEvent && window.addEventListener("deviceorientation", c, !1)
	}

	function h() {
		$(".world-map .pais").each(function(e) {
			var t = $(this),
				a = Math.round(t.children(".pin")[0].getBBox().y),
				o = Math.round(t.children(".pin")[0].getBBox().x);
			$(".world-map-legenda li").eq(e).css({
				top: a + "px",
				left: o + "px"
			})
		})
	}

	function p() {
		var e = $(".block-map"),
			t = $(".block-bg-map");
		e.removeClass("open"), t.css("height", ""), h()
	}
	if (!e) return init3dModel(!1), clearInterval(_global_intervalSector), u(!1), $_window.off("mousemove.singleSector"), $_window.off("scroll.singleSector"), $(document).off("navClicked.singleSector"), $_window.off("resize", $.debounce(500, p)), !1;
	$_window.on("mousemove.singleSector", i), $_window.on("scroll.singleSector", $.debounce(10, r)), $_window.on("resize", $.debounce(500, p)), h(), _globalWindowHeight = calculateHeight();
	var f = $(".chart-block"),
		m = $(".js-sector-pictogram"),
		v = $(".slideshow-blockquotes"),
		g = $(".sector-container"),
		w = $(".page-toload"),
		_ = $("#header-nav"),
		y = $(".sectors-back-wrapper .btn"),
		C = $(".dropdown-menu"),
		b = $(".dropdown-menu li a"),
		k = y.attr("data-back"),
		x = document.querySelector("audio"),
		S = null,
		j = null,
		T = 0;
	if (!$_html.hasClass("ie")) var P = new(window.AudioContext || window.webkitAudioContext);
	var D, L;
	if (void 0 !== document.hidden ? (D = "hidden", L = "visibilitychange") : void 0 !== document.mozHidden ? (D = "mozHidden", L = "mozvisibilitychange") : void 0 !== document.msHidden ? (D = "msHidden", L = "msvisibilitychange") : void 0 !== document.webkitHidden && (D = "webkitHidden", L = "webkitvisibilitychange"), document.addEventListener(L, t, !1), "desktop" == m.attr("data-type")) init3dModel(!0);
	else {
		var I = 0,
			M = 0,
			E = 0,
			V = 0;
		u(!0), l()
	}
	if (o(), v.buro_slideshows({
			slidetype: "slideDownUpFade",
			slide_height: !0,
			autoplay: !1,
			autoplay_time: 7e3,
			autoplay_type: !1,
			autoplay_uniqueName: "slideshow-sector-quotes",
			destroy: !1
		}), $(document).on("navClicked.singleSector", a), $(".btn-map").click(function() {
			var e = $(".block-map"),
				t = $(".block-bg-map svg").height();
			if (e.toggleClass("open"), e.hasClass("open")) var a = t;
			else var a = "330px";
			$(".block-bg-map").velocity({
				height: a
			}, {
				duration: 700,
				easing: [.76, 0, .175, 1],
				delay: 50
			})
		}), $(".pais").hover(function() {
			var e = $(this),
				t = e.attr("id");
			$(".world-map-legenda li." + t).addClass("active")
		}, function() {
			$(".world-map-legenda li").removeClass("active")
		}), !$_body.hasClass("mobile")) {
		$(".js-notes-lft").css("transform", "translateY(-260px)"), $(".js-notes-rgt").css("transform", "translateY(260px)");
		var Y = new ScrollMagic.Controller,
			U = new ScrollMagic.Scene({
				triggerElement: ".js-notes-lft",
				triggerHook: "onEnter",
				duration: "350%"
			}).setTween(".js-notes-lft", {
				y: 300,
				ease: Linear.easeNone
			}).addTo(Y),
			z = new ScrollMagic.Controller,
			A = new ScrollMagic.Scene({
				triggerElement: ".js-notes-rgt",
				triggerHook: "onEnter",
				duration: "290%"
			}).setTween(".js-notes-rgt", {
				y: -240,
				ease: Linear.easeNone
			}).addTo(z)
	}
}

function aboutPage(e) {
	if (!e) return $(window).off("scroll", initBarsChart), !1;
	$(".slideshow-header").buro_slideshows({
		slidetype: "header",
		autoplay: !0,
		autoplay_time: 6e3,
		autoplay_type: "translateX",
		autoplay_uniqueName: "home-slide-header",
		destroy: !1
	}), $(".slideshow-txtLoop-slide").buro_slideshows({
		slidetype: "justLoopCSS",
		autoplay: !0,
		autoplay_time: 2500,
		autoplay_uniqueName: "slideshow-txtLoop",
		autoplay_onlyLoop: !0,
		min_width: !0,
		min_height: !1,
		destroy: !1
	}), $(".slideshow-txtLoop-slide-footer").buro_slideshows({
		slidetype: "justLoopCSS",
		autoplay: !0,
		autoplay_time: 3e3,
		autoplay_uniqueName: "slideshow-txtLoop-footer",
		autoplay_onlyLoop: !0,
		min_width: !1,
		min_height: !0,
		destroy: !1
	}), $(".instagram-wrapper").slick({
		infinite: !0,
		dots: !1,
		arrows: !1,
		useCSS: !0,
		cssEase: "cubic-bezier(0.76, 0, 0.18, 1)",
		speed: 800,
		autoplay: !0,
		autoplaySpeed: 1500,
		pauseOnHover: !1,
		centerMode: !0,
		slidesToShow: 8,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1895,
			settings: {
				slidesToShow: 5
			}
		}, {
			breakpoint: 1120,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 960,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 1
			}
		}]
	}), $(window).on("scroll", initBarsChart)
}

function contactsPage(e) {
	if (!e) return !1;
	$(".slideshow-txtLoop-slide").buro_slideshows({
		slidetype: "justLoopCSS",
		autoplay: !0,
		autoplay_time: 2500,
		autoplay_uniqueName: "slideshow-txtLoop",
		autoplay_onlyLoop: !0,
		min_width: !0,
		min_height: !1,
		destroy: !1
	}), $(".slideshow-contacts").buro_slideshows({
		slidetype: "slidePicsCities",
		nav_arrows: !0,
		destroy: !1
	});
	var t = $(".block-offices");
	if ($_body.hasClass("mobile")) return void t.addClass("goAnim");
	var a = new ScrollMagic.Controller;
	t.each(function() {
		var e = $(this),
			t = new ScrollMagic.Scene({
				triggerElement: this,
				offset: 0,
				duration: 0
			}).addTo(a).on("enter", function(t) {
				e.hasClass("goAnim") || (e.addClass("goAnim"), "section-porto" == e.attr("id") && o.play(), "section-madrid" == e.attr("id") && n.play(), "section-nantes" == e.attr("id") && s.play(), "section-lyon" == e.attr("id") && i.play(), "section-paris" == e.attr("id") && r.play(), "section-london" == e.attr("id") && l.play(), "section-lisbon" == e.attr("id") && d.play(), "section-lille" == e.attr("id") && c.play(), "section-geneve" == e.attr("id") && u.play())
			})
	});
	var o = new Vivus("svg-porto-anim", {
			type: "delayed",
			duration: 50,
			start: "manual"
		}),
		n = new Vivus("svg-madrid-anim", {
			type: "delayed",
			duration: 50,
			start: "manual"
		}),
		s = new Vivus("svg-nantes-anim", {
			type: "delayed",
			duration: 50,
			start: "manual"
		}),
		i = new Vivus("svg-lyon-anim", {
			type: "delayed",
			duration: 50,
			start: "manual"
		}),
		r = new Vivus("svg-paris-anim", {
			type: "delayed",
			duration: 50,
			start: "manual"
		}),
		l = new Vivus("svg-london-anim", {
			type: "delayed",
			duration: 50,
			start: "manual"
		}),
		d = new Vivus("svg-lisbon-anim", {
			type: "delayed",
			duration: 50,
			start: "manual"
		}),
		c = new Vivus("svg-lille-anim", {
			type: "delayed",
			duration: 90,
			start: "manual"
		}),
		u = new Vivus("svg-geneve-anim", {
			type: "delayed",
			duration: 90,
			start: "manual"
		})
}

function errorPage(e) {
	if (!e) return !1;
	$(".slideshow-txtLoop-slide").buro_slideshows({
		slidetype: "justLoopCSS",
		autoplay: !0,
		autoplay_time: 2500,
		autoplay_uniqueName: "slideshow-txtLoop",
		autoplay_onlyLoop: !0,
		min_width: !0,
		min_height: !1,
		destroy: !1
	})
}

function initBarsChart() {
	var e = $(".js-chart-bar"),
		t = $(".bars-chart"),
		a = $(".page-toload"),
		o = $(".chart-block");
	t.hasClass("active") || (e.on("touchstart", function() {
		var e = $(this),
			t = 100 - e.attr("data-size") - 3,
			o = e.find(".chart-subtitle p").text(),
			n = $(".mobile-subtitle");
		n.text(o);
		var s = n.width();
		n.css({
			"-webkit-transform": "translateY(-55px) translateX(" + -s / 2 + ")",
			"-ms-transform": "translateY(-55px) translateX(" + -s / 2 + ")",
			transform: "translateY(-55px) translateX(" + -s / 2 + ")"
		}).addClass("js-active"), a.hasClass("about") && e.hasClass("active") || _globalViewportW <= 667 && e.hasClass("active") ? e.css({
			"-webkit-transform": "translate3d(0," + t + "%,0)",
			"-ms-transform": "translate3d(0," + t + "%,0)",
			transform: "translate3d(0," + t + "%,0)"
		}).addClass("hover") : e.hasClass("active") && e.css({
				"-webkit-transform": "translate3d(" + t + "%,0,0)",
				"-ms-transform": "translate3d(" + t + "%,0,0)",
				transform: "translate3d(" + t + "%,0,0)"
			}).addClass("hover")
	}), e.on("touchend", function() {
		$.doTimeout(1e3, function() {
			var e = $(this),
				t = 100 - e.attr("data-size");
			$(".mobile-subtitle").removeClass("js-active"), a.hasClass("about") || _globalViewportW <= 667 ? e.css({
				"-webkit-transform": "translate3d(0," + t + "%,0)",
				"-ms-transform": "translate3d(0," + t + "%,0)",
				transform: "translate3d(0," + t + "%,0)"
			}) : e.css({
				"-webkit-transform": "translate3d(" + t + "%,0,0)",
				"-ms-transform": "translate3d(" + t + "%,0,0)",
				transform: "translate3d(" + t + "%,0,0)"
			})
		})
	}), 0 == $_html.hasClass("ie10") && 0 == $_html.hasClass("ie9") && e.hover(function() {
		var e = $(this),
			t = 100 - e.attr("data-size") - 3;
		a.hasClass("about") && e.hasClass("active") || _globalViewportW <= 667 && e.hasClass("active") ? e.css({
			"-webkit-transform": "translate3d(0," + t + "%,0)",
			"-ms-transform": "translate3d(0," + t + "%,0)",
			transform: "translate3d(0," + t + "%,0)"
		}).addClass("hover") : e.hasClass("active") && e.css({
				"-webkit-transform": "translate3d(" + t + "%,0,0)",
				"-ms-transform": "translate3d(" + t + "%,0,0)",
				transform: "translate3d(" + t + "%,0,0)"
			}).addClass("hover")
	}, function() {
		var e = $(this),
			t = 100 - e.attr("data-size");
		a.hasClass("about") || _globalViewportW <= 667 ? e.css({
			"-webkit-transform": "translateY(" + t + "%)",
			"-ms-transform": "translateY(" + t + "%)",
			transform: "translateY(" + t + "%)"
		}) : e.css({
			"-webkit-transform": "translateX(" + t + "%)",
			"-ms-transform": "translateX(" + t + "%)",
			transform: "translateX(" + t + "%)"
		})
	}), e.each(function(o) {
		var n = $(this);
		if (verge.inViewport(t, -100)) {
			var s = 100 - n.attr("data-size");
			a.hasClass("about") || _globalViewportW <= 667 ? n.css({
				"-webkit-transform": "translateY(" + s + "%)",
				"-ms-transform": "translateY(" + s + "%)",
				transform: "translateY(" + s + "%)"
			}).addClass("active") : n.css({
				"-webkit-transform": "translateX(" + s + "%)",
				"-ms-transform": "translateX(" + s + "%)",
				transform: "translateX(" + s + "%)"
			}).addClass("active"), $(".bars-chart").addClass("active"), e.find(".chart-value").addClass("active")
		}
	}), o.addClass("on"))
}

function initPieChart() {
	function e(e, t) {
		for (k = 0; k < _.length; k++)
			if (_[k].id == e) {
				var a = e,
					o = _[k].sectorAngle,
					n = o,
					s = _[k].startAngle,
					l = _[k].endAngle,
					d = _[k].fillColor,
					c = _[k].radius,
					u = _[k].percentage,
					h = 220,
					C = _[k].slice_label,
					b, x, S, j, T, P, D, L, I, M, E, V, Y;
				if ("mouse" == t && (g = v.path().attr({
						sector: [f, m, c, s, l],
						stroke: "#312925",
						"stroke-width": 0,
						"stroke-linejoin": "round",
						"stroke-linecap": "round",
						fill: d
					}).data("id", k).mouseover(function() {
						this.stop().animate({
							transform: "s1.1 1.1 " + f + " " + m
						}, w, "elastic").dropShadow(10, 0, 0, .3);
						var e = g.attrs.path[1][1],
							t = g.attrs.path[1][2],
							o = g.attrs.path[2][6],
							n = g.attrs.path[2][7];
						b = (e + o) / 2, x = (t + n) / 2, S = b - f, j = x - m, T = Math.sqrt(Math.pow(S, 2) + Math.pow(j, 2)), S /= T, j /= T, P = S * f, D = j * m, S *= 160, j *= 160, L = S + f, I = j + m, M = P + f, E = D + m, V = +E - 80, Y = M;
						var s = $("#chart-subtitle-" + a),
							l = $("#chart-value-" + a);
						i.removeClass("active"), r.removeClass("active"), M >= f && E <= m && (s.removeClass("bottom-right top-right top-left").addClass("bottom-left"), V = E - s.height() - 60, Y = M), M <= f && E <= m && (s.removeClass("bottom-left top-right top-left").addClass("bottom-right"), V = E - s.height() - 60, Y = M - s.width() - 50, _globalViewportW <= 667 && (center_x_offset = L - r.width() / 2, center_y_offset = I - r.height() / 2 + 60)), M <= f && E >= m && (s.removeClass("bottom-right bottom-left top-left").addClass("top-right"), V = E + s.height(), Y = M - s.width() - 50), M >= f && E >= m && (s.removeClass("bottom-right top-right bottom-left").addClass("top-left"), V = E + s.height() + 20, Y = M), s.css({
							left: Y,
							top: V
						}).addClass("active"), _globalViewportW > 667 && (center_x_offset = L - r.width() / 2, center_y_offset = I - r.height() / 2), l.css({
							left: center_x_offset,
							top: center_y_offset
						}).addClass("active")
					}).mouseout(function() {
						this.stop().animate({
							transform: ""
						}, w, "elastic").remove(), circle.remove(), i.removeClass("active"), r.removeClass("active")
					})), "touch" == t) {
					0 != y && (y.stop().animate({
						transform: ""
					}, w, "elastic").remove(), circle.remove(), i.removeClass("active"), r.removeClass("active"), $(".mobile-subtitle").removeClass("js-active")), g = v.path().attr({
						sector: [f, m, c, s, l],
						stroke: "#312925",
						"stroke-width": 0,
						"stroke-linejoin": "round",
						"stroke-linecap": "round",
						fill: d
					}).data("id", k), y = g, g.stop().animate({
						transform: "s1.1 1.1 " + f + " " + m
					}, w, "elastic").dropShadow(10, 0, 0, .3);
					var U = g.attrs.path[1][1],
						z = g.attrs.path[1][2],
						A = g.attrs.path[2][6],
						N = g.attrs.path[2][7];
					b = (U + A) / 2, x = (z + N) / 2, S = b - f, j = x - m, T = Math.sqrt(Math.pow(S, 2) + Math.pow(j, 2)), S /= T, j /= T, P = S * f, D = j * m, S *= 160, j *= 160, L = S + f, I = j + m, M = P + f, E = D + m, V = +E - 80, Y = M;
					var H = $("#chart-subtitle-" + a),
						X = $("#chart-value-" + a);
					i.removeClass("active"), r.removeClass("active"), M >= f && E <= m && (H.removeClass("bottom-right top-right top-left").addClass("bottom-left"), V = E - H.height() - 60, Y = M, _globalViewportW <= 667 && (center_x_offset = L - r.width() / 2, center_y_offset = I - r.height() / 2 + 60)), M <= f && E <= m && (H.removeClass("bottom-left top-right top-left").addClass("bottom-right"), V = E - H.height() - 60, Y = M - H.width() - 50, _globalViewportW <= 667 && (center_x_offset = L - r.width() / 2 + 40, center_y_offset = I - r.height() / 2 + 20)), M <= f && E >= m && (H.removeClass("bottom-right bottom-left top-left").addClass("top-right"), V = E + H.height(), Y = M - H.width() - 50, _globalViewportW <= 667 && (center_x_offset = L - r.width() / 2 + 30, center_y_offset = I - r.height() / 2 - 60)), M >= f && E >= m && (H.removeClass("bottom-right top-right bottom-left").addClass("top-left"), V = E + H.height() + 20, Y = M, _globalViewportW <= 667 && (center_x_offset = L - r.width() / 2 - 40, center_y_offset = I - r.height() / 2 - 60)), H.css({
						left: Y,
						top: V
					}).addClass("active"), $(".mobile-subtitle").text(H.text());
					var q = $(".mobile-subtitle").width();
					$(".mobile-subtitle").css({
						"-webkit-transform": "translateY(-55px) translateX(" + -q / 2 + ")",
						"-ms-transform": "translateY(-55px) translateX(" + -q / 2 + ")",
						transform: "translateY(-55px) translateX(" + -q / 2 + ")"
					}).addClass("js-active"), _globalViewportW > 667 && (center_x_offset = L - r.width() / 2, center_y_offset = I - r.height() / 2), X.css({
						left: center_x_offset,
						top: center_y_offset
					}).addClass("active")
				}
				circle = v.circle(f, m, p).attr({
					fill: "#312925",
					stroke: "#312925"
				})
			}
	}
	var t = $("#pie-chart"),
		a = $(".chart-block");
	if (!t.hasClass("active")) {
		var o = ["#dd3f79", "#b7374a", "#d44049", "#f9c636", "#62e81e"],
			n = t.attr("data-values").split(",").map(Number),
			s = t.attr("data-labels").split(","),
			i = $(".chart-subtitle"),
			r = $(".chart-value"),
			l = 0,
			d = 0,
			c = 0,
			u = 0,
			h = 0,
			p = 0,
			f = 0,
			m = 0,
			v = Raphael("pie-chart"),
			g = null,
			w = 500,
			_ = [],
			y = 0,
			C = Math.PI / 180,
			b = 0;
		h = t.width() / 2 - 20, p = t.width() / 2 * .35, f = t.width() / 2, m = t.height() / 2, v.customAttributes.sector = function(e, t, a, o, n) {
			var s = Math.PI / 180,
				i = e + a * Math.cos(o * s),
				r = e + a * Math.cos(n * s),
				l = t + a * Math.sin(o * s),
				d = t + a * Math.sin(n * s);
			return {
				path: [
					["M", e, t],
					["L", i, l],
					["A", a, a, 0, +(Math.abs(n - o) > 180), 1, r, d],
					["z"]
				]
			}
		};
		for (var k = 0; k < n.length; k++) u += n[k];
		for (k = 0; k < n.length; k++) c = 360 * n[k] / u, l = d, d = l + c, g = v.path().attr({
			sector: [f, m, h, 0, 0],
			stroke: "#312925",
			"stroke-width": 0,
			"stroke-linejoin": "round",
			"stroke-linecap": "round",
			fill: o[k]
		}).data("id", k).data("fillColor", o[k]).click(function() {}).mouseover(function() {
			e(this.data("id"), "mouse")
		}).touchstart(function() {
			e(this.data("id"), "touch")
		}), g.fillColor = o[k], g.sectorAngle = c, g.startAngle = l, g.endAngle = d, g.cx = f, g.cy = m, g.radius = h, g.id = k, g.percentage = n[k], g.slice_label = s[k], _.push(g), g.animate({
			sector: [f, m, h, l, d]
		}, 1e3, "bounce", function() {
			if ($_html.hasClass("ie10") || $_html.hasClass("ie9")) {
				var e = this.attrs.path[1][1],
					t = this.attrs.path[1][2],
					a = this.attrs.path[2][6],
					o = this.attrs.path[2][7];
				centerX = (e + a) / 2, centerY = (t + o) / 2, vector_x = centerX - f, vector_y = centerY - m, vector_length = Math.sqrt(Math.pow(vector_x, 2) + Math.pow(vector_y, 2)), vector_x /= vector_length, vector_y /= vector_length, vector_x_alt = vector_x * f, vector_y_alt = vector_y * m, vector_x *= 160, vector_y *= 160, center_x = vector_x + f, center_y = vector_y + m, center_x_alt = vector_x_alt + f, center_y_alt = vector_y_alt + m, offsetTop = +center_y_alt - 80, offsetLeft = center_x_alt;
				var n = $("#chart-subtitle-" + this.id),
					s = $("#chart-value-" + this.id);
				center_x_alt >= f && center_y_alt <= m && (n.removeClass("bottom-right top-right top-left").addClass("bottom-left"), offsetTop = center_y_alt - n.height() - 60, offsetLeft = center_x_alt), center_x_alt <= f && center_y_alt <= m && (n.removeClass("bottom-left top-right top-left").addClass("bottom-right"), offsetTop = center_y_alt - n.height() - 60, offsetLeft = center_x_alt - n.width() - 50, _globalViewportW <= 667 && (center_x_offset = center_x - r.width() / 2, center_y_offset = center_y - r.height() / 2 + 60)), center_x_alt <= f && center_y_alt >= m && (n.removeClass("bottom-right bottom-left top-left").addClass("top-right"), offsetTop = center_y_alt + n.height(), offsetLeft = center_x_alt - n.width() - 50), center_x_alt >= f && center_y_alt >= m && (n.removeClass("bottom-right top-right bottom-left").addClass("top-left"), offsetTop = center_y_alt + n.height() + 20, offsetLeft = center_x_alt), n.css({
					left: offsetLeft,
					top: offsetTop
				}).addClass("active"), _globalViewportW > 667 && (center_x_offset = center_x - r.width() / 2, center_y_offset = center_y - r.height() / 2), s.css({
					left: center_x_offset,
					top: center_y_offset
				}).addClass("active")
			}
		});
		t.addClass("anim-in"), t.addClass("active"), a.addClass("on"), v.circle(f, m, p).attr({
			fill: "#312925",
			stroke: "#312925"
		})
	}
}

function startModal() {
	function e(e, t, o) {
		_global_allowNavigate = !1, $_body.addClass("js-loading-page"), i.velocity({
			scale: .7,
			opacity: 0
		}, 0), n.velocity({
			opacity: 0
		}, 0), i.load(e + " .toload", function() {
			var t = $(this);
			if ($_body.removeClass("js-no-ajax "), !t.html()) return window.location = e, !1;
			$("html,body").addClass("modal-open"), $_body.removeClass("js-loading-page"), ga("send", "pageview", window.location.pathname), $("#modal-content .toload img:eq(0)").imagesLoaded().always(function(e) {
				i.velocity({
					scale: [1, .7]
				}, {
					duration: 700,
					easing: [.02, .78, 0, .95],
					queue: !1,
					delay: 50
				}).velocity({
					opacity: [1, 0]
				}, {
					duration: 200,
					easing: "ease"
				}), n.velocity({
					opacity: [.8, 0]
				}, {
					duration: 1e3,
					easing: "ease",
					complete: a
				})
			}), $("#lightbox").on("clickoutside", function(e) {
				e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), $("#lightbox .btn-close-modal").click()
			}), _global_allowNavigate = !0
		})
	}

	function t(e, t) {
		return i.velocity({
			scale: [.9, 1]
		}, {
			duration: 700,
			easing: "ease",
			queue: !1,
			delay: 50
		}).velocity({
			opacity: [0, 1]
		}, {
			duration: 500,
			easing: "ease"
		}), n.velocity({
			opacity: [0, .8]
		}, {
			duration: 1e3,
			easing: "ease",
			complete: function() {
				history.replaceState({}, t, e), s.removeClass("js-on"), $("#modal-wrapper").scrollTop(0), $("head title").html(t), $("html,body").removeClass("modal-open"), $("#lightbox").remove(), $(".modal-open #modal-wrapper").off("scroll", o)
			}
		}), !1
	}

	function a() {
		s.addClass("js-on");
		var e = $(".modal-open #modal-wrapper .btn-close-modal"),
			t = e.position();
		_globalYiniForBtnClose = t.top, $(".modal-open #modal-wrapper").on("scroll", o)
	}

	function o() {
		var e = $(".modal-open #modal-wrapper").scrollTop();
		if (e >= _globalYiniForBtnClose) {
			var t = e - _globalYiniForBtnClose - 1;
			$(".btn-close-modal").css({
				transform: "translateY(" + t + "px)"
			})
		} else $(".btn-close-modal").css({
			transform: "translateY(0)"
		})
	}
	var n = $("#modal-bg"),
		s = $("#modal-wrapper"),
		i = $("#modal-content"),
		r = $(".modal"),
		l = "",
		d = "";
	$(document).on("click", ".modal", function(t) {
		if ($("html").hasClass("ie9")) return !0;
		if ($_body.hasClass("mobile") || !window.history.pushState) return !0;
		t.stopImmediatePropagation(), t.preventDefault(), t.stopPropagation();
		var a = $(this),
			o = a.attr("href"),
			n = a.attr("data-title"),
			s = o,
			i = s,
			r = n + " | PrimeIT",
			c = a.attr("data-parent"),
			u = a.attr("data-lang");
		l = window.location.pathname, d = $("head title").text(), $("head title").html(r), history.pushState({}, r, i), _global_allowNavigate && e(s, l, d)
	}), $(document).on("click", "#lightbox .btn-close-modal", function(e) {
		$_body.hasClass("js-no-ajax") || (e.stopImmediatePropagation(), e.preventDefault(), e.stopPropagation(), t(l, d))
	}), $(document).on("contextmenu", ".brand-guides", function(t) {
		t.preventDefault(), t.stopPropagation();
		var a = $(this);
		l = window.location.pathname, d = $("head title").text();
		var o = a.attr("data-url-brand"),
			n = a.attr("data-title-home");
		return history.replaceState({}, n, o), $("head title").html(n), Modernizr.localstorage && (localStorage.originalURL = l, localStorage.originalTitle = d), _global_allowNavigate && e(o, l, d), !1
	})
}

function mainNavigation() {
	var e = null;
	$_btn_nav_main.on("click touchstart", function(t) {
		return t.stopImmediatePropagation(), e = !!$_body.hasClass("open-nav"), mainNav_controll(e), $("html,body").toggleClass("open-nav"), t.stopPropagation(), t.preventDefault(), $(document).trigger("navClicked"), !1
	})
}

function mainNav_controll(e) {
	if (!$_html.hasClass("no-csstransforms3d")) {
		var t = "-130%",
			a = "0",
			o = "1.3",
			n = "1",
			s = "0",
			i = "300px",
			r = ".9",
			l = "0";
		$_nav_main_bg.addClass("open-nav"), $_html.hasClass("mobile") && $_nav_main.css("min-height", $_window.height()), e ? (t = "0", a = "-130%", o = "1", n = "1.3", s = "300px", i = "0", scale_ContI = "1", scale_ContF = "1", r = "0", l = ".9", newsletterForm(!0)) : $_nav_btnWanted.addClass("z10"), $_nav_main.velocity({
			translateY: [a, t],
			scale: [n, o]
		}, {
			duration: 800,
			easing: [.76, 0, .175, 1],
			mobileHA: !0
		}), $(".page-main.page-current").velocity({
			translateY: [i, s]
		}, {
			duration: 800,
			easing: [.76, 0, .175, 1],
			mobileHA: !0,
			complete: function() {
				$(".page-main.page-current").attr("style", "")
			}
		}), $("#header-nav-bg").velocity({
			opacity: [r, l]
		}, {
			duration: 750,
			easing: [.76, 0, .175, 1],
			complete: function() {
				e && ($_nav_main_bg.removeClass("open-nav"), $_nav_btnWanted.removeClass("z10"))
			}
		})
	}
}

function mainNavigation_activeLinks(e) {
	var t = $(".nav-site a");
	t.removeClass("on"), t.each(function() {
		var t = $(this),
			a = t.attr("data-url");
		if (e == a) return void t.addClass("on")
	})
}

function newsletterForm(e) {
	function t() {
		a.removeClass("on"), o.val("")
	}
	var a = $("#form-newsl"),
		o = a.find("input"),
		n = a.find(".btn-submit"),
		s = o.val(),
		i = window.location.hostname;
	o.focus(function() {
		a.addClass("on"), a.removeClass("sent")
	}), o.blur(function() {
		"" === $(this).val() && a.removeClass("on")
	}), e && t(), a.on("submit", function(e) {
		a.addClass("sent"), o.blur().attr("autocomplete", "off"), $.doTimeout(1e3, function() {
			o.val("")
		})
	})
}

function fadeInAudio(e, t) {
	var a = 0,
		o = 0,
		n = null;
	$.doTimeout(t, function() {
		return a += 1, o = a / 100, n = o, e.volume = n, a < 100
	})
}

function calculateGlobalValues() {
	_globalViewportW = verge.viewportW(), _globalViewportH = verge.viewportH(), _globalHalfViewportH = Math.round(_globalViewportH / 2), _globalHalfViewportW = Math.round(_globalViewportW / 2)
}

function getRandomInt(e, t) {
	return Math.floor(Math.random() * (t - e)) + e
}

function clockAnalog(e) {
	function t() {
		return "rotate(" + (30 * ((new Date).getHours() + n) + (new Date).getMinutes() / 2) + "deg)"
	}
	if (!e) return $.doTimeout("intervalSeconds"), $.doTimeout("intervalHours"), $.doTimeout("intervalMins"), !1;
	var a = $(".list-cities a.on").attr("data-timeforclock"),
		o = (new Date).getHours(),
		n = a - o;
	$("#clock-hour").css({
		transform: t()
	}), $.doTimeout("intervalSeconds", 1e3, function() {
		var e = (new Date).getSeconds(),
			t = 6 * e,
			a = t + "deg";
		return 0 == t ? $("#clock-sec").velocity({
			rotateZ: 0
		}, 0) : $("#clock-sec").velocity({
			rotateZ: a
		}, 625, [500, 20]), !0
	}), $.doTimeout("intervalHours", 1e3, function() {
		return $("#clock-hour").css({
			transform: t()
		}), !0
	}), $.doTimeout("intervalMins", 1e3, function() {
		var e = (new Date).getMinutes(),
			t = 6 * e,
			a = "rotate(" + t + "deg)";
		return $("#clock-min").css({
			transform: a
		}), !0
	})
}

function openPopUp() {
	var e = $(".openPopUp");
	$(e).popupWindow({
		centerScreen: 1
	})
}

function whenScrolling(e) {
	if (!e) return $_window.off("scroll", $.debounce(10, rAFheaderElements)), $_id_colorChange.attr("class", "id-it"), $_triggerColorId = null, void(_height_triggerColorId = null);
	$_window.on("scroll", $.debounce(10, rAFheaderElements)), $_triggerColorId = $(".page-main.page-current .id-change"), _height_triggerColorId = [];
	var t = 0;
	$_triggerColorId.each(function(e) {
		var t = $(this),
			a = t.offset().top - 70,
			o = a + t.innerHeight();
		_height_triggerColorId[e] = {
			iniScroll: a,
			endScroll: o
		}
	})
}

function rAFheaderElements() {
	$_body.hasClass("open-nav") || $_body.hasClass("modal-open") || window.requestAnimationFrame(f_rAFheaderElements)
}

function f_rAFheaderElements() {
	var e = verge.scrollY();
	e > 100 ? $_body.addClass("hide-info") : $_body.removeClass("hide-info"), $_triggerColorId.each(function(t) {
		if (e > _height_triggerColorId[t].iniScroll && e < _height_triggerColorId[t].endScroll) return $_id_colorChange.attr("class", "id-it green"), !1;
		$_id_colorChange.attr("class", "id-it")
	})
}

function validateForm(e) {
	e.find(".formMsg").hide();
	var t = 0;
	return e.find(".required").each(function() {
		var e = $(this),
			a = this.defaultValue;
		t = check(e, a, t)
	}), $("input[type=file]"), $file.hasClass("js-added") || ($file.parent(".input-border").find(".add-file").css({
		"background-color": "red"
	}), t += 1), !(t > 0)
}

function check(e, t, a) {
	return e.hasClass("email") ? validateEmail(e) ? (e.removeClass("erro"), a) : (a += 1, e.addClass("erro"), a) : e.hasClass("phone") ? validatePhone(e) ? (e.removeClass("erro"), a) : (a += 1, e.addClass("erro"), a) : e.hasClass("birthdate") ? validateBirthdate(e) ? (e.removeClass("erro"), a) : (a += 1, e.addClass("erro"), a) : e.hasClass("number") ? validateNumbers(e) ? (e.removeClass("erro"), a) : (a += 1, e.addClass("erro"), a) : e.hasClass("cap") ? "" == e.val() || e.val() == t ? (e.parent().children("span").addClass("on"), a += 1, e.parent().addClass("erro"), a) : (e.parent().children("span").removeClass("on"), e.parent().removeClass("erro"), a) : "" == e.val() || e.val() == t ? (a += 1, e.addClass("erro"), a) : (e.removeClass("erro"), a)
}

function validateEmail(e) {
	var t = e.val();
	return !!/^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/.test(t)
}

function validatePhone(e) {
	var t = e.val();
	return !!/^[+]?[0-9 ]{6,}$/.test(t)
}

function validateBirthdate(e) {
	var t = e.val();
	return !!/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g.test(t)
}

function validateNumbers(e) {
	var t = e.val();
	return !!/[0-9 -()+]+$/.test(t)
}

function validateSelect(e) {
	e.each(function() {
		return "checked" == e.attr("checked")
	})
}

function onlyNumber(e) {
	e.shiftKey && e.preventDefault(), 46 == e.keyCode || 8 == e.keyCode || 190 == e.keyCode || 188 == e.keyCode || (e.keyCode < 95 ? (e.keyCode < 48 || e.keyCode > 57) && e.preventDefault() : (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault())
}

function iniHeaderAnimations(e) {
	var t = $("#header-nav .page-name .txt"),
		a = $("#header-nav .page-name .btn"),
		o = $("#header-nav .dropdown-wrapper");
	if ("close" == e) return $_body.addClass("hide-info"), $("#header-nav .page-name .btn").removeClass("go"), !1;
	$_body.removeClass("hide-info");
	var n = $(".page-main.page-current .dropdown-wrapper").html();
	$("#header-nav .dropdown-wrapper").html(""), $("#header-nav .dropdown-wrapper").html(n);
	var t = $("#header-nav .page-name .txt"),
		a = $("#header-nav .page-name .btn");
	$.doTimeout(200, function() {
		t.addClass("go"), a.addClass("go")
	})
}

function initHeaderDropdown() {
	var e = $("#header-nav .dropdown-wrapper .dropdown-menu"),
		t = $("#header-nav .dropdown-wrapper"),
		a = $("#header-nav .page-name.sectors-pagename .btn");
	$(".dropdown-menu li a").each(function() {
		$(this).on("click", function() {
			var e = $("#soundfx").get(0),
				t = 1,
				a = setInterval(function() {
					t <= 0 && clearInterval(a), t > .1 && (t -= .1), e.volume = t
				}, 50)
		})
	}), a.on("click", function() {
		a.hasClass("wrapped") || $_body.hasClass("hide-info") || ($this = $(this), $this.toggleClass("active"), e.toggleClass("on"))
	})
}

function slideshow_slick() {
	var e = $(".slideshow-slick");
	if (!e.length) return !1;
	e.each(function() {
		var e = $(this);
		e.children().length <= 4 || e.slick({
			infinite: !1,
			speed: 600,
			useCSS: !0,
			cssEase: "cubic-bezier(0.76, 0, 0.18, 1)",
			dots: !0,
			arrows: !1,
			slidesToShow: 5,
			slidesToScroll: 5,
			responsive: [{
				breakpoint: 1500,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					dots: !0
				}
			}, {
				breakpoint: 1e3,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: !0
				}
			}, {
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: !0
				}
			}, {
				breakpoint: 570,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: !0
				}
			}]
		})
	})
}

function slideshow_navAutoplayTranslateX(e, t) {
	e.velocity({
		translateX: [0, "-100%"]
	}, {
		easing: "linear",
		duration: t - 1,
		complete: function() {
			$(this).velocity({
				translateX: "-100%"
			}, 0)
		}
	})
}

function slideshow_moveUpScaleDown(e, t, a, o, n) {
	var s = e.filter("[data-slideshow-n=" + o + "]"),
		i = e.filter("[data-slideshow-n=" + n + "]");
	s.addClass("on"), i.removeClass("on"), "next" == a ? (s.velocity("slideshow_moveUpScaleDown.translateUp", 1200, function() {
		s.find(".zoom").addClass("go-out")
	}), i.velocity("slideshow_moveUpScaleDown.scaleDown", 1210, function() {
		i.find(".zoom").removeClass("go-in go-out go-in-start")
	})) : (s.velocity({
		scale: .8,
		translateY: 0
	}, 0).find(".zoom").addClass("go-in-start"), s.velocity("slideshow_moveUpScaleDown.scaleUp", 1e3, function() {
		s.find(".zoom").addClass("go-in")
	}), i.velocity("slideshow_moveUpScaleDown.translateDown", 1100, function() {
		i.find(".zoom").removeClass("go-in go-out go-in-start")
	}))
}

function slideshow_header(e, t, a, o, n) {
	var s = e.filter("[data-slideshow-n=" + o + "]"),
		i = e.filter("[data-slideshow-n=" + n + "]"),
		r = t.filter("[data-slideshow-n=" + o + "]"),
		l = t.filter("[data-slideshow-n=" + n + "]");
	i.removeClass("on"), l.removeClass("on"), s.addClass("on"), i.find("video").length && i.find("video")[0].pause(), s.find("video").length && s.find("video")[0].play(), "next" == a ? (s.css("z-index", "10"), i.css("z-index", "5"), s.velocity("slideshow_header.inUpScaleToDown", 1200), i.velocity("slideshow_header.outUpScaleDown", 1300), r.find(".slide").velocity("slideshow_header.translateBottomCenter", 900), l.find(".slide").velocity("slideshow_header.translateCenterTop", 1e3)) : (s.css("z-index", "5"), i.css("z-index", "10"), s.velocity("slideshow_header.inUpScaleDown", 1200), i.velocity("slideshow_header.outUpScaleToDown", 1300), r.find(".slide").velocity("slideshow_header.translateTopCenter", 900), l.find(".slide").velocity("slideshow_header.translateCenterBottom", 1e3))
}

function slideshow_slideDownUpText(e, t, a, o, n) {
	var s = e.filter("[data-slideshow-n=" + o + "]"),
		i = e.filter("[data-slideshow-n=" + n + "]"),
		a = "next";
	s.addClass("on"), s.find(".info").velocity("transition.slideUpBigIn", {
		drag: !0
	}), i.find(".info").velocity("transition.slideUpBigOut-primeIT", {
		drag: !0,
		duration: 600,
		complete: function() {
			i.removeClass("on")
		}
	})
}

function slideshow_justLoopCSS(e, t, a, o, n, s, i) {
	if (!e) return $.doTimeout(n), !1;
	if (s) {
		var r = 50;
		t.each(function() {
			var e = $(this),
				t = e.width();
			t > r && (r = t)
		}), t.parent().css("min-width", r)
	}
	if (i) {
		var l = 50;
		t.each(function() {
			var e = $(this),
				t = e.height();
			t > l && (l = t)
		}), t.css("min-height", l), t.parent().css("min-height", l)
	}
	var d = 1;
	$.doTimeout(n, o, function() {
		d++;
		var e = d,
			o = d - 1;
		return d > a && (e = 1, o = a, d = 1), t.filter("[data-slideshow-n=" + o + "]").addClass("out").removeClass("on"), t.filter("[data-slideshow-n=" + e + "]").addClass("on").removeClass("out"), !0
	})
}

function slideshow_slideDownUpFade(e, t, a, o, n) {
	var s = e.filter("[data-slideshow-n=" + o + "]"),
		i = e.filter("[data-slideshow-n=" + n + "]"),
		a = "next",
		r = s.attr("data-slideshow-height");
	e.parents(".slideshow-slide-wrapper").height(r), s.addClass("on"), s.find(".slide").css("opacity", "0"), s.find(".slide").velocity("transition.slideUpBigIn", {
		drag: !0,
		duration: 1e3,
		delay: 150
	}), i.find(".slide").velocity("transition.slideUpBigOut-jobs", {
		drag: !0,
		duration: 600,
		complete: function() {
			i.removeClass("on")
		}
	})
}

function slideshow_slidePicsCities(e, t, a, o, n, s) {
	var i = e.filter("[data-slideshow-n=" + n + "]"),
		r = e.filter("[data-slideshow-n=" + s + "]");
	i.addClass("on"), r.removeClass("on"), i.css("z-index", "10"), r.css("z-index", "5"), 1 == n ? a.find(".slideshow-arrows.lft").removeClass("on") : a.find(".slideshow-arrows.lft").addClass("on"), "next" == o ? (i.velocity("slideshow_slidePicsCities.inScaleDownToLeft", 1300), r.velocity({
		translateX: 0
	}, 0), r.velocity("slideshow_slidePicsCities.outScaleDownToLeft", {
		duration: 1400,
		delay: 0
	})) : (i.velocity("slideshow_slidePicsCities.inScaleDownToRight", 1300), r.velocity("slideshow_slidePicsCities.outScaleDownToRight", 1400))
}

function slideshow_slideDownUpTextOLD(e, t, a, o, n) {
	var s = e.filter("[data-slideshow-n=" + o + "]"),
		i = e.filter("[data-slideshow-n=" + n + "]"),
		a = "next";
	s.addClass("on"), s.find(".slide").velocity("transition.slideDownCenterText", {
		drag: !0,
		duration: 1e3
	}), i.find(".slide").velocity("transition.slideCenterUpText", {
		drag: !0,
		duration: 1e3,
		complete: function() {
			i.removeClass("on")
		}
	})
}
$(document).ready(function() {
	outdatedBrowser({
		bgColor: "#f25648",
		color: "#fff",
		lowerThan: "boxShadow",
		languagePath: ""
	}), Modernizr.addTest("backgroundcliptext", function() {
		var e = document.createElement("div");
		return e.style.cssText = Modernizr._prefixes.join("background-clip:text;"), !!e.style.cssText.replace(/\s/g, "").length
	}), Modernizr.addTest("object-fit", !!Modernizr.prefixed("objectFit"))
}), $(document).ready(function() {
	$_window = $(window), $_body = $("body"), $_html = $("html"), $_mainPage = $(".page-main"), $_btn_nav_main = $(".btn-nav-main"), $_header_main = $("#header-nav"), $_nav_main = $(".nav-main"), $_nav_main_bg = $("#header-nav-bg"), $_nav_btnWanted = $("#header-nav .btn-wanted"), $_id_colorChange = $(".id-it"), $_pageName = $("#header-nav .page-name .txt"), $_dropdownBtn = $("#header-nav .page-name .btn"), $_currentPage = $(".page-main.page-current"), $_toPreload = $(".preload"), $_loadingPage = $("#loading-page"), calculateGlobalValues(), _global_allowNavigate = !1, _global_useViewPort = !0, _global_intervalSectors = null, _global_intervalSector = null, _global_sectors_headerTicker = 0, _global_sectors_motionInterval = 0, onStartPageWhenRefresh(!0), mainNavigation(), startModal(), newsletterForm(!1), FastClick.attach(document.body);
	var e = window.location.host,
		t = $("h1 a").attr("data-title-home");
	_forPopstate = !0, $_linkInternal = $('a[href*="' + e + '"]'), $(document).on("click", ' a[href*="' + e + '"] ', function() {
		var e = $(this);
		if (!_global_allowNavigate) return !1;
		if (_global_allowNavigate = !1, $_body.hasClass("mobile")) return !0;
		if (!(e.hasClass("modal") || e.hasClass("js-no-transPage") || $_body.hasClass("home") && e.hasClass("brand-guides"))) {
			var a = e.attr("href"),
				o = e.attr("data-title"),
				n = e.attr("data-pageTrans"),
				s = a,
				i = s,
				r = o + " | PrimeIT";
			return o || (r = t), $("#header-nav .dropdown-wrapper .dropdown-menu").removeClass("on"), init3dModel(!1), _forPopstate && history.pushState({}, r, i), _forPopstate = !0, $("head title").html(r), ga("send", "pageview", window.location.pathname), $_body.hasClass("open-nav") ? (n = "open-nav", loadPages(s, n), !1) : !n && (n = "default", loadPages(s, "default"), !1)
		}
	}), window.addEventListener && window.addEventListener("popstate", function(e) {
		return !$_html.hasClass("mobile") && (e.state ? (_forPopstate = !1, window.location = window.location, !1) : (_forPopstate = !0, !1))
	}), $(".nav-lang a").on("click", function() {
		if (!$(this).hasClass("js-no-transPage")) {
			$_btn_nav_main.click();
			var e = $(this),
				t = e.attr("href"),
				a = encodeURI(window.location.pathname),
				o = t + "?from=" + a;
			return window.location.href = o, !1
		}
	}), $(document).on("click", "a[rel=external]", function(e) {
		return e.stopImmediatePropagation(), e.preventDefault(), e.stopPropagation(), window.open($(this).attr("href")).closed
	}), $("a[rel=print]").click(function() {
		var e = window.print();
		return !1
	}), $("a.email").each(function() {
		var e = $(this).text().replace("[-at-]", "@");
		$(this).text(e), $(this).attr("href", "mailto:" + e)
	}), $("input[type=text], input[type=email], input.text, input.email, textarea").each(function() {
		if ($(this).hasClass("textLimpar")) {
			var e = this.defaultValue;
			$(this).focus(function() {
				$(this).val() == e && $(this).val("")
			}), $(this).blur(function() {
				"" == $(this).val() && $(this).val(e)
			})
		}
	}), $(document).on("click", ".newWindow", function() {
		event.stopImmediatePropagation(), event.preventDefault(), event.stopPropagation();
		var e = window.open($(this).attr("href"), "", "height=480,width=560");
		return window.focus && e.focus(), !1
	}), $(document).on("keydown", function(e) {
		switch (e.which) {
			case 40:
				break;
			case 38:
				break;
			case 39:
				break;
			case 37:
				break;
			case 27:
				return $_body.hasClass("modal-open") ? ($("#lightbox .btn-close-modal").click(), !1) : ($_btn_nav_main.click(), !1);
				break;
			default:
				break
		}
	}), $(document).on("mouseenter", ".btn-round-arrow-circle", function(e) {
		$(this).doTimeout("fOver", 50, "addClass", "over"), e.preventDefault()
	}), $(document).on("mouseleave", ".btn-round-arrow-circle", function(e) {
		$(this).doTimeout("fOver", 0, "removeClass", "over"), e.preventDefault()
	}), $(document).on("mouseenter", ".border-svg a", function(e) {
		$(this).find(".shape-btn-border").doTimeout("fOver2", 50, "addClass", "over"), e.preventDefault()
	}), $(document).on("mouseleave", ".border-svg a", function(e) {
		$(this).find(".shape-btn-border").doTimeout("fOver2", 0, "removeClass", "over"), e.preventDefault()
	}), $_window.on("resize", $.debounce(500, function() {
		if (calculateGlobalValues(), whenScrolling(!0), $_html.hasClass("no-object-fit")) {
			var e = $(".page-current .element-cover");
			resizeLikeCover(e)
		}
		if ($(".page-current .slideshow-txtLoop-slide-footer").length) {
			var t = $(".page-current .slideshow-txtLoop-slide-footer .slideshow-slide"),
				a = 50;
			t.each(function() {
				var e = $(this),
					t = e.height();
				t > a && (a = t)
			}), t.css("min-height", a), t.parent().css("min-height", a)
		}
	})), Visibility.change(function(e, t) {
		"hidden" == t && ($(".page-current .home").length && ($("video")[0].pause() || ($("video")[0].pause(), $("video")[0].volume = 0)), $(".page-current .single-sectors").length && ($("audio")[0].volume = 0, $("audio").prop("muted", !0))), "visible" == t && ($(".page-current .home").length && ($("video")[0].pause() || ($(".mute-video").hasClass("muted") || fadeInAudio($("video")[0], 16), $("video")[0].play())), $(".page-current .single-sectors").length && ($("audio").prop("muted", !1), fadeInAudio($("audio")[0], 16)))
	})
}),
	function(e, $, t, a, o) {
		"use strict";
		$.extend({}).fn.extend({
			buro_slideshows: function(a) {
				return a = $.extend({}, e, a), $(this).each(function() {
					function e(e, t) {
						if (!e) return $.doTimeout(a.autoplay_uniqueName), r.find(".time").hide(), !1;
						var o = 1,
							n = r.filter("[data-slideshow-n=" + o + "]");
						if (t) {
							var s = n.find(".time");
							v(s, a.autoplay_time)
						}
						$.doTimeout(a.autoplay_uniqueName, a.autoplay_time, function() {
							o++;
							var e = o,
								n = o - 1;
							o > p && (e = 1, n = p, o = 1);
							var s = r.filter("[data-slideshow-n=" + e + "]");
							if (r.removeClass("on"), s.addClass("on"), t) {
								var i = s.find(".time");
								v(i, a.autoplay_time)
							}
							return f(c, u, "next", e, n), !0
						})
					}

					function o(e, t) {
						var a = e.find(".slideshow-nav-btn"),
							o = e.find(".slideshow-slide"),
							n = e.find(".slideshow-slide-extra"),
							s = 1,
							i = 1,
							r = 1;
						a.each(function() {
							$(this).attr("data-slideshow-n", s), s++
						}), o.each(function() {
							$(this).attr("data-slideshow-n", i), i++
						}), n.each(function() {
							$(this).attr("data-slideshow-n", r), r++
						})
					}

					function n(e, t) {
						var a = e.find(".slideshow-slide"),
							o = 1;
						a.each(function() {
							var e = $(this),
								t = e.height();
							e.attr("data-slideshow-height", t)
						})
					}
					var s = $(this),
						i = s.find(".slideshow-nav"),
						r = s.find(".slideshow-nav-btn"),
						l = s.find(".slideshow-arrow-btn"),
						d = s.find(".slideshow-arrows-wrapper"),
						c = s.find(".slideshow-slide"),
						u = s.find(".slideshow-slide-extra"),
						h = s.find(".slideshow-slide-wrapper"),
						p = s.find(".slideshow-slide").size();
					if (p <= 1) return i.velocity("fadeOut", {
						duration: 100
					}), void d.velocity("fadeOut", {
						duration: 100
					});
					switch (a.slidetype) {
						case "moveUpScaleDown":
							var f = t.slideshow_moveUpScaleDown;
							break;
						case "headerHome":
							var f = t.slideshow_header;
							break;
						case "slideDownUpFade":
							var f = t.slideshow_slideDownUpFade;
							break;
						case "slidePicsCities":
							var f = t.slideshow_slidePicsCities;
							break;
						case "justLoopCSS":
							slideshow_justLoopCSS(!0, c, p, a.autoplay_time, a.autoplay_uniqueName, a.min_width, a.min_height);
							break;
						default:
							var f = t.slideshow_moveUpScaleDown
					}
					if (o(s, p), a.slide_height) {
						n(s, p);
						var m = s.find(".slideshow-slide.on").attr("data-slideshow-height");
						h.height(m)
					}
					if (r.on("click", function(t) {
							e(!1, !1);
							var a = $(this),
								o = a.attr("data-slideshow-n"),
								n = s.find(".slideshow-nav-btn.on").attr("data-slideshow-n");
							return r.removeClass("on"), a.addClass("on"), o >= n ? f(c, u, "next", o, n) : f(c, u, "prev", o, n), clockAnalog(!0), !1
						}), a.nav_arrows && l.on("click", function(e) {
							var t = $(this),
								a = s.find(".slideshow-nav-btn.on").attr("data-slideshow-n"),
								o = Number(a),
								n = o;
							return t.hasClass("rgt") ? (n = o + 1, o == p && (n = 1), f(c, u, s, "next", n, a)) : (n = o - 1, 1 == o && (n = p), f(c, u, s, "prev", n, a)), r.removeClass("on"), s.find(".slideshow-nav-btn[data-slideshow-n='" + n + "']").addClass("on"), s.find(".page-n").text(n), !1
						}), a.autoplay) {
						if (a.autoplay_onlyLoop) return;
						if (!a.autoplay_type) return void e(a.autoplay, !1);
						switch (a.autoplay_type) {
							case "translateX":
								var v = t.slideshow_navAutoplayTranslateX;
								break;
							default:
								var v = t.slideshow_navAutoplayTranslateX
						}
						e(a.autoplay, a.autoplay_type)
					}
					a.destroy
				})
			},
			destroy: function(t) {
				return $(this).buro_slideshows({
					destroy: !0
				}), $.extend(e, t)
			}
		})
	}({
		slidetype: "moveUpScaleDown",
		slide_height: !1,
		nav_arrows: !1,
		autoplay: !1,
		autoplay_time: 0,
		autoplay_type: null,
		autoplay_uniqueName: null,
		autoplay_onlyLoop: !1,
		min_width: !1,
		min_height: !1,
		destroy: !1
	}, jQuery, window, document),
	$.Velocity.RegisterEffect("slideshow_moveUpScaleDown.translateUp", {
		defaultDuration: 1,
		calls: [
			[{
				translateY: ["0", "100%"]
			}, 1, {
				easing: [.76, 0, .18, 1]
			}]
		]
	}), $.Velocity.RegisterEffect("slideshow_moveUpScaleDown.translateDown", {
	defaultDuration: 1,
	calls: [
		[{
			translateY: ["100%", "0"]
		}, 1, {
			easing: [.76, 0, .18, 1]
		}]
	]
}), $.Velocity.RegisterEffect("slideshow_moveUpScaleDown.scaleDown", {
	defaultDuration: 1,
	calls: [
		[{
			scale: [".8", "1"]
		}, 1, {
			easing: [.76, 0, .18, 1]
		}]
	],
	reset: {
		scale: "1",
		translateY: "100%"
	}
}), $.Velocity.RegisterEffect("slideshow_moveUpScaleDown.scaleUp", {
	defaultDuration: 100,
	calls: [
		[{
			scale: ["1", ".8"],
			translateY: "0"
		}, 1, {
			easing: [.76, 0, .18, 1]
		}]
	],
	reset: {
		scale: "1",
		translateY: "0"
	}
}), $.Velocity.RegisterEffect("slideshow_header.inUpScaleToDown", {
	defaultDuration: 1,
	calls: [
		[{
			translateY: ["0", "130%"],
			scale: ["1.05", "1.5"]
		}, 1, {
			easing: [.76, 0, .175, 1]
		}]
	]
}), $.Velocity.RegisterEffect("slideshow_header.outUpScaleToDown", {
	defaultDuration: 1,
	calls: [
		[{
			translateY: ["130%", "0"],
			scale: ["1.5", "1.05"]
		}, 1, {
			easing: [.76, 0, .175, 1]
		}]
	]
}), $.Velocity.RegisterEffect("slideshow_header.outUpScaleDown", {
	defaultDuration: 1,
	calls: [
		[{
			translateY: ["-50%", "0"],
			scale: ["1", "1.05"],
			opacity: [.4, 1]
		}, 1, {
			easing: [.76, 0, .175, 1]
		}]
	],
	reset: {
		translateY: "130%",
		scale: 1.5,
		opacity: 1
	}
}), $.Velocity.RegisterEffect("slideshow_header.inUpScaleDown", {
	defaultDuration: 1,
	calls: [
		[{
			translateY: ["0", "-50%"],
			scale: ["1.05", "1"],
			opacity: [1, .4]
		}, 1, {
			easing: [.76, 0, .175, 1]
		}]
	]
}), $.Velocity.RegisterEffect("slideshow_header.translateBottomCenter", {
	defaultDuration: 1,
	calls: [
		[{
			translateY: ["0", "105%"]
		}, 1, {
			delay: 200,
			easing: [.76, 0, .18, 1]
		}]
	]
}), $.Velocity.RegisterEffect("slideshow_header.translateCenterBottom", {
	defaultDuration: 1,
	calls: [
		[{
			translateY: ["105%", "0"]
		}, 1, {
			easing: [.76, 0, .18, 1]
		}]
	]
}), $.Velocity.RegisterEffect("slideshow_header.translateCenterTop", {
	defaultDuration: 1,
	calls: [
		[{
			translateY: ["-105%", "0"]
		}, 1, {
			easing: [.76, 0, .18, 1]
		}]
	]
}), $.Velocity.RegisterEffect("slideshow_header.translateTopCenter", {
	defaultDuration: 1,
	calls: [
		[{
			translateY: ["0", "-105%"]
		}, 1, {
			delay: 200,
			easing: [.76, 0, .18, 1]
		}]
	]
}), $.Velocity.RegisterEffect("transition.slideUpBigOut-primeIT", {
	defaultDuration: 800,
	calls: [
		[{
			opacity: [0, 1],
			translateY: -37,
			translateZ: 0
		}]
	],
	reset: {
		translateY: 0
	}
}), $.Velocity.RegisterEffect("transition.slideUpBigOut-jobs", {
	defaultDuration: 800,
	calls: [
		[{
			opacity: [0, 1],
			translateY: -37,
			translateZ: 0
		}]
	],
	reset: {
		translateY: 0
	}
}), $.Velocity.RegisterEffect("slideshow_slidePicsCities.inScaleDownToLeft", {
	defaultDuration: 100,
	calls: [
		[{
			translateX: ["0", "120%"],
			translateZ: 0,
			scale: ["1", "1.4"]
		}, 1, {
			easing: [.76, 0, .175, 1]
		}]
	]
}), $.Velocity.RegisterEffect("slideshow_slidePicsCities.outScaleDownToLeft", {
	defaultDuration: 100,
	calls: [
		[{
			translateX: ["-80%", "0"],
			translateZ: 0,
			opacity: [".3", "1"]
		}, 1, {
			easing: [.76, 0, .175, 1]
		}]
	],
	reset: {
		translateX: "130%",
		scale: "1.5",
		opacity: 1
	}
}), $.Velocity.RegisterEffect("slideshow_slidePicsCities.inScaleDownToRight", {
	defaultDuration: 100,
	calls: [
		[{
			translateX: ["0", "-120%"],
			translateZ: 0,
			scale: ["1", "1.4"]
		}, 1, {
			easing: [.76, 0, .175, 1]
		}]
	]
}), $.Velocity.RegisterEffect("slideshow_slidePicsCities.outScaleDownToRight", {
	defaultDuration: 100,
	calls: [
		[{
			translateX: ["80%", "0"],
			translateZ: 0,
			opacity: [".3", "1"]
		}, 1, {
			easing: [.76, 0, .175, 1]
		}]
	],
	reset: {
		translateX: "130%",
		scale: "1.4",
		opacity: 1
	}
}), $.Velocity.RegisterEffect("transition.slideDownCenterText", {
	defaultDuration: 800,
	calls: [
		[{
			translateY: ["0", "150%"],
			translateZ: 0
		}, 1, {
			easing: [.76, 0, .18, 1]
		}]
	]
}), $.Velocity.RegisterEffect("transition.slideCenterUpText", {
	defaultDuration: 800,
	calls: [
		[{
			translateY: ["-150%", "0"],
			translateZ: 0
		}, 1, {
			easing: [.76, 0, .18, 1]
		}]
	],
	reset: {
		translateY: "150%"
	}
});