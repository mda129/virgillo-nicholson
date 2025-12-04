jQuery(function ($) {
    'use strict';

    /* ----------------------------------------------------------- */
    /* Fixed header
    /* ----------------------------------------------------------- */
    $(window).on('scroll', function () {
        function fixedHeader() {
            var headerTopBar = $('.top-bar').outerHeight();
            var headerOneTopSpace = $('.header-one .logo-area').outerHeight();
            var headerOneELement = $('.header-one .site-navigation');

            if ($(window).scrollTop() > headerTopBar + headerOneTopSpace) {
                $(headerOneELement).addClass('navbar-fixed');
                $('.header-one').css('margin-bottom', headerOneELement.outerHeight());
            } else {
                $(headerOneELement).removeClass('navbar-fixed');
                $('.header-one').css('margin-bottom', 0);
            }
        }
        fixedHeader();
    });

    $(document).ready(function () {
        // navSearch show/hide
        function navSearch() {
            $('.nav-search').on('click', function () {
                $('.search-block').fadeIn(350);
            });
            $('.search-close').on('click', function () {
                $('.search-block').fadeOut(350);
            });
        }
        navSearch();

        // navbarDropdown
        function navbarDropdown() {
            if ($(window).width() < 992) {
                $('.site-navigation .dropdown-toggle').on('click', function () {
                    $(this).siblings('.dropdown-menu').animate({
                        height: 'toggle'
                    }, 300);
                });
                var navbarHeight = $('.site-navigation').outerHeight();
                $('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
            }
        }
        navbarDropdown();

        // back to top
        function backToTop() {
            $('#back-to-top').on('click', function () {
                $('#back-to-top').tooltip('hide');
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        }
        backToTop();

        // banner-carousel (FIXED: Added fade: true)
        function bannerCarouselOne() {
            $('.banner-carousel.banner-carousel-1').slick({
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                dots: true,
                speed: 600,
                arrows: true,
                prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
            });
            $('.banner-carousel.banner-carousel-1').slickAnimation();
        }
        bannerCarouselOne();

        // pageSlider
        function pageSlider() {
            $('.page-slider').slick({
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                dots: false,
                speed: 600,
                arrows: true,
                prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
                nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
            });
        }
        pageSlider();

        // Shuffle js filter
        function projectShuffle() {
            if ($('.shuffle-wrapper').length !== 0) {
                var Shuffle = window.Shuffle;
                var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
                    itemSelector: '.shuffle-item',
                    sizer: '.shuffle-sizer',
                    buffer: 1
                });
                $('input[name="shuffle-filter"]').on('change', function (evt) {
                    var input = evt.currentTarget;
                    if (input.checked) {
                        myShuffle.filter(input.value);
                    }
                });
                $('.shuffle-btn-group label').on('click', function () {
                    $('.shuffle-btn-group label').removeClass('active');
                    $(this).addClass('active');
                });
            }
        }
        projectShuffle();

        // media popup
        function mediaPopup() {
            $('.gallery-popup').colorbox({
                rel: 'gallery-popup',
                transition: 'slideshow',
                innerHeight: '500'
            });
        }
        mediaPopup();
    });
});