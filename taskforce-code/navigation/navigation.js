;$(function() {

var $mainMenu   = $('.MainMenu-list'),
    $dropdown   = $('.TF-Nav--dropdown'),
    $listItems  = $mainMenu.find('li');

    function availabeWidth() {
        var accountWidth    = $('.Icons-list').outerWidth(),
            logoWidth       = $('.CTCT-logo').outerWidth(),
            dropdownWidth   = $dropdown.outerWidth(),
            navWidth        = $('#TF-Navigation').outerWidth(),
            setWidth        = accountWidth + logoWidth + dropdownWidth,
            alottedWidth    = navWidth - setWidth;

        return alottedWidth;
    }

    function addItemToArray() {
        var width = 0, itemVisibilityList = {}, alottedWidth = availabeWidth() - 24;

        $listItems.each(function (i, listItem) {
            var itemWidth = $(listItem).outerWidth(), itemListData = $(listItem).data('list');

            width += itemWidth;

            itemVisibilityList[itemListData] = (width < alottedWidth);
        });

        return itemVisibilityList;
    }

    function populateNav() {
        var list = addItemToArray(), $allItems = $('.TF-Nav--desktop').find('li'), showDropdown;

        $allItems.removeClass('hideItem');
        $dropdown.addClass('hideItem');

        for (key in list) {
            $(list[key] ? $dropdown : $mainMenu).find('[data-list='+key+']').addClass('hideItem');

            if (list[key] === false) { showDropdown = true; }
        }

        if (showDropdown) { $dropdown.removeClass('hideItem'); }
    }

    $(window).on('resize.TFNav', function() {
        populateNav();
    }).triggerHandler('resize.TFNav');
});