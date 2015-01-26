(function () {

    'use strict';

    var SPEED = 350;

    var $trigger = $('#js-trigger'),
        $wrapper = $('#js-wrapper'),
        $nav = $('#js-nav');

    //header nav button
    $trigger.on('click',function(){

        if(!$trigger.hasClass('is-active')) {
            $trigger.addClass('is-active');
            $wrapper.fadeOut(SPEED);
            $nav.fadeIn(SPEED);
        } else {
            $trigger.removeClass('is-active');
            $wrapper.fadeIn(SPEED);
            $nav.fadeOut(SPEED);
        }
    });

    //nav close button
    $('#js-close').on('click',function(){
        $trigger.removeClass('is-active');
        $wrapper.fadeIn(SPEED);
        $nav.fadeOut(SPEED);
    });

})();