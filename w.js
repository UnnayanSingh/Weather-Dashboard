const apiKey = "0529b9f6385cddbeabcc84470cd90d4e"; // Replace with your actual OpenWeather API key

document.addEventListener("DOMContentLoaded", () => {
    const getWeatherButton = document.getElementById("getWeather");
    getWeatherButton.addEventListener("click", () => {
        const city = document.getElementById("cityInput").value;
        if (city) {
            fetchCurrentWeather(city);
            fetchForecast(city);
        } else {
            alert("Please enter a city name");
        }
    });
});

function fetchCurrentWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => alert(error.message));
}

function fetchForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Forecast not available");
            }
            return response.json();
        })
        .then(data => displayForecast(data))
        .catch(error => alert(error.message));
}

function displayWeather(data) {
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("weatherDescription").textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("windSpeed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

function displayForecast(data) {
    const todayForecastContainer = document.getElementById("todayForecast");
    const forecastContainer = document.getElementById("forecastContainer");
    
    todayForecastContainer.innerHTML = "";  // Clear previous data
    forecastContainer.innerHTML = "";       // Clear previous data

    const currentDate = new Date().toISOString().split("T")[0]; // Today's date in YYYY-MM-DD format
    
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    // Display today's forecast separately
    const todayForecast = data.list.find(item => item.dt_txt.startsWith(currentDate));
    if (todayForecast) {
        const temp = todayForecast.main.temp;
        const weather = todayForecast.weather[0].description;

        todayForecastContainer.innerHTML = `
            <div class="forecastCard">
                <h3>Today</h3>
                <p>Temp: ${temp}°C</p>
                <p>${weather}</p>
            </div>
        `;
    }

    // Display the remaining 5-day forecast
    dailyForecasts.forEach(day => {
        const date = new Date(day.dt_txt);
        const dayName = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
        const temp = day.main.temp;
        const weather = day.weather[0].description;

        const forecastCard = document.createElement("div");
        forecastCard.classList.add("forecastCard");

        forecastCard.innerHTML = `
            <h3>${dayName}</h3>
            <p>Temp: ${temp}°C</p>
            <p>${weather}</p>
        `;

        forecastContainer.appendChild(forecastCard);
    });
}
