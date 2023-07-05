import { getCoordinates, getCurrentWeather } from './index.js';

describe('getCoordinates', () => {
    it('should return coordinates for a given address', async () => {
        const openRouteApiKey = 'your_api_key';
        const address = 'Berlin, Germany';
        const expectedCoordinates = {
            lon: 13.404954,
            lat: 52.520008,
        };

        const fetchMock = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        features: [
                            {
                                geometry: {
                                    coordinates: [expectedCoordinates.lon, expectedCoordinates.lat],
                                },
                            },
                        ],
                    }),
            })
        );

        global.fetch = fetchMock;

        const coordinates = await getCoordinates(openRouteApiKey, address);

        expect(fetchMock).toHaveBeenCalledWith(
            `https://api.openrouteservice.org/geocode/search?api_key=${openRouteApiKey}&text=${address}`
        );
        expect(coordinates).toEqual(expectedCoordinates);

        delete global.fetch;
    });
});

describe('getCurrentWeather', () => {
    it('should return current weather data for given coordinates', async () => {
        const openWeatherApiKey = 'your_api_key';
        const coordinates = {
            lon: 13.404954,
            lat: 52.520008,
        };

        const expectedWeatherData = {
            weather: [{ main: 'Clear' }],
            main: {
                temp: 300,
                humidity: 50,
                pressure: 1012,
            },
        };

        const fetchMock = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(expectedWeatherData),
            })
        );

        global.fetch = fetchMock;

        const currentWeather = await getCurrentWeather(coordinates, openWeatherApiKey);

        expect(fetchMock).toHaveBeenCalledWith(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${openWeatherApiKey}`
        );
        expect(currentWeather).toEqual(expectedWeatherData);

        delete global.fetch;
    });
});
