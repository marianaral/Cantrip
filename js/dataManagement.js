$(document).ready(function(){
    $.getJSON('../json/predefinedRoutes.json', function(json) {
        if (json.routes.length > 0){
            $('#routes').empty();
            $.each(json.routes, function (){
                let info = '<div href="routePage.html" class="card" id="'+ this['routeId'] + '">' +
                    '<article>' +
                        '<p>' + this['routeName'] + '</p>'+
                        '<img class="outstanding-routes-img" src="' + this['thumbnailPath'] + '">' +
                        '<div class="route-info">' +
                            '<p>' + this['numberOfPeople'] + '<img class="user-icon" src="../media/user-icon.png">' +'</p>'
                             + '<p>' + this['price'] + '€' + '</p>' +
                        '</div>' +
                    '</article>' +
                '</div>';

                $('#routes').append(info);
            })
        }
        $('.card').click(function (){
            window.location = 'routePage.html?id=' + $(this).attr("id");
        });
    });
});


