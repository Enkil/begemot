$('.header__gamburger').click(function() {
    event.preventDefault();
   $('.header__menu').toggleClass('header__menu--active');
});

$('.header__menu-cross').click(function(event) {
    event.preventDefault();
    $('.header__menu').removeClass('header__menu--active');
});


if ($('#we-fullpage').length){
    $(window).scroll(function() {
        if($(window).scrollTop() >= 500) {
            $('.employee-toggle').addClass('employee-toggle--active');
        }
        else if ($(window).scrollTop() >= 1000) {
            $('.employee-toggle').removeClass('employee-toggle--active');
        }
        else {
            $('.employee-toggle').removeClass('employee-toggle--active');
        }
    });
}

if ($('#employee-fullpage').length){
    $('.employee-toggle').addClass('employee-toggle--active');
}