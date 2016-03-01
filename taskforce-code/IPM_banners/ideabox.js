;$(function() {

    var ideabox = function($elem, $options) {

        // Create Ideabox
        var $ideabox = $('<div class="Ideabox js-ideabox"><img class="Ideabox-image" src="images/lightbulb.svg" /><a href="javascript:void(0)" class="Icon--close Ideabox-close" aria-role="button" aria-label="Dismiss this message" data-qe-id="Msg-ID-close"></a><h2 class="Ideabox-header">Share your coupon on social media</h2><p class="Ideabox-message">Extend the reach of your coupon by sharing it across all of your social networks.</p><a class="Ideabox-CTA" href="javascript:void(0)">Schedule Posts</a></div>'),
            $body = $('.IPM'),
            $timeout ;

        function init($time) {
            // Wait until after the DOM loads before displaying Ideabox(es)
            $timeout = window.setTimeout(show, $time);

            // Append Ideabox to body element
            function show() {
                $body.append($ideabox);
                $ideabox.toggleClass('Ideabox-fadeIn-animation');
            }
        }

        // Initialize component after allotted $time
        init(1200);

        // Close Ideabox when clicking on the close button or the CTA link
        function close($container, $box) {
            $container.on('click', '.Ideabox-close, .Ideabox-CTA', function (event) {
                // Eliminate event bubbling
                event.stopPropagation();
                // Remove opening animation class and add closing animation class
                $ideabox.toggleClass('Ideabox-fadeIn-animation Ideabox-fadeOut-animation');
                // Wait for animation to end then remove from DOM
                $ideabox.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(event) {
                   $box.remove();
                });
            });
        }

        // Initialize click events
        close($body, $ideabox);
    }

    ideabox('.js-ideabox');
});
