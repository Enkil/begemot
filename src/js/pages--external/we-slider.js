//$('.we-slide').slick({
//    infinite: true,
//    dots: true,
//    fade: true,
//    speed: 500,
//
//    cssEase: 'ease',
//    //useCSS: true
//});


var swiper4 = new Swiper('.swiper-container-4', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    effect: 'fade',
    keyboardControl: true,
    slidesPerView: 1,
    loop: true,
    speed: 500,
    pagination: '.swiper-pagination4',
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
});