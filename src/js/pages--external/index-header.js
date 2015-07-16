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

