$('.apps__slider').slick({
    dots:true,
    prevArrow: $('.apps-nav__prev'),
    nextArrow: $('.apps-nav__next'),
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'linear'
});


$('.apps-nav__prev, .apps-nav__next').click(function() {
    var totalAppSlides = $('.slick-track').find('.slick-slide:not(.slick-cloned)').length;
    var currentAppSlide = $('.slick-track').find('.slick-slide:not(.slick-cloned)').index($('.slick-active'));
    console.log('total slides:' + totalAppSlides);
    console.log('current slide:' + currentAppSlide);
});

//sl_number = $('.radio-lbl').index($('.ui-state-active'));