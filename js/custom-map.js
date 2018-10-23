function initialize() {
    var mapOptions = {
        zoom: 16,
        scrollwheel: false,
        //mapTypeId: google.maps.MapTypeId.SATELLITE,
        center: new google.maps.LatLng(-25.363, 131.044)
    };
    var myLatlng = new google.maps.LatLng(-25.363, 131.044);
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    //marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        icon: 'images/mapmarker.png',
        map: map,
        title: 'TPC Jasana Polana'
    });
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
        'callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript;