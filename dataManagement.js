const routeActivities = require('./routeActivities.json');


function getRouteActivities() {
    for (let i = 0; i < routeActivities.length; i++) {
        console.log(`id: ${routeActivities[i].activityId}, name:${routeActivities[i].activityName}`)
    }
}
