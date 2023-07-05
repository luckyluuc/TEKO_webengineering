import {config} from "./config.js";
import {cloud, rain, sun} from "./weatherIcons.js";

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
                <li>Temperatur: ${Math.round(currentWeather.main.temp - 273)}°C</li>
                <li>Luftfeuchtigkeit: ${currentWeather.main.humidity}%</li>
                <li>Luftdruck: ${currentWeather.main.pressure} hPa</li>
            </ul>
            `
            console.log(currentWeather.weather[0].main);

            document.getElementById("weatherText").innerHTML = `
                <h2>Das Wetter in ${address} ist</h2>
            `;
            document.getElementById("weather").innerHTML = list;

            if (currentWeather.weather[0].main === "Clear") {
                document.getElementById("sun").innerHTML = sun;
                document.getElementById("cloud").innerHTML = '';
                document.getElementById("rain").innerHTML = '';
            }
            if (currentWeather.weather[0].main === "Clouds") {
                document.getElementById("sun").innerHTML = '';
                document.getElementById("cloud").innerHTML = cloud;
                document.getElementById("rain").innerHTML = '';
            }
            if (currentWeather.weather[0].main === "Rain") {
                document.getElementById("sun").innerHTML = '';
                document.getElementById("cloud").innerHTML = '';
                document.getElementById("rain").innerHTML = rain;
            }
        });
});

export function getCoordinates(openRouteApiKey, address) {
    // https://openrouteservice.org/dev/#/api-docs/geocode

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

export function getCurrentWeather(coordinates, openWeatherApiKey) {
    // https://openweathermap.org/current

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${openWeatherApiKey}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
}