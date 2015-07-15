var swiper3 = new Swiper('.swiper-container-3', {
    nextButton: '.apps-nav__next',
    prevButton: '.apps-nav__prev',
    spaceBetween: 0,
    effect: 'fade',
    keyboardControl: true,
    slidesPerView: 1,
    loop: true,
    speed: 500,
    pagination: '.swiper-pagination3',
    paginationClickable: true,
    paginationBulletRender: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
});