function showMap(lat, lon) {
    const map = new ymaps.Map ("map", {
        center: [lat, lon],
        zoom: 10
    });
}

function getWeather(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=01a11595073d662991f0e575839c9c11")
        .then(function(resp) { return resp.json() })
        .then(function(data) {
            drawWeather(data);
        })
        .catch(function() {
        });
}
function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}

function onSubmit() {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    getWeather(lat, lon);
    showMap(lat, lon);
}