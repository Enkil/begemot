//$('.slick').slick({
//    //variableWidth: true,
//    //adaptiveHeight: true,
//    dots:true,
//    prevArrow: $('.who-we-are-nav__prev'),
//    nextArrow: $('.who-we-are-nav__next'),
//
//    infinite: true,
//    speed: 500,
//    fade: true,
//    cssEase: 'linear'
//});

var swiper2 = new Swiper('.swiper-container-2', {
    nextButton: '.who-we-are-nav__next',
    prevButton: '.who-we-are-nav__prev',
    spaceBetween: 0,
    effect: 'fade',
    keyboardControl: true,
    slidesPerView: 1,
    loop: true,
    speed: 500,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
});