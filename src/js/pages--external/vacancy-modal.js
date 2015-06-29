$('.vacancy').click(function(event){
    $('.footer').addClass('hidden');
    $('.header').addClass('hidden');
    $('main').addClass('hidden');
    $('.vacancy-modal').addClass('vacancy-modal--active');
    $('.vacancy-modal__wrapper').off('mousewheel', callback);
    $('.vacancy-modal__wrapper').on('mousewheel', callback);
});

$('.vacancy-modal__cross').click(function(event){
    $('.vacancy-modal').removeClass('vacancy-modal--active');
    $('.footer').removeClass('hidden');
    $('.header').removeClass('hidden');
    $('main').removeClass('hidden');
});

$(document).keyup(function(event) {
    if(event.keyCode == 27) {
        $('.vacancy-modal').removeClass('vacancy-modal--active');
        $('.footer').removeClass('hidden');
        $('.header').removeClass('hidden');
        $('main').removeClass('hidden');
    }
});