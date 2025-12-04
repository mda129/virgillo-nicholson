jQuery(function ($) {
    'use strict';

    // 1. Mobile Menu Logic
    // Close menu when clicking a link
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // Fixed Header Logic
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.site-navigation').addClass('navbar-fixed');
        } else {
            $('.site-navigation').removeClass('navbar-fixed');
        }
    });

    $(document).ready(function () {
        // 2. Main Slider (With Fade Fix)
        $('.banner-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            dots: false,
            arrows: true,
            fade: true, // PREVENTS GLITCHING
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false // Hide arrows on mobile
                    }
                }
            ]
        });

        // Page Sliders
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
        
        // Mobile Dropdowns
        if ($(window).width() < 992) {
            $('.dropdown-toggle').on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).parent().siblings().removeClass('show');
                $(this).parent().toggleClass('show');
                $(this).parent().find('.dropdown-menu').toggle();
            });
        }
        
        // Popup Gallery
        $('.gallery-popup').colorbox({
            rel: 'gallery-popup',
            transition: 'slideshow',
            innerHeight: '500'
        });
    });
});