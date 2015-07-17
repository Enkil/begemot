$('.vacancy').click(function(){
    scrollBack = $(this);
    $('.footer').addClass('hidden');
    $('.header').addClass('hidden');
    $('main').addClass('hidden');
    $('.vacancy-modal').addClass('vacancy-modal--active');
    $('.vacancy-modal__wrapper').off('mousewheel');
    $('.vacancy-modal__wrapper').on('mousewheel');
    //$('.vacancy-modal').scrollTop(0);
    $("html, body").scrollTop($(".vacancy-modal").offset().top);
});

$('.vacancy-modal__cross').click(function(){
    $('.vacancy-modal').removeClass('vacancy-modal--active');
    $('.footer').removeClass('hidden');
    $('.header').removeClass('hidden');
    $('main').removeClass('hidden');
    $('html, body').animate({
        scrollTop: scrollBack.offset().top
    }, 1000);
});

$(document).keyup(function(event) {
    if(event.keyCode == 27) {
        $('.vacancy-modal').removeClass('vacancy-modal--active');
        $('.footer').removeClass('hidden');
        $('.header').removeClass('hidden');
        $('main').removeClass('hidden');
    }
});