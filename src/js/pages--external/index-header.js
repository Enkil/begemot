function indexHeader(){
    var sectionFirst = $('section.section').first();

    if (sectionFirst.hasClass("active")) {
        $('.header').addClass('hidden');
    } else $('.header').removeClass('hidden');

    setTimeout(indexHeader, 200);
}

//if ($(".js-header-index").length) {
//    indexHeader();
//}

$('.js-slide-to').click(function (e) {
    e.preventDefault();

    var $correction = 200;

    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - $correction + "px"
    }, {
        duration: 1000,
        easing: "swing"
    });
    return false;
});