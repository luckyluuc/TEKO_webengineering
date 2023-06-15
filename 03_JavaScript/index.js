import {config} from "./config";

document.addEventListener()

const openRouteApiKey = config.openRouteApiKey;
const openWeatherApiKey = config.openWeatherApiKey;

function getCoordinates(openRouteApiKey, address) {
    // https://openrouteservice.org/dev/#/api-docs/geocode

    const url = `https://api.openrouteservice.org/geocode/search?api_key=${openRouteApiKey}&text=${address}`;

    fetch(url)
        .then((response) => {
            console.log(response.json());
            return response.json();
        })
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
        })
        .catch((error) => {
            console.log(error);
        })
}

function getCurrentWeather(openRouteApiKey, openWeatherApiKey, address) {
    const coordinates = getCoordinates(openRouteApiKey, address);

    // https://openweathermap.org/current
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${openWeatherApiKey}`;

    fetch(url)
        .then((response) => {
            console.log(response.json());
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.log(error);
        })
}