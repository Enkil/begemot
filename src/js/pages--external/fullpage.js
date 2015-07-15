if ($('#index-fullpage2').length){
    $('#index-fullpage').fullpage({
        anchors:['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        //fitToSection: false,
        navigation: true,
        navigationPosition: 'right',
        //navigationTooltips:['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        //showActiveTooltip: true,
        scrollOverflow: true,
        fitToSection: false,
    });
}


if ($('#we-fullpage2').length){
    $('#we-fullpage').fullpage({
        //Navigation
        menu: '#we-menu',
        lockAnchors: false,
        anchors:['we', 'team', 'graduates', 'vacancies'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        scrollOverflow: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        normalScrollElements: '.vacancy-modal',

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: false,

        //Design
        controlArrows: true,
        verticalCentered: false,
        resize : false,
        responsiveWidth: 0,
        responsiveHeight: 0,
        paddingTop: '75px',

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
    });
}

if ($('#employee-fullpage2').length){
    $('#employee-fullpage').fullpage({
        //Navigation
        menu: '#we-menu',
        lockAnchors: false,
        anchors:['person', 'interview', 'public', 'articles'],
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        scrollOverflow: true,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        normalScrollElements: '.vacancy-modal',

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: false,

        //Design
        controlArrows: true,
        verticalCentered: false,
        resize : false,
        responsiveWidth: 0,
        responsiveHeight: 0,
        paddingTop: '75px',

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',
    });
}
