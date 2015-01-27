(function () {

    'use strict';

    var SPEED = 350;

    var $trigger = $('#js-trigger'),
        $wrapper = $('#js-wrapper'),
        $nav = $('#js-nav');

    var scrollAllow = true;

    // ローディング、curtain表示中はスクロールさせない
    function noScroll() {
        $(window).on('mousewheel touchmove', function (e) {
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
            $trigger.removeClass('is-active');
            $wrapper.fadeIn(SPEED);
            $nav.fadeOut(SPEED);
            scrollAllow = true;
        }
    });

    //nav close button
    $('#js-close').on('click',function(){
        $trigger.removeClass('is-active');
        $wrapper.fadeIn(SPEED);
        $nav.fadeOut(SPEED);
        scrollAllow = false;
    });

})();