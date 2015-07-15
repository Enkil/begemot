//$('.js-why-us__title-1').click(function () {
//    thisBlock = $('#why-us-1');
//    allBlocks = $('.js-why-us');
//
//    allBlocks.addClass('hidden');
//    thisBlock.removeClass('hidden');
//});
//
//$('.js-why-us__title-2').click(function () {
//    thisBlock = $('#why-us-2');
//    allBlocks = $('.js-why-us');
//
//    allBlocks.addClass('hidden');
//    thisBlock.removeClass('hidden');
//});
//
//$('.js-why-us__title-3').click(function () {
//    thisBlock = $('#why-us-3');
//    allBlocks = $('.js-why-us');
//
//    allBlocks.addClass('hidden');
//    thisBlock.removeClass('hidden');
//});


//$('.why-us-slider').slick({
//    slidesToShow: 1,
//    infinite: true,
//    speed: 300,
//    arrows: false
//});

//$('.why-us-slider').owlCarousel({
//    items:1,
//    //loop:false,
//    margin:0,
//    dots: false
//    //URLhashListener:true,
//});

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