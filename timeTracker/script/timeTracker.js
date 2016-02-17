;(function ( $, window, document, undefined ) {

    var $container  = $('.timeCard-container'),
        $greeting   = $('.greeting'),
        $timeInCard = $('.timeCard-timeIn').preventDefault,
        $vacaImg    = $('<img alt="taking a vacation day" data-id="vacation" class="timeCard-image" src="images/vacation.png">')
        $officeImg  = $('<img alt="working at the office" data-id="office" class="timeCard-image" src="images/building-icon.svg">'),
        $homeImg    = $('<img alt="Work from home" data-id="home" class="timeCard-image" src="images/house.png">'),
        $sickImg    = $('<img alt="out sick today" data-id="sick" class="timeCard-image" src="images/sick.png">'),
        $barecardTemp =
            $('<div class="timeCard">' +
                '<div class="calendar">' +
                '<p class="weekday">Monday</p>' +
                '<p class="date">12/14/2015</p>' +
                '</div>' +
                '<div class="divider"></div>' +
                '</div>'),

        $emptyCardTemp =
            $('<p class="todaysStatus">What is today\'s status?</p>' +
                '<form class="timeCard-chooseStatus">' +
                '<label for="office">Office</label>' +
                '<input name="work-status" type="radio" class="timeCard-checkbox" id="office" />' +
                '<label for="wfh">WFH</label>' +
                '<input name="work-status" type="radio" class="timeCard-checkbox" id="wfh" />' +
                '<label for="sick">Sick</label>' +
                '<input name="work-status" type="radio" class="timeCard-checkbox" id="sick" />' +
                '<label for="vacation">Vaca</label>' +
                '<input name="work-status" type="radio" class="timeCard-checkbox" id="vacation" />' +
                '</form>' +
                '</div>'),

        $fillinTimeTemp =
            $('<div class="timeCard-workStatus">' +
                '</div>' +
                '<form class="timeCard-chooseTimeIn">' +
                '<label for="input-timeIn">Arrival Time</label>' +
                '<input type="text" id="input-timeIn" />' +
                '</form>'),

        $timeInTemp =
            $('<div class="timeCard-workStatus">' +
                '</div>' +
                '<p class="arrival">arrive:&nbsp<span class="arrivalTime">8:10am</span></p>' +
                '<p class="total">total hrs worked:&nbsp;<span class="totalHours">2.15</span></p>' +
                '<a class="select-depart" href="">Depart</a>'),

        $timeOutTemp =
            $('<div class="timeCard-workStatus">' +
                '</div>' +
                '<form class="timeCard-chooseTimeOut">' +
                '<label for="input-timeOut">Departure Time</label>' +
                '<input type="text" class="timeCard-timeIn" id="input-timeOut" />' +
                '</form>'),

        $checkIfDoneTemp =
            $('<div class="timeCard-workStatus">' +
                '</div>' +
                '<p class="todaysStatus">Is your workday done?</p>' +
                '<form class="timeCard-chooseStatus">' +
                '<label for="checkbox-yes">Yes</label>' +
                '<input type="checkbox" class="timeCard-checkbox" id="checkbox-yes" />' +
                '<label for="checkbox-no">No</label>' +
                '<input type="checkbox" class="timeCard-checkbox" id="checkbox-no" />' +
                '</form>'),

        $completedTemp =
            $('<div class="timeCard-workStatus">' +
                '</div>' +
                '<p class="arrival">arrive:&nbsp<span class="arrivalTime">8:10am</span></p>' +
                '<p class="depart">depart:&nbsp<span class="departureTime">12:45pm</span></p>' +
                '<p class="total">total hrs worked:&nbsp;<span class="totalHours">8.35</span></p>');

    function createCard(bare, extension) {
        var $card = bare.append(extension);
        $container.append($card);
    }

    $greeting.on('click', function(e) {
        $greeting.remove();
        createCard($barecardTemp, $emptyCardTemp);
    });

    function establishStatus() {
        var $cardFixture = $('.timeCard');
        if ($cardFixture.length > 0) {
            $($emptyCardTemp).remove();
        }
        $barecardTemp.append($fillinTimeTemp);
    }

    $($container).on('click', '.timeCard-chooseStatus', function(e) {
        var workStatus = $('input[type="radio"][name="work-status"]:checked').attr('id'),
            $imageContainer;

        function statusUpdate(img, imgClass) {
            establishStatus();
            $imageContainer = $('.timeCard-workStatus');
            $imageContainer.addClass(imgClass).append(img);
        }

        if (workStatus === 'office') {
            establishStatus();
            statusUpdate($officeImg, 'office-image');
        } else if (workStatus === 'wfh') {
            establishStatus();
            statusUpdate($homeImg, 'house-image')
        } else if (workStatus === 'sick') {
            establishStatus();
            statusUpdate($sickImg, 'sick-image');
        } else { //vacation
            establishStatus();
            statusUpdate($vacaImg, 'vacation-image');
        }

        e.stopPropagation();
    });

    var arrivalTime = $('input[type="text"][id="input-timeIn"]').val();




})( jQuery, window, document );


















