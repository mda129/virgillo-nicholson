jQuery(function ($) {
    'use strict';

    // 1. Mobile Menu Fix: Close menu when clicking a link
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // 2. Fixed Header Logic
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.site-navigation').addClass('navbar-fixed');
        } else {
            $('.site-navigation').removeClass('navbar-fixed');
        }
    });

    // 3. Slider Initialization (With Fade Fix)
    $(document).ready(function () {
        // Main Banner Slider
        $('.banner-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            dots: false,
            speed: 600,
            arrows: true,
            fade: true, // Prevents "stuck slide" glitch
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false // Hide arrows on mobile for cleaner look
                    }
                }
            ]
        });

        // Initialize other sliders if they exist
        if($('.page-slider').length) {
            $('.page-slider').slick({
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                dots: false,
                arrows: true
            });
        }
        
        // Mobile Menu Dropdown Toggle
        if ($(window).width() < 992) {
            $('.dropdown-toggle').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).parent().siblings().removeClass('show');
                $(this).parent().toggleClass('show');
                $(this).parent().find('.dropdown-menu').toggle();
            });
        }
    });
});