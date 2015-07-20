$(document).ready(function() {
    // Default Variables
    var sectionsColor = ['#333', '#000', '#000', '#002344', '#443100', '#000'];
    var anchors       = ['home', 'mission', 'story', 'family', 'eboards', 'chapters'];
    $('#content').fullpage({
        //Navigation
        menu: false,
        lockAnchors: false,
        anchors:anchors,
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '.brothers, .eboards, #chapters-table',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor : sectionsColor,
        paddingTop: '-50px',
        fixedElements: '#header, .footer',
        responsiveWidth: 600,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            active = $('#nav'+nextIndex);
            active.addClass('active');
            active.siblings().removeClass('active');
        },
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            $('.slide .active').css('overflow-y','auto');
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});