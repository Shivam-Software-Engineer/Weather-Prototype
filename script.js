const apiKey = 'b129bea20d4137b9574fd93d917dbb78'; // Replace with your actual API key

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            document.getElementById('weather-info').innerHTML = `<p>City not found</p>`;
        } else {
            displayWeather(data);
        }
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p>Failed to fetch weather data</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h3>Weather in ${data.name}, ${data.sys.country}</h3>
        <p class="weather-detail">Temperature: ${data.main.temp}°C</p>
        <p class="weather-detail">Weather: ${data.weather[0].description}</p>
        <p class="weather-detail">Humidity: ${data.main.humidity}%</p>
        <p class="weather-detail">Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
