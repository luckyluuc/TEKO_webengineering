import {config} from "./config.js";

const openRouteApiKey = config.openRouteApiKey;
const openWeatherApiKey = config.openWeatherApiKey;

const addressInputButton = document.getElementById("addressForm");
addressInputButton.addEventListener("submit", function(event) {
    event.preventDefault();

    let address = document.getElementById("addressInput").value;
    console.log(address);

    let coordinates = getCoordinates(openRouteApiKey, address);
    console.log(coordinates);

    let currentWeather = getCurrentWeather(coordinates, openWeatherApiKey);
    console.log(currentWeather);

    document.getElementById("address").innerHTML = address;

});

function getCoordinates(openRouteApiKey, address) {
    // https://openrouteservice.org/dev/#/api-docs/geocode

    const url = `https://api.openrouteservice.org/geocode/search?api_key=${openRouteApiKey}&text=${address}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const result = data.features[0];
            const latitude = result.geometry.coordinates[1];
            const longitude = result.geometry.coordinates[0];

            const coordinates = Object.freeze({
                lon: longitude,
                lat: latitude
            })
            console.log(coordinates);
            return coordinates;
        });
}

function getCurrentWeather(coordinates, openWeatherApiKey) {

    // https://openweathermap.org/current
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${openWeatherApiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
}