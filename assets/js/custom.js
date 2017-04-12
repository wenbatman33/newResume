(function($) {
    'use strict';
    $(window).load(function() {
        /* PreLoader */
        $('.status').fadeOut();
        $('.preloader').delay(350).fadeOut(500);
    });
    /* Backstretch */
    // $.backstretch('assets/images/background/home.png');
    /* Animation Backstretch On Page Load */
    $(window).scrollTop() > $(window).height() ? $(".backstretch").fadeOut("slow") : $(".backstretch").fadeIn(100);
    /* Animation Navbar On Page Load */
    $(window).scrollTop() > $(window).height() - 80 ? $(".navbar").addClass("scroll") : $(".navbar").removeClass("scroll");
    $(window).on("scroll", function() {
        var a = $(this).scrollTop(),
            b = $(window).height(),
            c = 1.2 - a / (10 * b);

        /* Animation Backstretch On Page Scroll */
        $(".backstretch img").css({
            "transform": "scale(" + c + ")",
            "-webkit-transform": "scale(" + c + ")"
        });
        /* Animation Header On Page Scroll */
        if ((1 - a / 400) < 0) {
            $(".headerTitle").hide();
        } else {
            $(".headerTitle").show();
        }
        $(".header .container-fluid").css({
            "opacity": 1 - a / 400
        });
        /* Animation Background Section About On Page Scroll */
        $("section.about").css({
            "background-color": "rgba(255, 255, 255, 0" + a / 200 + ")"
        });
        /* Animation Backstretch On Page Scroll */
        if ($(window).scrollTop() > $(window).height()) {
            $(".backstretch").fadeOut(0);
        } else {
            $(".backstretch").fadeIn(300);
        }
        /* Animation Navbar On Page Scroll */
        $(window).scrollTop() > $(window).height() - 80 ? $(".navbar").addClass("scroll") : $(".navbar").removeClass("scroll");
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    /* ScrollTop */
    $('.nav > li > a, a.navbar-brand').on('click', function(event) {
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    /* scrollspy highlighting active navbar menu */
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })
    $(function() {
        /* init Isotope */
        var $container = $('.work-posts');

        /* filter functions */
        var filterFns = {
            /* show if number is greater than 50 */
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            /* show if name ends with -ium */
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        /* bind filter button click */
        $('#filters').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            /* use filterFn if matches value */
            filterValue = filterFns[filterValue] || filterValue;
            $container.isotope({
                filter: filterValue
            });
        });
        /* change is-checked class on buttons */
        $('.filters').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function() {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
        $(window).mousemove(function(e) {

            if (e.clientX < (window.innerWidth / 2)) {
                $('.stalker').children().first().addClass('active');
                $('.stalker').children().last().removeClass('active');
            } else {
                $('.stalker').children().first().removeClass('active');
                $('.stalker').children().last().addClass('active');
            }

            $(".stalker").css({ transform: 'matrix(1, 0, 0, 1, ' + (e.clientX - (window.innerWidth / 2)) + ', ' + (e.clientY - (window.innerHeight / 2)) + ')' });
        });
    });
    /* Init Text Rotator */
    $(".description .sub").typed({
        strings: ["UI Designer", "Front End Designer"],
        typeSpeed: 1,
        backSpeed: 1,
        backDelay: 1400,
        loop: true
    });
    /* Optional Init Animation Reveal    new WOW().init(); */

})(jQuery);