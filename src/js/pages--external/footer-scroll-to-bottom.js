function footerPosition(){
    var sectionFirst = $('section.section').first();

    if (!sectionFirst.hasClass("active")) {
        $('.footer').addClass('footer--after-scroll');
    } else $('.footer').removeClass('footer--after-scroll');

    setTimeout(footerPosition, 200);
}

footerPosition();
