$(".contact-form__input").focus(function() {
    $(this).parents(".contact-form__label").children('.js-label').removeClass('invisible');
});

$(".contact-form__textarea").focus(function() {
    $(this).parents(".contact-form__label").children('.js-label').removeClass('invisible');
});

$(".contact-form__input").blur(function() {
    $(this).parents(".contact-form__label").children('.js-label').addClass('invisible');
});

$(".contact-form__textarea").blur(function() {
    $(this).parents(".contact-form__label").children('.js-label').addClass('invisible');
});
