async function lecture() {
    let requestOptions = { method: 'GET' };
    let reponse = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.686784&lon=7.228607&appid=e233ba9cbcc9c0cfe4a3fe4c6a062c97&units=metric&lang=fr`, requestOptions);
    let valeur_JSON = await reponse.json();
    return valeur_JSON;
}
async function getNiceWeather() {
    const weatherData = await lecture();
    document.getElementById('nice-weather').innerText = `Température à Nice: ${weatherData.main.temp}°C, Condition: ${weatherData.weather[0].description}`;
}

getNiceWeather();