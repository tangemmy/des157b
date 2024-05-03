(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([34.413637, 135.300611], 11);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([34.399407, 135.28757]).addTo(map);
    var circle = L.circle([34.510406,135.441343], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    var polygon = L.polygon([
        [34.426452, 135.244961],
        [34.425461, 135.213203],
        [34.451228, 135.239639]
    ]).addTo(map);
    marker.bindPopup("Welcome to the Japan Foundation Kansai Center.<br> I went to school here.").openPopup();
    circle.bindPopup("This is Kitashinoda-Eki. <br> This is where my Homestay was.");
    polygon.bindPopup("KIX airport");
    var popup = L.popup()
        .setLatLng([34.413637, 135.300611])
        .setContent("This is Rinku Town")
        .openOn(map);

        function onMapClick(e) {
            alert("You clicked the map at " + e.latlng);
        }
        
        map.on('click', onMapClick);
}());