function footerPosition(){
    var sectionFirst = $('section.section').first();

    if (!sectionFirst.hasClass("active")) {
        $('.footer').addClass('footer--after-scroll');
    } else $('.footer').removeClass('footer--after-scroll');

    setTimeout(footerPosition, 200);
}

footerPosition();


// Hide footer menu when scroll to page bottom
//if ($('#we-fullpage').length){
//    $(window).bind('scroll', function() {
//        if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight){
//            $('.footer').css('display','none');
//        }
//        else {
//            $('.footer').css('display','block');
//        }
//    });
//}

//$('#scroll-nav').scroolly([
//    {
//        //from: 'el-top = vp-bottom - 100px',
//        from: 'el-bottom = doc-bottom + 100px',
//        to: 'el-bottom = doc-bottom',
//        css: {
//            display: 'none'
//        }
//    }
//]);

var lastId,
    topMenu = $("#we-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
// All list items
    menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href=#"+id+"]").parent().addClass("active");
    }
});