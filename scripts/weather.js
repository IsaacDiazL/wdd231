const currenttemp = document.querySelector('#current-temp');
const weathericon = document.querySelector('#weather-icon');
const texticon = document.querySelector('figcaption');

const apikey = '7c4c68d910808dd1373bedd8bbaa86b7';
const lat = 49.75;
const lon = 6.64;
const MyURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

async function apiFetch() {
  try {
    const response = await fetch(MyURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
        // displayResults(data); // uncomment when ready
        displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults(data) {
    currenttemp.innerHTML = `<strong>${data.main.temp}°C</strong>`;
    const iconsrc = `https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weathericon.setAttribute('SRC', iconsrc);
    weathericon.setAttribute('alt', iconsrc);
    texticon.textContent = desc;

}

apiFetch();