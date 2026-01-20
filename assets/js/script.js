$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});

//  ================ -menu-click-start- ================

$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }

    });
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
});

//  ================ -menu-click-end- ================

$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();

});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.forgot-password').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});

$('.close_this').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100)

});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)

        }
    })
});
$('.open-the-rest').on('click',function () {
    $(this).addClass('the-rest-none')
    $('.sales__box').removeClass('in-the-zam')
});
$(document).ready(function () {

    $('.increment').on('click', incrementsVal);
    $('.decrement').on('click', decrementVal);

    function incrementsVal() {
        var parent_val = $(this).parents('.add-catalog-for-shop');
        var input_val = $(parent_val).find('input[type=text]').val();
        input_val++;
        $(parent_val).find('input[type=text]').val(input_val)
    }

    function decrementVal() {
        var parent_val = $(this).parents('.add-catalog-for-shop');
        var input_val = $(parent_val).find('input[type=text]').val();
        input_val--;
        if (input_val <= 1) {
            $(parent_val).find('input[type=text]').val('1')
        } else {
            $(parent_val).find('input[type=text]').val(input_val)

        }
    }

});

$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});



$('.header-flag strong').on('click', function (e) {
    $(this).parent().toggleClass('click-open-flag');
    e.stopPropagation();
});

$('.header-flag-droup ul li a').on('click', function () {
    var text_in = $('.header-flag strong').html();
    let selected_text = $(this).html();
    $('.header-flag strong').html(selected_text);
    $(this).html(text_in)
    $('.header-flag').removeClass('click-open-flag')
});
$(window).on('click', function (e) {
    let menuSort = $('.header-flag');
    if (e.target !== menuSort) {
        menuSort.removeClass('click-open-flag');
    }
});



$('.header-leng strong').on('click', function (e) {
    $(this).parent().toggleClass('click-open-leng');
    e.stopPropagation()
});

$('.header-leng-droup ul li a').on('click', function () {
    var text_in = $('.header-leng strong').html();
    let selected_text = $(this).html();
    $('.header-leng strong').html(selected_text);
    $(this).html(text_in)
    $('.header-leng').removeClass('click-open-leng')
});
$(window).on('click', function (e) {
    let menuSort = $('.header-leng');
    if (e.target !== menuSort) {
        menuSort.removeClass('click-open-leng')
    }
});


$('.open-score').on('click', function (e) {
    $('.dorup__menu').toggleClass('dorup__menu__act');
    e.stopPropagation()
});
$('.dorup__menu').on('click', function (e) {
    e.stopPropagation()
});

$(window).on('click', function (e) {
    let menuSort = $('.dorup__menu');
    if (e.target !== menuSort) {
        menuSort.removeClass('dorup__menu__act')
    }
});


$('.accord-er strong').on('click', function (e) {
    $(this).parent().toggleClass('accord-er_act');
    e.stopPropagation()
});

$('.accord-drop ul li').on('click', function () {
    var text_in = $('.accord-er strong').html();
    let selected_text = $(this).html();
    $('.accord-er strong').html(selected_text);
    $(this).html(text_in)
    $('.accord-er').removeClass('accord-er_act')
});
$(window).on('click', function (e) {
    let menuSort = $('.accord-er');
    if (e.target !== menuSort) {
        menuSort.removeClass('accord-er_act')
    }
});

$('.new-dsisplay-er strong').on('click', function (e) {
    $(this).parent().toggleClass('ew-dsisplay_act');
    e.stopPropagation()
});
$('.new-dsisplay-drop ul li').on('click', function () {
    var text_in = $('.new-dsisplay-er strong').html();
    let selected_text = $(this).html();
    $('.new-dsisplay-er strong').html(selected_text);
    $(this).html(text_in)
    $('.new-dsisplay-er').removeClass('ew-dsisplay_act')
});
$(window).on('click', function (e) {
    let menuSort = $('.new-dsisplay-er');
    if (e.target !== menuSort) {
        menuSort.removeClass('ew-dsisplay_act')
    }
});



$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    var accordion = new Accordion($('#accordion'), false);
});


var swiper = new Swiper(".recom-just__slid", {
    slidesPerView: 3,
    loop: true,
    breakpoints: {
        '1300': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '990': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '767': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$('.menu').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            if(window.innerWidth<=570){
                var targetOffset = $target[0].offsetTop -100;
                $('html,.reviews-min-block-js')
                    .animate({scrollTop: targetOffset}, 1000);
                return false;
            }else{
                var targetOffset = $target.offset().top-70;
                $('html,.reviews-min-block-js')
                    .animate({scrollTop: targetOffset}, 1000);
                return false;
            }

        }
    }
});



$(document).ready(function () {
    addActiveClass('reviews-min-text-hrefs', 'active-href');
    changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    $('.click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'reviews-min-text-hrefs', 'active-href')
        changeCaseBlock(this, 'reviews-min-text-hrefs', 'reviews-min-info', 'active-href', 'click-reviews');
    })
    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});

                }
            })
        }
    }

});


const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();
