// svg icons support ie11
(function () {
	svg4everybody();
})();

// carousel arrows
var navArrows = ['\n    <svg class="icon icon-arrow-prev">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use>\n    </svg>', '<svg class="icon icon-arrow-next">\n        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use>\n    </svg>'];

// owl carousel
$(document).ready(function () {
	var slider = $('.js-slider');
	slider.owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		loop: true,
		smartSpeed: 700
	});

	var sliderCategories = $('.js-slider-categories');
	sliderCategories.owlCarousel({
		items: 5,
		nav: false,
		dots: true,
		loop: true,
		smartSpeed: 700,
		responsive: {
			0: {
				items: 1,
				autoHeight: true
			},
			768: {
				items: 3
			},
			1024: {
				items: 4
			},
			1340: {
				items: 5
			}
		}
	});
});

// toggle sidebar
(function () {
	var toggle = $('.sidebar__toggle'),
	    page = $('.page'),
	    sidebar = $('.sidebar'),
	    headerToggle = $('.header__toggle'),
	    logo = $('.header__logo'),
	    close = $('.sidebar__close');
	toggle.on('click', function () {
		sidebar.toggleClass('active');
		page.toggleClass('wide');
		setTimeout(function () {
			$('.owl-carousel').trigger('refresh.owl.carousel');
		}, 200);
	});

	headerToggle.on('click', function () {
		sidebar.addClass('active');
		page.addClass('toggle');
		logo.addClass('hidden');
		$('body').addClass('no-scroll');
		$('html').addClass('no-scroll');
	});

	close.on('click', function () {
		sidebar.removeClass('active');
		page.removeClass('toggle');
		logo.removeClass('hidden');
		$('body').removeClass('no-scroll');
		$('html').removeClass('no-scroll');
	});
})();

// header
(function () {
	var header = $('.header'),
	    items = header.find('.header__item');

	items.each(function () {
		var item = $(this),
		    head = item.find('.header__head'),
		    body = item.find('.header__body');

		head.on('click', function (e) {
			e.stopPropagation();

			if (!item.hasClass('active')) {
				items.removeClass('active');
				item.addClass('active');
			} else {
				items.removeClass('active');
			}
		});

		body.on('click', function (e) {
			e.stopPropagation();
		});

		$('body').on('click', function () {
			items.removeClass('active');
		});
	});
})();

// $(document).ready(function () {
// 	$('.select').niceSelect();
// });
// $(window).on('hashchange', function(e){
// 	$('.select').niceSelect();
// });
// dropdown
(function () {
	var dropdowns = $('.dropdown');
	dropdowns.each(function () {
		var dropdown = $(this);
		head = dropdown.find('.dropdown__head'), body = dropdown.find('.dropdown__body');
		head.on('click', function (e) {
			e.stopPropagation();
			e.preventDefault();
			if (!dropdown.hasClass('active')) {
				dropdowns.removeClass('active');
				dropdown.addClass('active');
			} else {
				dropdowns.removeClass('active');
			}
		});
		body.on('click', function (e) {
			e.stopPropagation();
		});
		$('body').on('click', function () {
			dropdowns.removeClass('active');
		});
	});
})();

// field
(function () {
	$('.js-field-input').focusin(function () {
		$(this).parents('.js-field').addClass('active');
	});
	$('.js-field-input').focusout(function () {
		var _this = $(this),
		    field = _this.parents('.js-field'),
		    value = _this.val();
		if (value == '') {
			field.removeClass('active');
		}
	});
})();

// price stage modal

$('.price_modal_buy').on('click', function () {
	$('.prices__table').addClass('small');
	$('.prices__sidebar').addClass('visible');
});
$('.prices__close').on('click', function () {
	$('.prices__table').removeClass('small');
	$('.prices__sidebar').removeClass('visible');
});



$('.price_modal_sale').on('click', function () {
	$('.prices__sidebar1').addClass('visible');
	$('.prices__table').addClass('small');
});
$('.prices__close').on('click', function () {
	$('.prices__table').removeClass('small');
	$('.prices__sidebar1').removeClass('visible');
});

window.onclick = function(event) {
  if (event.target == modal1) {
  $('.prices__table').removeClass('small');
	$('.prices__sidebar').removeClass('visible');
}}

$('.transfer').on('click', function () {
	$('.prices__sidebar2').addClass('visible');
	$('.prices__table').addClass('small');
});
$('.prices__close').on('click', function () {
	$('.prices__table').removeClass('small');
	$('.prices__sidebar2').removeClass('visible');
});



// magnificPopup
(function () {
	var link = $('.js-popup-open');
	link.magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		removalDelay: 200,
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		}
	});
})();

