$(document).ready(function(){
    $.getJSON('../json/predefinedRoutes.json', function(json) {
        if (json.routes.length > 0){
            $('#routes').empty();
            $.each(json.routes, function (){
                let info = '<a href="routePage.html" class="card">' +
                    '<article>' +
                        '<p>' + this['routeName'] + '</p>'+
                        '<img class="outstanding-routes-img" src="' + this['thumbnailPath'] + '">' +
                        '<div class="route-info">' +
                            '<p>' + this['numberOfPeople'] + '<img class="user-icon" src="../media/user-icon.png">' +'</p>'
                             + '<p>' + this['price'] + '€' + '</p>' +
                        '</div>' +
                    '</article>' +
                '</a>';

                $('#routes').append(info);
            })
        }
    })
});


