var $notifcenter =      $('#HelpCenter'),
    $iconTrigger =      $('#HelpCenter-trigger'),
    $xTrigger =         $('#HelpCenter-closeTrigger'),
    $blockTrigger=      $('.notificationBlock-close'),
    blockSelector =     '.HelpCenter-notificationBlock',
    show =              'is-open',
    dismissAnimation =  'animations',
    notifAlert =        'data-notifications',
    timeout ;

$(document).ready(function() {

    "use strict"; // read about javascript strict mode and use strict arg!!

    // Open/close the NCenter with the bell icon
    $iconTrigger.on( 'click', function( e ) {
        // Prevent <a> default behavior rather than using javascript:void(0); inline
        e.preventDefault();
        $notifcenter.toggleClass( show );

        // Remove notification alerts from bell icon
        if ( $notifcenter.hasClass( show )) {
            // Change the data-badge-count value to false
            $iconTrigger.attr(notifAlert, 'false');
        }
    });

    // Close NCenter with 'X' button
    $xTrigger.on( 'click', function() {
        $notifcenter.removeClass( show );
    });

    // Dismiss individual block message
    $blockTrigger.on( 'click', function( e ) {
        var $trigger = $(e.currentTarget),
            $block = $trigger.closest( blockSelector );

        // Wait for css transition to end before removing component from DOM
        $block.addClass( dismissAnimation ).on( 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
            function removeBlock() {
                $block.remove();
            }
            timeout = window.setTimeout(removeBlock, 100);
        });
    });
});
