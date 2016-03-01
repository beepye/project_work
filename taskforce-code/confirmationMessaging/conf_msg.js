;$(function() {

    var $unit = $('.CampaignUnit'),
        $body = $('body'),
        $trigger = $('.Msg-close'),
        $confMsg = $('<div class="Msg Msg--confirmation msgConf-animation">' +
            '<p class="Msg--confirmation-text" data-qe-id="Msg--confirmation-text">Email campaign has been deleted</p>' +
            '<a href="javascript:void(0);" class="Msg--confirmation-undo" data-qe-id="Msg--confirmation-text">Undo</a>' +
            '<a href="#" class="Icon--close Msg-close Msg-close--confirmation" aria-role="button" aria-label="Dismiss this message" data-qe-id="Msg--confirmation-close"></a>' +
            '</div>');

    // Close campaignUnit and trigger Confirmation Message
    function closeUnit($container, $object) {
        $container.on('click', 'li[data-value="Delete"]', function(event) {
            // Is stopping the prop here necessary?
            event.stopPropagation();
            // Find closest .CampaignUnit and remove from DOM
            $(this).closest($object).remove();
            // Trigger Confirmation Message
            showMessage();
            closeConfMsg($confMsg, $confMsg);
        });
    }

    // Close Confirmation Message
    function closeConfMsg($container, $object) {
        $container.on('click', function(event) {
            // Is stopping the prop here necessary?
            event.stopPropagation();
            $object.remove();
        });
    }

    // After removing campaignUnit wait 1sec then append/display Confirmation Message
    function showMessage() {
        // Eventually need to add functionality that adds additional confMsg's and
        // timers that remove confMsg's after displaying for x amount of time
        $body.append($confMsg);
        $confMsg.toggleClass('.msgConf-animation');
    }

    // Close campaignUnit and trigger Confirmation Message
    function confirmationMessage() {
        closeUnit($body, $unit);
    }

    // Initialize the event
    confirmationMessage();

});

