function indexHeader(){
    var sectionFirst = $('section.section').first();

    if (sectionFirst.hasClass("active")) {
        $('.header').addClass('hidden');
    } else $('.header').removeClass('hidden');

    setTimeout(indexHeader, 200);
}

if ($(".header-index").length) {
    indexHeader();
}

