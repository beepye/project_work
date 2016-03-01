;$(function() {

    var // Elements
        $displayTrigger = $('.js-Metrics-trigger'),
        $secondaryUnits = $('.js-Metrics-dataHidden'),
        $more = $displayTrigger[0],
        $less = $displayTrigger[1],

        // Classes
        hiddenUnitClass = 'js-Metrics-dataHidden',
        fadeInAnimationClass = 'js-Metrics-animationIn',
        ignoreThis = 'js-ignore',
        staggerInTrigger = 'js-Metrics-staggerInTrigger',
        triggerHiddenClass = 'js-Metrics-hideTrigger';

    function SetupEvents() {

        $displayTrigger.on('click', function(e) {

            if ($(e.target).hasClass(staggerInTrigger)) {
                metricsStagger();
            }
            // Ignoring the 'More' link with the js-trigger class...quick work-around
            else if ($(e.target).hasClass(ignoreThis)) {
                return false;
            }
            else {
                metricsFade();
            }
        });
    }

    /* ---------------------------------------------- *\
       Fade in animation set to all elements
    \* ---------------------------------------------- */

    function metricsFade() {
        // Doesn't pick up the animation class if run in the same toggleClass block so running it 2x
        $secondaryUnits.toggleClass(hiddenUnitClass).toggleClass(fadeInAnimationClass);
        $displayTrigger.toggleClass(triggerHiddenClass);
        $($less).toggleClass(fadeInAnimationClass);
    }

    /* ---------------------------------------------- *\
       Staggered animation for each individual databox
    \* ---------------------------------------------- */

    function metricsStagger() {

        if (!$($secondaryUnits).hasClass(hiddenUnitClass)) {
            // If no units have the js-Metrics-dataHidden class then hide all of them
            $secondaryUnits.toggleClass(hiddenUnitClass).toggleClass(fadeInAnimationClass);
        }
        else {
            // Hide 'More' trigger immediately
            $($more).toggleClass(triggerHiddenClass);
            // Cycle through each individual element in the variable array and set the
            // animation for each while adding a delay that increases exponentially
            // to give the stagger effect
            $secondaryUnits.each(function(index, elem) {
                // Get the second to last databox to trigger the animation
                if (index === $secondaryUnits.length - 1) {
                    window.setTimeout(function() {
                        $($less).toggleClass(triggerHiddenClass).toggleClass(fadeInAnimationClass);
                    }, 290);
                }
                // Add event listener to detect css animations end point
                // Set a delay before each element
                window.setTimeout(function() {
                    fadeIn(elem);
                }, index * 75);
            });
        }
    }

    function fadeIn(elem) {
        $(elem).toggleClass(hiddenUnitClass).toggleClass(fadeInAnimationClass);
    }

    SetupEvents();

});