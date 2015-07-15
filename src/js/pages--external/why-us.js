var swiper = new Swiper('.swiper-container', {
    //pagination: '.swiper-pagination',
    //paginationClickable: '.swiper-pagination',
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    hashnav: true,
    effect: 'fade',
    keyboardControl: true,
    slidesPerView: 1,
});

$(".why-us__title").click(function(e) {
    e.preventDefault();
    var id = $(this).attr("data-item");
    //swiper.slideTo($(this).data('slide'));
    swiper.slideTo(id);
});