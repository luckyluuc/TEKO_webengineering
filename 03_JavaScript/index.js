import {config} from "./config.js";

const openRouteApiKey = config.openRouteApiKey;
const openWeatherApiKey = config.openWeatherApiKey;

const addressInputButton = document.getElementById("addressForm");
addressInputButton.addEventListener("submit", function(event) {
    event.preventDefault();

    let address = document.getElementById("addressInput").value;
    console.log(address);

    getCoordinates(openRouteApiKey, address)
        .then(coordinates => {
            console.log(coordinates);
            return getCurrentWeather(coordinates, openWeatherApiKey);
        })
        .then(currentWeather => {
            console.log(currentWeather);
            const list = `
            <ul>
                <li>${Math.round(currentWeather.main.temp - 273)}°C</li>
                <li>${currentWeather.main.humidity}%</li>
                <li>${currentWeather.main.pressure} hPa</li>
            </ul>
            `
            document.getElementById("address").innerHTML = address;
            document.getElementById("weather").innerHTML = list;
        });
});

function getCoordinates(openRouteApiKey, address) {
    const url = `https://api.openrouteservice.org/geocode/search?api_key=${openRouteApiKey}&text=${address}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const result = data.features[0];
            const latitude = result.geometry.coordinates[1];
            const longitude = result.geometry.coordinates[0];

            const coordinates = Object.freeze({
                lon: longitude,
                lat: latitude
            });
            console.log(coordinates);
            return coordinates;
        });
}

function getCurrentWeather(coordinates, openWeatherApiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${openWeatherApiKey}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
}
