# 🌤 Weather Dashboard

An interactive and responsive **Weather Dashboard** that provides **real-time weather updates** and a **5-day forecast** using the **OpenWeatherMap API**.  
Includes **dynamic backgrounds, weather icons, dark/light mode, geolocation support, and local storage** for last searched city.  

---

## 🚀 Features
- 🌍 **Geolocation Support** → Detects your location automatically on first load.  
- 🏙 **City Search** → Enter any city to get current weather and forecast.  
- 🌡 **Current Weather Info** → Temperature, weather description, humidity, wind speed.  
- 📅 **5-Day Forecast** → Displays upcoming weather with daily summaries.  
- 🎨 **Dynamic Backgrounds** → Background changes based on weather (sunny, cloudy, rainy).  
- 🌙 **Dark/Light Mode Toggle** → Switch between themes with one click.  
- ⏳ **Loading Spinner** → Shows when fetching data from API.  
- 💾 **Local Storage** → Saves last searched city and loads it automatically.  

---

## 🔗 Live Demo
👉 [Click Here to View](https://unnayansingh.github.io/Weather-Dashboard/)  
*(Link will work once you deploy with GitHub Pages)*  

---

## ⚠️ API Key Notice
This project requires an API key from [OpenWeatherMap](https://openweathermap.org/api).  
By default, a **demo key** is included in `w.js`.  
👉 You must replace it with your own key:

```js
const apiKey = "YOUR_API_KEY";
```
---

## 🔒 API Security (Important Note)
- The **OpenWeatherMap API key** is stored securely in a local **`.env` file** inside the `backend/` folder.  
- `.env` is listed in **`.gitignore`**, so it is **never uploaded** to GitHub.  
- The **frontend (`public/`)** calls the backend (`server.js`) which fetches weather data using the hidden key.  
- This ensures the API key is **not exposed in the GitHub repository** or in client-side code.  

👉 To run this project locally:
1. Go to the `backend/` folder and create a `.env` file with your key:
   ```bash
   API_KEY=your_openweathermap_api_key

⚠️ Never expose personal/paid API keys in public repositories. Use a `.env` file or GitHub Secrets if deploying to production.  

---

## ⚙️ Tech Stack
- **HTML5**  
- **CSS3** (responsive design + dark mode)  
- **JavaScript (ES6)** (API, DOM, local storage)  
- **OpenWeatherMap API**  

---

## 📂 Project Structure
```
WeatherDashboard/
│
├── index.html      # Main HTML page
├── w.css           # Stylesheet
├── w.js            # JavaScript logic
├── /assets         # Icons/screenshots
└── README.md       # Documentation
```

---

## 🔑 Setup Instructions
1. Clone this repository:
   ```bash
   git clone https://github.com/UnnayanSingh/Weather-Dashboard.git
   cd Weather-Dashboard
   ```
2. Open `w.js` and replace the API key:
   ```javascript
   const apiKey = "YOUR_API_KEY";
   ```
   Get a free API key from [OpenWeatherMap](https://openweathermap.org/api).  
3. Open `index.html` in your browser.  

---

## 📌 Future Enhancements
- 📍 Add map integration with **Leaflet.js** or **Google Maps API**  
- 📊 Add charts for temperature trends with **Chart.js**  
- 🔔 Add weather alerts/notifications  
- 📱 Make a **mobile PWA (Progressive Web App)** version  

---

## 🧑‍💻 Author
**Unnayan Singh**  
B.Tech CSE (Cybersecurity Specialization)  
💼 GitHub: [UnnayanSingh](https://github.com/UnnayanSingh)  
📧 Email: unnayansingh2005@gmail.com  

---

✨ This project showcases **API integration, responsive UI, and modern frontend features**
