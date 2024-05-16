import fetch from "node-fetch";
const apiKey = "4ceef55a3c101f605dfe01b5fe69db5d";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=${apiKey}`;
async function getWeatherData() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        console.log(data);
        if (data.cod === 200) {
            const { temp } = data.main;
            const { humidity } = data.main;
            console.log(`Temperature in Karachi on is: ${temp}°C`);
            console.log(`Humidity in Karachi on is: ${humidity}%`);
        } else {
            console.error("Error:", data.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

getWeatherData();
