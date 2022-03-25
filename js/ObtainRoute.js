$(document).ready(function(){

    $.getJSON('../json/predefinedRoutes.json', function(json) {
        $('#route-name').empty()
        $('.route-settings-container').empty()
        let id = getUrlParameter();
        let config;
        let name;
        $.each(json.routes, function () {
            if(this['routeId'] == id) {
                name = ' <div>\n' +
                    '            <h1>' + this['routeName'] + '</h1>\n' +
                    '        </div>' ;
                config =
                    '<div class="input_overlay" id="people-selector-container">' +
                            '<p id="number-of-people">' + this['numberOfPeople'] + '</p><img class="user-icon" src="../media/user-icon.png"/>' +
                        '<div id="arrows-selector">' +
                            '<button class="route-page-arrow"><img src="../media/pagination/ios-arrow-left.svg" id="arrow-number-people-image-up"/></button>' +
                            '<button class="route-page-arrow"><img src="../media/pagination/ios-arrow-left.svg" id="arrow-number-people-image-down"/></button>' +
                        '</div>' +
                    '</div>' +
                    '<div class="input_overlay datetime-selector-container">' +
                    '<img class="user-icon" src="../media/calendar-icon.png"><p>' + this['dateAvailability'][0] + '</p>' +
                    '</div>' +
                    '<div class="input_overlay datetime-selector-container ">' +
                    '<img class="user-icon" src="../media/clock-icon.png"><p>' + this['startTime'] + '</p>';
            }
            if(config == ''){
                var name = ' <div>\n' +
                    '            <h1>Route Name</h1>\n' +
                    '        </div>' ;
                var config =

                    '               <div class="input_overlay" id="people-selector-container">\n' +
                    '                    <p>4</p><img class="user-icon" src="../media/user-icon.png"/>\n' +
                    '                    <div id="arrows-selector">\n' +
                    '                        <button class="route-page-arrow"><img src="../media/pagination/ios-arrow-left.svg" id="arrow-number-people-image-up"/></button>\n' +
                    '                        <button class="route-page-arrow"><img src="../media/pagination/ios-arrow-left.svg" id="arrow-number-people-image-down"/></button>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '\n' +
                    '                <div class="input_overlay datetime-selector-container">\n' +
                    '                    <img class="user-icon" src="../media/calendar-icon.png"><p>10/10/2022</p>\n' +
                    '                </div>\n' +
                    '                <div class="input_overlay datetime-selector-container ">\n' +
                    '                    <img class="user-icon" src="../media/clock-icon.png"><p>09:00</p>\n' +
                    '                </div>\n';


            }
            $('#route-name').append(name);
            $('.route-settings-container').append(config);
        })
    });
    function getUrlParameter() {
        var query = window.location.search.substring(1);
        var params = query.split('=')[1];
        return params;
    };
});

