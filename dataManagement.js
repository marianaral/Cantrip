$(document).ready(function(){
    $.getJSON('predefinedRoutes.json', function(json) {
        for(var i = 0; i < json.routeName; i++){
            console.log(i);
        }
    })
    /*function getRouteActivities() {
        for (let i = 0; i < routeActivities.length; i++) {
            console.log(`id: ${routeActivities[i].activityId}, name:${routeActivities[i].activityName}`)
        }
    }*/
});


