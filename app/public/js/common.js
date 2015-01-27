(function () {

    'use strict';

    var SPEED = 350,
        SITE_MIN_WIDTH = 640;

    var $window = $(window),
        $trigger = $('#js-trigger'),
        $wrapper = $('#js-wrapper'),
        $nav = $('#js-nav');

    var scrollAllow = true,
        resizeTimer;

    function navCloseEvent(){
        $trigger.removeClass('is-active');
        $wrapper.fadeIn(SPEED);
        $nav.fadeOut(SPEED);
        scrollAllow = true;
    }

    // ローディング、curtain表示中はスクロールさせない
    function noScroll() {
        $window.on('mousewheel touchmove', function (e) {
            if (scrollAllow === false) {
                e.preventDefault();
            }
        });
    }
    noScroll();

    //header nav button
    $trigger.on('click',function(){

        if(!$trigger.hasClass('is-active')) {
            $trigger.addClass('is-active');
            $wrapper.fadeOut(SPEED);
            $nav.fadeIn(SPEED);
            scrollAllow = false;
        } else {
            navCloseEvent();
        }
    });

    //nav close button
    $('#js-close').on('click',function(){
        navCloseEvent();
    });

    $window.on('resize',function(){
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){

        if($window.width() > SITE_MIN_WIDTH && !$wrapper.is(':visible')) {
            scrollAllow = true;
            $wrapper.fadeIn(SPEED);
        }
    //            $nav.fadeOut(SPEED);
    //        }
    //        if ($window.width < SITE_MIN_WIDTH && !$nav.is(':visible')){
    //            $nav.fadeIn(SPEED);
    //        }
        },16);
    });

})();