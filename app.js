const api_key = '6970f5b93603722d0734780ee855c1c0';
const api_url = `https://api.openweathermap.org/data/2.5/weather?&appid=${api_key}&units=metric&q=`

async function checkWeather(city) {
    const response = await fetch(api_url + city);
    var data = await response.json()

    if (data.cod === "404") {
        document.querySelector(".error").style.display = "block";
    }

    else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

        const weatherIcon = document.getElementById("images");

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png"
                break;

            case "Clear":
                weatherIcon.src = "images/clear.png"
                break;

            case "Rain":
                weatherIcon.src = "images/rain.png"
                break;

            case "Drizzle":
                weatherIcon.src = "images/drizzle.png"
                break;

            case "Mist":
                weatherIcon.src = "images/mist.png"
                break;
            default:
                break;
        }

        document.querySelector(".weather").style.display = "block";
    }
}

function onClickButton() {
    checkWeather(document.getElementById('inputCity').value)
}



