const showweather = document.querySelector('#weather');
const imgweather = document.querySelector('#imgweather');
const cardweather = document.querySelector('#currentweather');
const cardforecast = document.querySelector('#foreweather');
const lat = '32.48';
const lon = '-116.92';
const apikey = '7c4c68d910808dd1373bedd8bbaa86b7';
const foreURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
//Get date to display weekday on forecast section
const settoday = new Date();
const settomorrow = new Date();
const settwoday = new Date();
settomorrow.setDate(settoday.getDate() + 1);
settwoday.setDate(settoday.getDate() + 2);
const today = settoday.toLocaleDateString('en-US', { weekday: 'long' });
const tomorrow = settomorrow.toLocaleDateString('en-US', { weekday: 'long' });
const twoday = settwoday.toLocaleDateString('en-US', { weekday: 'long' });


async function fetchApi(url, display){
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return display(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

const displayWeather = function getWeather(data) {
    const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    const showcurrent = document.createElement('span');
    const showdesc = document.createElement('span');
    const showhigh = document.createElement('span');
    const showlow = document.createElement('span');
    const showhumidity = document.createElement('span');
    const showsunrise = document.createElement('span');
    const showsunset = document.createElement('span');

    imgweather.setAttribute('src', iconsrc);
    imgweather.setAttribute('alt', desc);
    imgweather.setAttribute('title', desc);
    showcurrent.textContent = data.main.temp + '°';
    showdesc.textContent = desc;
    showhigh.innerHTML = `<strong>High:</strong> ${data.main.temp_max}°`;
    showlow.innerHTML = `<strong>High:</strong> ${data.main.temp_min}°`;
    showhumidity.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}°`;


    cardweather.appendChild(showcurrent);
    cardweather.appendChild(showdesc);
    cardweather.appendChild(showhigh);
    cardweather.appendChild(showlow);

}

const dispforecast = function getForecast(data) {
    const fore1day = document.createElement('span');
    const fore2day = document.createElement('span');
    const fore3day = document.createElement('span');

    todaytemp = data.list[5].main.temp;
    day2temp = data.list[13].main.temp;
    day3temp = data.list[21].main.temp;

    fore1day.innerHTML = `${today}: ${todaytemp}°`;
    fore2day.innerHTML = `${tomorrow}: ${day2temp}°`;
    fore3day.innerHTML = `${twoday}: ${day3temp}°`;

    cardforecast.appendChild(fore1day);
    cardforecast.appendChild(fore2day);
    cardforecast.appendChild(fore3day);
}

fetchApi(currentURL, displayWeather);
fetchApi(foreURL, dispforecast);