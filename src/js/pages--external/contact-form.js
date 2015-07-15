$(".contact-form__input").focus(function() {
    $(this).parents(".contact-form__label").children('.js-label').removeClass('invisible');
});

$(".contact-form__textarea").focus(function() {
    $(this).parents(".contact-form__label").children('.js-label').removeClass('invisible');
});


$(".contact-form__input").blur(function() {
    if ($(this).val().length === 0) {
        $(this).parents(".contact-form__label").children('.js-label').addClass('invisible');
    }
});

$(".contact-form__textarea").blur(function() {
    if ($(this).val().length === 0) {
        $(this).parents(".contact-form__label").children('.js-label').addClass('invisible');
    }
});

//$('.contact-form__btn').click(function(event){
//    event.preventDefault();
//    $('.contact-form__label').addClass('hidden');
//    $('.contact-form__btn').addClass('hidden');
//    $('.contact-form__sented').removeClass('hidden');
//});

$(".contact-form__btn").click(function(event){
    event.preventDefault();
    $('.contact-form__input').each(function() {
        if ($(this).val().length === 0) {
            $(this).parents(".contact-form__label").children('.js-label').removeClass('invisible').css('color','red').addClass('js-error-count');
        }
    });

    var errorsCount = $('.js-error-count').length();
    console.log(errorsCount);

    if (errorsCount = 0) {
        $('.contact-form__label').addClass('hidden');
        $('.contact-form__btn').addClass('hidden');
        $('.contact-form__sented').removeClass('hidden');
    }

});