$('.we-slide').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    fade: true,
    cssEase: 'linear'
});

//$('#scrollspy').scrollspy({ target: '.js-scroll-nav' });


$('.js-scrollspy').on('scrollSpy:enter', function() {
    console.log('enter:', $(this).attr('id'));
    $(this)
});
$('.tile').on('scrollSpy:exit', function() {
    console.log('exit:', $(this).attr('id'));
});
$('.tile').scrollSpy();