// tabs
(function () {
	var tabs = $('.js-tabs');
	tabs.each(function () {
		var thisTabs = $(this),
		    nav = thisTabs.find('.js-tabs-link'),
		    option = thisTabs.find('.option'),
		    item = thisTabs.find('.js-tabs-item');
		nav.on('click', function () {
			var thisNav = $(this),
			    indexNav = thisNav.index();
			nav.removeClass('active');
			thisNav.addClass('active');
			item.hide();
			item.eq(indexNav).fadeIn();
			return false;
		});
	});

	$(document).ready(function () {
		var option = $('.js-tabs-select .option');

		option.on('click', function () {
			var thisOption = $(this),
			    indexOption = thisOption.index();
			console.log(indexOption);
			$('.js-tabs-item').hide();
			$('.js-tabs-item').eq(indexOption).fadeIn();
		});
	});
})();

// favorite for table
$('.favorite').on('click', function () {
	$(this).toggleClass('active');
});

// wallets stage
$('.balances__row').on('click', function () {
	$('.wallets__wrapper').addClass('small');
	$('.balances__table').addClass('small');
	$('.wallets__sidebar').addClass('visible');
	$('.wallets__body').show();
	$('.operations__form').hide();
	$('.operations__wrap').hide();
});
$('.wallets__close').on('click', function () {
	$('.wallets__wrapper').removeClass('small');
	$('.balances__table').removeClass('small');
	$('.wallets__sidebar').removeClass('visible');
});
$('.wallets__btn').on('click', function () {
	$('.wallets__wrapper').addClass('small');
	$('.balances__table').addClass('small');
	$('.wallets__sidebar').addClass('visible');
	$('.wallets__body').hide();
});
$('.wallets__btn:first-child, .card__btn:first-child').on('click', function () {
	$('.wallets__body').hide();
	$('.operations__form').show();
	$('.operations__wrap').hide();
});
$('.wallets__btn:nth-child(2), .card__btn:nth-child(2)').on('click', function () {
	$('.wallets__body').hide();
	$('.operations__wrap').show();
	$('.operations__form').hide();
});

// price toggle menu
$('.details__burger').on('click', function () {
	$(this).parents('.details__company').toggleClass('active');
});

// exchange toggle menu
$('.exchange__head').on('click', function () {
	$(this).parents('.exchange__company').toggleClass('active');
});

$(document).ready(function () {
	if (window.matchMedia("(max-width: 767px)").matches) {
		var number = $('.market__row:not(.market__row_head) .market__cell:not(:first-child)');
		number.each(function () {
			var numberValue = Math.round(+$(this).text() * 1000) / 1000;
			$(this).text(numberValue);
		});
	}
});

// control sections for mobile version page Exchange
(function () {
	var link = $('.exchange__menu .exchange__link'),
	    item = $('.exchange__top, .market__tabs, .market__transactions, .orders, .actions');
	link.each(function () {
		var thisLink = $(this),
		    thisLinkAttr = thisLink.data('class'),
		    top = $('body').offset().top;
		thisLink.on('click', function (e) {
			e.preventDefault();
			link.removeClass('active');
			thisLink.addClass('active');
			item.hide();
			$(thisLinkAttr).show();
			$('body,html').animate({ scrollTop: top }, 500);
		});
	});
})();



 window.onclick = function(event) {

    if (event.target == modal) {

      $('.prices__table').removeClass('small');
 	$('.prices__sidebar').removeClass('visible');

     }

//     if (event.target == modal1) {

//       $('.prices__table').removeClass('small');
// 	$('.prices__sidebar1').removeClass('visible');

//     }
//      if (event.target == modal2) {

//      $('.prices__table').removeClass('small');
//   	$('.prices__sidebar2').removeClass('visible');

//     }

}

$('.activity__row').on('click', function () {
	$('.activity__table').addClass('small');
	$('.activity__sidebar').addClass('visible');
});
$('.activity__close').on('click', function () {
	$('.activity__table').removeClass('small');
	$('.activity__sidebar').removeClass('visible');
});


// ------ drowpdown remittance_transaction

  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    
  }
 $('.exist').on('click',function(){
      $(this).toggleClass('active');
      if($(this).hasClass('active')){
      $('.exist_yesno',this).animate({'left':'10px'},300);
          }else{
            $('.exist_yesno',this).animate({'left':'0'},300);
          }
    });



	/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
                var n = e(this),
                    i = n.data("display");s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
            });
        }if ("string" == typeof t) return "update" == t ? this.each(function () {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");n.length && (n.remove(), s(t), i && t.next().trigger("click"));
        }) : "destroy" == t ? (this.each(function () {
            var t = e(this),
                s = e(this).next(".nice-select");s.length && (s.remove(), t.css("display", ""));
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;this.hide(), this.each(function () {
            var t = e(this);t.next().hasClass("nice-select") || s(t);
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
            var s = e(this);e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
        }), e(document).on("click.nice_select", function (t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
            var s = e(this),
                n = s.closest(".nice-select");n.find(".selected").removeClass("selected"), s.addClass("selected");var i = s.data("display") || s.text();n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
                } else s.trigger("click");return !1;
            }if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
        });var n = document.createElement("a").style;return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
    };
}(jQuery);