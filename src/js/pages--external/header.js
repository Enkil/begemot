$('.header__gamburger').click(function() {
    event.preventDefault();
   $('.header__menu').toggleClass('header__menu--active');
});

$('.header__menu-cross').click(function(event) {
    event.preventDefault();
    $('.header__menu').removeClass('header__menu--active');
});


//if ($('#we-fullpage').length){
//    $(window).scroll(function() {
//        if(($(window).scrollTop() >= 500) && ($(window).scrollTop() <= 1400)){
//            $('.employee-toggle').addClass('employee-toggle--active');
//        }
//        else {
//            $('.employee-toggle').removeClass('employee-toggle--active');
//        }
//    });
//}

if ($('#employee-fullpage').length){
    $('.employee-toggle').addClass('employee-toggle--active');
    $('.header__btn').addClass('header__btn--employee');
}

if ($('#we-fullpage').length){
    $('.header__menu').addClass('header__menu--show');
    $('.header__gamburger').hide();
    $('.header__menu-cross').parents('.header__menu-item').hide();
}

if ($('#graduate-fullpage').length){
    $('.header__menu').addClass('header__menu--show');
    $('.header__gamburger').hide();
    $('.header__menu-cross').parents('.header__menu-item').hide();
}