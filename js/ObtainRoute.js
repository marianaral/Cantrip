$(document).ready(function(){

    $.getJSON('../json/predefinedRoutes.json', function(json) {
        $('#route-name').empty()
        $('.route-settings-container').empty()
        $('#timetable').empty()
        let id = getUrlParameter();
        let config = '';
        let name;
        let timetableconfig = "";
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
                let hour = this['startTime'];
                let hourInt = parseInt(hour.split(':')[0]);
                let activities = this['activities'];
                let hourEndInt;
                let hourEnd;
                $.getJSON('../json/routeActivities.json', function(jsonactivities){
                    for(let activity of activities){
                        $.each(jsonactivities.activities, function(){

                            if(parseInt(this['activityId']) == parseInt(activity)){
                                for (let hourActivity of this['timeAvailability']){
                                    if(parseInt(hourActivity.split(':')[0]) >= hourInt){
                                        hourInt = parseInt(hourActivity.split(':')[0]);
                                        if (hourInt < 10){
                                            hour = "0" + hourInt + ":00";
                                        } else{
                                            hour = hourInt + ":00";
                                        }


                                        hourEndInt = hourInt + this['timeDuration'];
                                        hourEnd;
                                        if(hourEndInt < 10){
                                            hourEnd = "0" + hourEndInt + ":00";
                                        } else{
                                            hourEnd = hourEndInt + ":00";
                                        }
                                        timetableconfig +=
                                            '                <div class="exact-hour-container">\n' +
                                            '                    <p class="exact-hour">' + hour + '</p>\n' +
                                            '                </div>\n' +
                                            '                <div class="activity-container">\n' +
                                            '                    <p class="activity-duration"> ' + hour + ' - ' + hourEnd + '</p><p>' + this['activityName'] + '</p><button class="delete-btn">X</button>\n' +
                                            '                </div>\n';

                                        hourInt = hourEndInt;
                                        break;
                                    }
                                }

                            }


                        })
                    }
                    $('#timetable').append(timetableconfig);


                })


            }

        })
        console.log(timetableconfig);
        if(config == ''){
            name = ' <div>\n' +
                '            <h1>Route Name</h1>\n' +
                '        </div>' ;
            config =

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
            timetableconfig =
                '                <div class="exact-hour-container">\n' +
                '                    <p class="exact-hour">09:00</p>\n' +
                '                </div>\n' +
                '                <div class="activity-container">\n' +
                '                    <p class="activity-duration">09:00-09:45</p><p>Activity 1</p><button class="delete-btn">X</button>\n' +
                '                </div>\n' +
                '                <div class="exact-hour-container">\n' +
                '                    <p class="exact-hour">10:00</p>\n' +
                '                </div>\n' +
                '                <div class="activity-container">\n' +
                '                    <p class="activity-duration">10:00-10:30</p><p>Activity 2</p><button class="delete-btn">X</button>\n' +
                '                </div>';
            $('#timetable').append(timetableconfig);

        }
        $('#route-name').append(name);
        $('.route-settings-container').append(config);
    });
    function getUrlParameter() {
        var query = window.location.search.substring(1);
        var params = query.split('=')[1];
        return params;
    };
});

